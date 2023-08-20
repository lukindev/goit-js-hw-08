import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player');

const THROTTLE_DELAY = 1000;

vimeoPlayer.on(
  'timeupdate',
  throttle(function (event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, THROTTLE_DELAY)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  vimeoPlayer.setCurrentTime(savedTime);
}
