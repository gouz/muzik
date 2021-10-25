import "./main.css";
import "./less/main.less";
import './js/soundcloud';

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
    window.bg.id = "bg";
    document.querySelector('body').appendChild(window.bg);
    let img = new Image;
    img.onload = () => {
        let ctx = document.querySelector('#bg').getContext('2d');
        ctx.drawImage(img, 0, 0, window.bg.width, window.bg.height);
        try {
            let data = context.getImageData(0, 0, window.bg.width, window.bg.height);
            let length = data.data.length;
            let blockSize = 5;
            let rgb = { r: 0, g: 0, b: 0 };
            while ((i += blockSize * 4) < length) {
                ++count;
                rgb.r += data.data[i];
                rgb.g += data.data[i + 1];
                rgb.b += data.data[i + 2];
            }
            rgb.r = ~~(rgb.r / count);
            rgb.g = ~~(rgb.g / count);
            rgb.b = ~~(rgb.b / count);
            document.querySelector('body').style.backgroundColor = `rgb(${rbg.r}, ${rgb.b}, ${rgb.g})`;
        } catch (e) {
            document.querySelector('body').style.backgroundColor = '#000';
        }
    };
    img.src = url;
};

fetch("./list.json").then((response) => {
    return response.json().then((json) => {
        let number = Math.floor(Math.random() * json.list.length);
        if (window.location.hash != '') {
            number = window.location.hash.replace('#', '') - 1;
            if (number > json.list.length || number < 1)
                number = Math.floor(Math.random() * json.list.length);

        }
        window.location.hash = number + 1;
        document.querySelector("#wrapper").innerHTML += template(json.list[number]);
        document.querySelector('body').innerHTML += `<div id="info">There is <b>${json.list.length}</b> tracks in the playlist.</div>`;
    });
});

