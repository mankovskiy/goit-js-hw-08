import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

// const timePlay = localStorage.getItem('videoplayer-current-time');
// console.log(timePlay);
// const timeNumber = Number(timePlay);
// console.log(timeNumber);
// const parsTimePlay = JSON.parse(timePlay);
// console.log(parsTimePlay);

const onPlay = data => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log(currentTime);
};

// player.on('play', onPlay);

player.on('timeupdate', throttle(onPlay, 1000));
const timePlay = localStorage.getItem('videoplayer-current-time');
console.log('played the video!');

// player.getVideoTitle().then(function (title) {
// console.log('title:', title);
// });
function setCurrentTime() {
  if (timePlay) {
    return timePlay;
  }
}

player.setCurrentTime(timePlay);
// .then(function (seconds) {})
// .catch(function (error) {
//   switch (error.name) {
//     case 'RangeError':
//       break;

//     default:
//       break;
//   }
// });
