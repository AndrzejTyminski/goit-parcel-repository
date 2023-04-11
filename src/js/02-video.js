const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';

player.on('play', time);
function time() {
  player.getCurrentTime().then(function (seconds) {
    throttle(() => {
      localStorage.setItem('videoplayer-current-time', seconds);
    }, 1000);
  });
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// test dzialania lodash
const lodashTest = _.add(2, 3);
console.log(lodashTest); //
