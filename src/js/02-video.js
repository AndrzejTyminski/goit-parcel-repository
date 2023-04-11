const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', time);
function time() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// test dzialania lodash
const result = _.add(2, 3);
console.log(result); // 
