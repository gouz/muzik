import "./main.css";
import "./less/main.less";

const template = (url) => {
    if (url.indexOf('youtube') !== -1 || url.indexOf('youtu.be') !== -1) {
        const code = url.substring(url.lastIndexOf('/') + 1).replace('watch?v=', '');
        return `
        <div class="🎶">
            <div class="🎶--box">
                <iframe 
                    src="https://www.youtube.com/embed/${code}" 
                    allowFullScreen="allowFullScreen" 
                    width="640" height="360"
                    allowtransparency="true" 
                    frameborder="0"
                    allow="autoplay"
                >
                </iframe>
                <a href="#" onclick="window.location.hash = ''; window.location.reload(true); return false;">next</div>
            </div>
        </div>
        `;
    }
    return '';
};

fetch("./list.json").then((response) => {
    return response.json().then((json) => {
        let number = Math.floor(Math.random() * json.list.length);
        if (window.location.hash != '')
        {
            number = window.location.hash.replace('#', '');
            if (number > json.list.length)
                number = Math.floor(Math.random() * json.list.length);
            
        }
        window.location.hash = number;
        document.querySelector("#wrapper").innerHTML += template(json.list[number]);
    });
});

