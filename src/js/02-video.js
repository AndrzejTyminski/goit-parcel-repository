const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';

player.on('play', time);
function time() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// _.throttle(() => {
//   player.on('play', time);
//   function time() {
//     player.getCurrentTime().then(function (seconds) {
//       localStorage.setItem('videoplayer-current-time', seconds);
//     });
//   }
// }, 1000)

// player.on('play', time);
// function time() {
//   player.getCurrentTime().then(function (seconds) {
//     _.throttle(() => {
//       localStorage.setItem('videoplayer-current-time', seconds)
//         }, 1000)
//   });
// }

//   player.on('play', time);
// function time() {
//  _.throttle(() => {
//   player.getCurrentTime().then(function (seconds) {
//     localStorage.setItem('videoplayer-current-time', seconds);
//   });
//     }, 1000)
// }

// player.on('play', time);
// function time() {
//   player.getCurrentTime().then(function (seconds) {
//     localStorage.setItem('videoplayer-current-time', seconds);
//   });
// }
