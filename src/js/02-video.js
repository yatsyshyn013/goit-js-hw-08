import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = "videoplayer-current-time";

const setTime = throttle(function(evt) {
        localStorage.setItem(KEY, evt.seconds);
}, 1000);

pageReload();

player.on('timeupdate', setTime);

// const serializedState = localStorage.getItem(KEY);
// console.log(serializedState);

function pageReload() {

const reloadStorage = localStorage.getItem(KEY);
if (reloadStorage) {
        player.setCurrentTime(localStorage.getItem(KEY));
}
}

// player.setCurrentTime(localStorage.getItem(KEY));

