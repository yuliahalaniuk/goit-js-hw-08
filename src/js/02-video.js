import Player from '@vimeo/player';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);

player.on('timeupdate', function (evt) {
  console.log(evt.seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
});
