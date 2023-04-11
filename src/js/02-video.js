const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';

player.on('play', _.throttle(time, 1000));
function time() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
