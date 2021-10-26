import "./main.css";
import "./less/main.less";
import './js/soundcloud';

import list from './list.json';

let hash = require('object-hash');

const template = (url) => {
    let content = '';
    if (url.indexOf('youtube') !== -1 || url.indexOf('youtu.be') !== -1) {
        window.player = {};
        window.onPlayerReady = (event) => {
            event.target.playVideo();
            document.querySelector("h1").innerHTML = window.player.playerInfo.videoData.title;
        };
        window.onPlayerStateChange = (event) => {
            if (event.data == YT.PlayerState.ENDED) {
                window.location.hash = ''; window.location.reload(true);
            }
        };
        window.onYouTubeIframeAPIReady = () => {
            window.player = new YT.Player('player', {
                videoId: window.code,
                events: {
                    onReady: window.onPlayerReady,
                    onStateChange: window.onPlayerStateChange,
                },
            });
        }
        window.code = url.substring(url.lastIndexOf('/') + 1).replace('watch?v=', '');
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        content = `<div id="player"></div>`;

    }
    if (url.indexOf('soundcloud') !== -1) {
        content = `<iframe src="https://w.soundcloud.com/player/?url=${url.replace(':', '%3A') + '&amp;auto_play=true'}" 
                           scrolling="no" 
                           frameborder="no" 
                           width="640"
                           allow="autoplay"></iframe>`;
        setTimeout(() => {
            window.player = SC.Widget(document.querySelector('iframe'));
            window.player.bind(SC.Widget.Events.FINISH, () => {
                window.location.hash = ''; window.location.reload(true);
            });
            window.player.bind(SC.Widget.Events.READY, () => {
                window.player.getCurrentSound((currentSound) => {
                    document.querySelector("h1").innerHTML = currentSound.title;
                    // artwork
                    let artwork_url = null;
                    if (currentSound.artwork_url !== null)
                        artwork_url = currentSound.artwork_url;
                    else
                        artwork_url = currentSound.user.avatar_url;
                    window.changeBG(artwork_url);
                });
            });
        }, 1000);
    }
    return `
        <div class="🎶">
            <div class="🎶--box">
                ${content}
                <a href="#" onclick="window.next();">next</div>
            </div>
        </div>
        `;
};

window.next = () => {
    window.location.hash = '';
    window.location.reload(true);
    return false;
}

window.changeBG = (url) => {
    window.bg = document.createElement("canvas");
    window.bg.width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    window.bg.height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    // soundcloud artwork are squarred
    if (window.bg.width > window.bg.height)
        window,bg.width = window.bg.height;
    else
        window,bg.height = window.bg.width;
    window.bg.id = "bg";
    document.querySelector('body').appendChild(window.bg);
    let img = new Image;
    img.onload = () => {
        let ctx = document.querySelector('#bg').getContext('2d');
        ctx.drawImage(img, 0, 0, window.bg.width, window.bg.height);
        document.querySelector('body').style.backgroundColor = '#000';
    };
    img.src = url;
};

let number = -1;
if ('' !== window.location.hash) {
    const test = window.location.hash.substr(1);
    for (let i = 0; i < list.list.length; i++)
        if (test === hash(list.list[i])) {
            number = i;
            break;
        }
}
if (-1 === number)
    number = Math.floor(Math.random() * list.list.length);
window.location.hash = hash(list.list[number]);
document.querySelector("#wrapper").innerHTML += template(list.list[number]);
document.querySelector('body').innerHTML += `<div id="info">There is <b>${list.list.length}</b> tracks in the playlist.</div>`;

