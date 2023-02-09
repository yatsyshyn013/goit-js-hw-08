import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = "videoplayer-current-time";

const setTime = throttle(function(evt) {
        localStorage.setItem(KEY, evt.seconds);
}, 1000);

player.on('timeupdate', setTime);

player.setCurrentTime(localStorage.getItem(KEY));

