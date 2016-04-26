(function($){
    $.fn.videoAm = function(newOptions) {
        var $this = $(this),
            video = $('video', $this).get(0),
            controls,
            options = {
                playPause: true,
                overlay: true,
                poster: true,
                time: true,
                volume: true,
                autoplay: false,
                fullscreen: false
            };

        if (newOptions) {
            $.extend( options, newOptions );
        }

        video.controls = false;

        var actions = {
            start: function() {
                video.play();
                $this.addClass('playing');
            },
            stop: function(){
                $this.removeClass('playing');
            },
            play: function() {
                video.play();
                $this
                    .removeClass('paused')
                    .addClass('playing');
            },
            pause: function() {
                video.pause();
                $this
                    .removeClass('playing')
                    .addClass('paused');
            }
        }

        var verifyAction = function() {
            if (video.paused) {
                actions.play();
            } else if ($this.hasClass('playing')) {
                actions.pause();
            } else {
                actions.start();
            }   
        }

        var init = function() {
            controls = $('<div class="controls-am">');

            if (options.overlay) {
                overlay();
            }
            if (options.poster) {
                poster();
            }
            if (options.playPause) {
                playPause();
            }
            if (options.time) {
                time();
            }
            if (options.volume) {
                volume();
            }
            if (options.fullscreen) {
                fullscreen();
            }
            if (options.autoplay) {
                actions.start();
            }

            $(video).on('ended',function(){
              actions.stop();
            });

            $(video).on('click', function(e) {
                verifyAction();
            });

            controls.appendTo($this);
        }

        var overlay = function() {
            var layer = $('<span class="overlay-am">');

            layer.on('click', function(e) {
                if ($this.hasClass('paused')) {
                    actions.play();
                } else {
                    actions.start();
                }
            });
            layer.appendTo($this);
        }

        var poster = function() {
            var imageUrl = $(video).attr('poster'),
                image = $('<span class="poster-am"></span>').css('backgroundImage', 'url("' + imageUrl + '")');

            image.appendTo($this);
            $(video).removeAttr('poster');
        }

        var playPause = function() {
            var button = $('<button type="button" class="play-pause-am">');

            button.on('click', function() {
                verifyAction();
            });
            button.appendTo(controls);
        }

        var time = function() {
            var time = $('<div class="time-am"><span class="current-time-am"></span><input type="range" max="' + Math.floor(video.duration) + '" min="0" /><span class="total-time-am"></span></div>'),
                input = $('input', time),
                currentTime;

            time.appendTo(controls);

            function formatTime(seconds) {
                minutes = Math.floor(seconds / 60);
                minutes = (minutes >= 10) ? minutes : "0" + minutes;
                seconds = Math.floor(seconds % 60);
                seconds = (seconds >= 10) ? seconds : "0" + seconds;
                return minutes + ":" + seconds;
            }
            $('.total-time-am', time).text(formatTime(video.duration));
            $('.current-time-am', time).text('00:00');
            input.val(Math.floor(video.currentTime));

            input.on('input', function() {
                video.currentTime = $(this).val();
            });

            $(video).on('timeupdate',function(e){
                $('.current-time-am', time).text(formatTime(video.currentTime));
                input.val(Math.floor(video.currentTime));
            });
        }

        var volume = function() {
            var volume = $('<span class="volume-am"><input type="range" max="100" min="0" orient="vertical" /></span>'),
                input = $('input', volume),
                value = localStorage.getItem('volume');

            volume.appendTo(controls);
            video.volume = value;
            input.val(value * 100);

            input.on('input', function() {
                value = Math.abs($(this).val() / 100);
                video.volume = value;
                localStorage.setItem('volume', value);
            });
        }

        var fullscreen = function() {
            var button = $('<button type="button" class="fullscreen-am">');

            button.on('click', function() {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.mozRequestFullScreen) {
                    video.mozRequestFullScreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                }
            });

            button.appendTo(controls);
        }

        if (video.readyState === 4) {
            init();
        } else {
            video.onloadeddata = function() {
                init();
            };
        }

        return this
    };
})(jQuery);