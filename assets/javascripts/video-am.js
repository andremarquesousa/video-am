(function($){
    $.fn.videoAm = function(newOptions) {
        var $this = $(this),
            video = $('video', $this).get(0),
            options = {
                playPause: true,
                time: true,
                volume: true,
                autoplay: false
            };

        if (newOptions) {
            $.extend( options, newOptions );
        }

        video.controls = false;

        var init = function() {
            var controls = $('<div class="controls-am">');

            if (options.playPause) {
                var playPause = $('<button type="button" class="play-pause-am">');

                playPause.on('click', function(event) {
                    if (video.paused) {
                        actions.play();
                    } else if ($this.hasClass('playing')) {
                        actions.pause();
                    } else {
                        actions.start();
                    }
                });
                playPause.appendTo(controls);
            };
            if (options.time) {
                var time = $('<span class="time-am"><input type="range" /></span>');
                time.appendTo(controls);

                $(video).on('timeupdate',function(){
                  console.log(Math.ceil(video.currentTime));
                });
            }
            if (options.volume) {
                var volume = $('<span class="volume-am"><input type="range" max="100" min="0" /></span>'),
                    input = $('input', volume),
                    value = localStorage.getItem('volume');

                volume.appendTo(controls);
                video.volume = value;
                input.val(value * 100);

                input.on('change', function() {
                    value = Math.abs($(this).val() / 100);
                    video.volume = value;
                    localStorage.setItem('volume', value);
                });
            }
            if (options.autoplay) {
                actions.start();
            }
            controls.appendTo($this);

            $(video).on('ended',function(){
              actions.stop();
            });
        }

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

        init();

        return this
    };
})(jQuery);