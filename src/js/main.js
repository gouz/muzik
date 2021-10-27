import "../css/main.css";
import "../less/main.less";
import './soundcloud';
import FastAverageColor from 'fast-average-color';
import hash from 'object-hash';

import list from '../json/list.json';

const manageSound = (url) => {
    window.location.hash = hash(url);
    if (url.indexOf('youtube') !== -1 || url.indexOf('youtu.be') !== -1) {
        window.player = {};
        window.onPlayerReady = (event) => {
            event.target.playVideo();
            changeTitle(window.player.getVideoData().title);
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
            changeBG(`https://img.youtube.com/vi/${window.code}/default.jpg`, false);
        }
        window.code = url.substring(url.lastIndexOf('/') + 1).replace('watch?v=', '');
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        changeContent(`<div id="player"></div>`);

    }
    if (url.indexOf('soundcloud') !== -1) {
        changeContent(`<iframe src="https://w.soundcloud.com/player/?url=${url.replace(':', '%3A') + '&amp;auto_play=true'}" 
                           scrolling="no" 
                           frameborder="no" 
                           width="640"
                           allow="autoplay"></iframe>`);
        setTimeout(() => {
            window.player = SC.Widget(document.querySelector('iframe'));
            window.player.bind(SC.Widget.Events.FINISH, () => {
                window.location.hash = ''; window.location.reload(true);
            });
            window.player.bind(SC.Widget.Events.READY, () => {
                window.player.getCurrentSound((currentSound) => {
                    changeTitle(currentSound.title);
                    let artwork_url = null;
                    if (currentSound.artwork_url !== null)
                        artwork_url = currentSound.artwork_url;
                    else
                        artwork_url = currentSound.user.avatar_url;
                    changeBG(artwork_url, true);
                });
            });
        }, 10);
    }
};

window.next = () => {
    window.location.hash = '';
    window.location.reload(true);
    return false;
}

const changeBG = (url, squarred) => {
    window.bg = document.createElement("canvas");
    window.bg.width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    window.bg.height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    if (squarred) {
        if (window.bg.width > window.bg.height)
            window, bg.width = window.bg.height;
        else
            window, bg.height = window.bg.width;
    }
    window.bg.id = "bg";
    document.querySelector('body').appendChild(window.bg);
    let img = new Image;
    img.crossOrigin = "Anonymous";
    img.addEventListener('load', () => {
        let ctx = document.querySelector('#bg').getContext('2d');
        ctx.drawImage(img, 0, 0, window.bg.width, window.bg.height);
        const fac = new FastAverageColor();
        fac.getColorAsync(img).then(color => {
            document.querySelector('body').style.backgroundColor = color.rgba;
        })
    }, false);
    img.src = url;
};

const changeTitle = (title) => {
    document.querySelector("h1").innerHTML = title;
    document.querySelector('title').innerHTML = title;
};

const changeContent = (html) => {
    document.querySelector("#wrapper").innerHTML += `
    <div class="🎶">
        <div class="🎶--box">
            ${html}
            <a href="#" onclick="window.next();">⏭</div>
        </div>
    </div>
    `;
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
manageSound(list.list[number]);
document.querySelector('body').innerHTML += `<div id="info"><b>${list.list.length}</b> tracks in the playlist.</div>`;

