import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

let currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(JSON.parse(currentTime));
}

player.on(
  'timeupdate',
  throttle(function (evt) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(evt.seconds)
    );
  }, 1000)
);
