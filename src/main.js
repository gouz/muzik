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
                <a href="#" onclick="window.location.reload(); return false;">next</div>
            </div>
        </div>
        `;
    }
    return '';
};

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

fetch("./list.json").then((response) => {
    return response.json().then((json) => {
        let list = shuffle(json.list);
        let url = list.shift();
        document.querySelector("#wrapper").innerHTML += template(url);
    });
});

