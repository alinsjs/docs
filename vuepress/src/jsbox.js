import event from './event';
let jsbox = null;

// dev: serve ./samples/
const BASE_URL = (location.host.indexOf('localhost') !== -1) ? 'http://localhost:60845/' : 'https://cdn.jsdelivr.net/gh/theajack/cnchar@gh-pages/';

const DEF_CONFIG = 'remind=false&mes=false';

function getUrl () {
    let url = '';
    const host = window.location.host;
    if (host.indexOf('localhost') !== -1 || host === 'theajack.github.io') {
        url = 'https://theajack.github.io';
    } else {
        url = `${window.location.protocol}//theajack.gitee.io`;
    }
    return url + '/jsbox/?' + DEF_CONFIG;
}

function main () {
    if (jsbox !== null) {
        return jsbox;
    }
    hackConsole();
    initStyle();
    const mask = initDom();
    const iframe = mask.querySelector('.jsbox-iframe');
    const closeIcon = mask.querySelector('.jsbox-close');
    function setUrl (url) {
        if (jsbox.url !== url) {
            jsbox.url = url;
            iframe.src = jsbox.url;
        }
    }
    function open () {
        mask.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    function close () {
        mask.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    function code (_code = '', lang = 'javascript', env = 'alins') { // alins | alins-style
        if (jsbox._code !== _code) {
            jsbox._code = _code;
            setUrl(`${getUrl()}&env=${env}&code=${encodeURIComponent(_code)}&lang=${lang}`);
        }
        open();
    }
    function openUrl (url) {
        setUrl(url.replace('?', `?${DEF_CONFIG}&`));
        open();
    }
    function openGitHub (str) {
        setUrl(`${getUrl()}&github=${str}`);
        open();
    }
    function openSample (name) {
        setUrl(`${getUrl()}&codeSrc=${BASE_URL}samples/${name}.js`);
        open();
    }
    closeIcon.onclick = close;
    jsbox = {
        open,
        close,
        code,
        openUrl,
        openGitHub,
        openSample,
    };
    return jsbox;
}

function hackConsole () {
    const log = console.log;
    console.log = (...arg) => {
        event.emit('onlog', arg);
        log(...arg);
    };
}

function initDom () {
    const mask = document.createElement('div');
    mask.className = 'jsbox-mask';
    mask.innerHTML = /* html*/`
    <div class='jsbox-header'>
        Powered by <a class='jsbox-link' target='view_window' href='https://github.com/theajack/jsbox'><i class='ei-cube-alt'></i> JSBox</a>
        <i class='ei-times jsbox-close'></i>
    </div>
    <div class='jsbox-loading-w'><i class='ei-spinner-indicator ei-spin'></i></div>
    <iframe class='jsbox-iframe' src='' frameborder='0'></iframe>`;
    document.body.appendChild(mask);
    return mask;
}

function initStyle () {
    const style = document.createElement('style');
    style.innerText = /* css*/`
    .jsbox-mask{
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000000dd;
        display: none;
    }
    .jsbox-header{
        height: 4%;
        vertical-align: middle;
        font-size: 1rem;
        color: #eee;
        display: flex;
        align-items: center;
        padding: 0 5px;
        background-color: #1e1e1e;
    }
    .jsbox-link{
        margin-left: 5px;
    }
    .jsbox-close{
        cursor: pointer;
        position: absolute;
        right: 10px;
        font-size: 1.5rem;
    }
    .jsbox-close:hover{
        color: #e88;
    }
    .jsbox-iframe{
        width: 100%;
        height: 96%;
        box-shadow: 0 0 15px #000;
        position: relative;
    }
    .jsbox-loading-w{
        position: absolute;
        font-size: 3rem;
        color: #aaa;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
    }`;
    document.head.appendChild(style);
}

export default main;