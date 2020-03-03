# video-am
Studying Jquery


HTML EXAMPLE

```html
<div class="video-am">
  <video controls>
    <source src="assets/videos/video.mp4" type="video/mp4">
    <source src="assets/videos/video.ogg" type="video/ogg">
  Your browser does not support the video tag.
  </video>
</div>
```

CSS EXAMPLE

```css
button {
  cursor: pointer;
}

.video-am {
  position: relative;
  width: 800px;
  height: 450px;
  margin: 30px auto 0;
  overflow: hidden;
}
.video-am.fullscreen-mode-am {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}
.video-am.fullscreen-mode-am .video-container-am {
  width: 100%;
  height: 100%;
}
.video-am.fullscreen-mode-am .controls-am .fullscreen-am {
  background-image: url('../images/exitfullscreen.svg?1461869287');
}
.video-am .poster-am
, .video-am .overlay-am {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.video-am .poster-am {
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
}
.video-am.playing .poster-am
, .video-am.paused .poster-am {
  visibility: hidden;
}
.video-am .overlay-am {
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
}
.video-am .overlay-am:before
, .video-am .overlay-am:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.video-am .overlay-am:before {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  left: 0;
  width: 100px;
  height: 100px;
  border: solid 4px #fff;
}
.video-am .overlay-am:after {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transition: -moz-transform 0.4s;
  -o-transition: -o-transform 0.4s;
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  left: 10px;
  width: 0;
  height: 0;
  border-top: solid 20px transparent;
  border-bottom: solid 20px transparent;
  border-left: solid 30px #fff;
}
.video-am .video-container-am {
  position: relative;
  z-index: 1 !important;
}
.video-am .video-container-am video {
  background: #000;
  display: block;
  width: 100%;
  height: 100%;
}
.video-am .video-container-am video::-webkit-media-controls
, .video-am .video-container-am video::-webkit-media-controls-enclosure {
  display: none !important;
}
.video-am .controls-am {
  -moz-transition: -moz-transform 0.6s 2s;
  -o-transition: -o-transform 0.6s 2s;
  -webkit-transition: -webkit-transform 0.6s;
  -webkit-transition-delay: 2s;
  transition: transform 0.6s 2s;
  -moz-transform: translateY(60px);
  -ms-transform: translateY(60px);
  -webkit-transform: translateY(60px);
  transform: translateY(60px);
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 40px;
}
.video-am .controls-am .play-pause-am {
  position: relative;
  height: 100%;
  width: 50px;
}
.video-am .controls-am .play-pause-am:before
, .video-am .controls-am .play-pause-am:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.video-am .controls-am .play-pause-am:before {
  width: 0;
  height: 0;
  border-top: solid 12px transparent;
  border-bottom: solid 12px transparent;
  border-left: solid 15px #fff;
}
.video-am .controls-am .play-pause-am:after {
  visibility: hidden;
  width: 10px;
  height: 20px;
  border-left: solid 6px #fff;
  border-right: solid 6px #fff;
}
.video-am .controls-am .time-am {
  width: 500px;
  padding: 0 40px;
  position: relative;
}
.video-am .controls-am .time-am .current-time-am
, .video-am .controls-am .time-am .total-time-am {
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  vertical-align: middle;
  position: absolute;
  top: 0;
}
.video-am .controls-am .time-am .current-time-am {
  left: 0;
}
.video-am .controls-am .time-am .total-time-am {
  right: 0;
}
.video-am .controls-am .time-am input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
}
.video-am .controls-am .time-am input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.video-am .controls-am .time-am input[type="range"]:focus {
  outline: none;
}
.video-am .controls-am .time-am input[type="range"]::-ms-track {
  width: 100%;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.video-am .controls-am .time-am input[type="range"]::-webkit-slider-thumb {
  background: #ffffff;
  height: 10px;
  width: 5px;
  margin-top: -2px;
}
.video-am .controls-am .time-am input[type="range"]::-moz-range-thumb {
  background: #ffffff;
  height: 10px;
  width: 5px;
  margin-top: -2px;
}
.video-am .controls-am .time-am input[type="range"]::-ms-thumb {
  background: #ffffff;
  height: 10px;
  width: 5px;
  margin-top: -2px;
}
.video-am .controls-am .time-am input[type="range"]::-webkit-slider-runnable-track {
  background: rgba(255, 255, 255, 0.4);
  width: 100%;
  height: 5px;
}
.video-am .controls-am .time-am input[type="range"]::-moz-range-track {
  background: rgba(255, 255, 255, 0.4);
  width: 100%;
  height: 5px;
}
.video-am .controls-am .time-am input[type="range"]::-ms-track {
  background: rgba(255, 255, 255, 0.4);
  width: 100%;
  height: 5px;
}
.video-am .controls-am .time-am input[type="range"]::-ms-fill-lower {
  background: #2a6495;
}
.video-am .controls-am .time-am input[type="range"]::-ms-fill-upper {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 2.6px;
}
.video-am .controls-am .volume-am {
  -moz-background-size: 20px auto;
  -o-background-size: 20px auto;
  -webkit-background-size: 20px auto;
  background-size: 20px auto;
  background-image: url('../images/volume.svg?1461692612');
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
}
.video-am .controls-am .volume-am:before
, .video-am .controls-am .volume-am:after {
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  content: '';
  display: block;
  background: rgba(210, 21, 21, 0.6);
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 25px;
  height: 4px;
}
.video-am .controls-am .volume-am:before {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.video-am .controls-am .volume-am:after {
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.video-am .controls-am .volume-am.muted:before
, .video-am .controls-am .volume-am.muted:after {
  visibility: visible;
}
.video-am .controls-am .volume-am input[type="range"] {
  -moz-transition: visibility 0s 1s;
  -o-transition: visibility 0s 1s;
  -webkit-transition: visibility 0s;
  -webkit-transition-delay: 1s;
  transition: visibility 0s 1s;
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-appearance: none;
  background: rgba(0, 0, 0, 0.6);
  visibility: hidden;
  position: absolute;
  left: 0;
  bottom: 85px;
  width: 130px;
  height: 40px;
  margin-left: -45px;
}
.video-am .controls-am .volume-am input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.video-am .controls-am .volume-am input[type="range"]:focus {
  outline: none;
}
.video-am .controls-am .volume-am input[type="range"]::-ms-track {
  width: 100%;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.video-am .controls-am .volume-am input[type="range"]::-webkit-slider-thumb {
  background: #ffffff;
  height: 15px;
  width: 10px;
  margin-top: -2.5px;
  border: solid 1px rgba(0, 0, 0, 0.6);
  border-radius: 3px;
}
.video-am .controls-am .volume-am input[type="range"]::-moz-range-thumb {
  background: #ffffff;
  height: 15px;
  width: 10px;
  margin-top: -2.5px;
  border: solid 1px rgba(0, 0, 0, 0.6);
  border-radius: 3px;
}
.video-am .controls-am .volume-am input[type="range"]::-ms-thumb {
  background: #ffffff;
  height: 15px;
  width: 10px;
  margin-top: -2.5px;
  border: solid 1px rgba(0, 0, 0, 0.6);
  border-radius: 3px;
}
.video-am .controls-am .volume-am input[type="range"]::-webkit-slider-runnable-track {
  background: rgba(255, 255, 255, 0.4);
  width: 20px;
  height: 10px;
}
.video-am .controls-am .volume-am input[type="range"]::-moz-range-track {
  background: rgba(255, 255, 255, 0.4);
  width: 20px;
  height: 10px;
}
.video-am .controls-am .volume-am input[type="range"]::-ms-track {
  background: rgba(255, 255, 255, 0.4);
  width: 20px;
  height: 10px;
}
.video-am .controls-am .volume-am input[type="range"]::-ms-fill-lower {
  background: #2a6495;
}
.video-am .controls-am .volume-am input[type="range"]::-ms-fill-upper {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 2.6px;
}
.video-am .controls-am .volume-am:hover input[type="range"] {
  -moz-transition: visibility 0s;
  -o-transition: visibility 0s;
  -webkit-transition: visibility 0s;
  transition: visibility 0s;
  visibility: visible;
}
.video-am .controls-am .fullscreen-am {
  -moz-background-size: 20px auto;
  -o-background-size: 20px auto;
  -webkit-background-size: 20px auto;
  background-size: 20px auto;
  background-image: url('../images/fullscreen.svg?1461692612');
  background-position: center;
  background-repeat: no-repeat;
  content: '';
  width: 40px;
  height: 100%;
}
.video-am:hover .controls-am
, .video-am .controls-am:focus {
  -moz-transition: -moz-transform 0.6s;
  -o-transition: -o-transform 0.6s;
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.video-am:hover:after {
  -moz-transform: scale(1.1, 1.1);
  -ms-transform: scale(1.1, 1.1);
  -webkit-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}
.video-am.playing .overlay-am {
  visibility: hidden;
}
.video-am.playing .controls-am .play-pause-am:before {
  visibility: hidden;
}
.video-am.playing .controls-am .play-pause-am:after {
  visibility: visible;
}

```

USAGE

$('.video-am').videoAm();

OPTIONS





