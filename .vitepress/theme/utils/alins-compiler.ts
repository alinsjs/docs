/*
 * @Author: chenzhongsheng
 * @Date: 2023-09-08 13:17:31
 * @Description: Coding something
 */
export const IS_DEV = () => location.hostname === 'localhost';

export async function compileCode(code: string){
    return (await getCompiler())(code, { importType: 'esm', ts: true });
}

function getCompiler(): Promise<(code:string, opt: any)=>string> {
    return new Promise(resolve=>{
        checkAlinsCompiler(resolve);
    })
}

function checkAlinsCompiler(resolve: any){
    // @ts-ignore
    if(!window.AlinsWeb){
        setTimeout(()=>{
            checkAlinsCompiler(resolve);
        }, 500);
    }else{
        // @ts-ignore
        resolve(window.AlinsWeb.parseWebAlins);
    }
}

let downloadLink: any;

export function download (code: string, name = 'Alins Demo') {
    // store
    if (!downloadLink) {
        downloadLink = document.createElement('a');
        downloadLink.setAttribute('style', 'position: fixed;top: -100px');
        document.body.appendChild(downloadLink);
    }
    downloadLink.setAttribute('download', `${name.replace(/ /g, '-')}.alins.html`);
    const blob = new Blob([ createAlinsHTML(name, code) ], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.click();
}

function createAlinsHTML (name: string, code: string) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}</title>
    <script src="https://unpkg.com/alins-compiler-web"></script>
</head>
<body>
    <!--
        This demo is only used for development and debugging. 
        For official use, please refer to https://alinsjs.github.io/docs/
    -->
    <div id="App"></div>
    <script type="text/alins" ts>
${code}
    </script>
</body>
</html>`;
}

export function copy (str: string) {
    let input = document.getElementById('_copy_input_') as any;
    if (!input) {
        input = document.createElement('textarea');
        input.setAttribute('type', 'text');
        input.setAttribute(
            'style',
            'height:10px;position:fixed;top:-100px;opacity:0;'
        );
        input.setAttribute('id', '_copy_input_');
        document.body.appendChild(input);
    }
    input.value = str;
    input.select();

    try {
        if (document.execCommand('Copy')) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
};

export function countCodeSize(code: string){
    const textEncoder = new TextEncoder();
    const size = textEncoder.encode(code).length;
    if(size > 1024) return (size / 1024).toFixed(2)+' kb'
    return size+' byte';
}

export function createIFrameSrc (code: string, id: string, isHtml: boolean) {
    let html = '';
    if(isHtml){
        html = code;
    } else {
        const alinsSrc = IS_DEV() ? `${location.origin}/alins.iife.min.js`: `https://unpkg.com/alins`;
        html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iframe runner</title>
    <script src="${alinsSrc}"></script>
    <style>
    body, html{color: #fff;background-color:#171717;}
    body, body * {box-sizing: border-box;}
    button, input, select{
        margin: 5px;
        padding: 6px 10px;
        background-color: #222;
        border: none;
        border-radius: 1px;
        outline: none;
        color: #ccc;
        border: 1px solid #666;
        border-radius: 5px;
    }
    button, select{
        cursor: pointer;
    }
    button: hover, select: hover{
        background-color: #333;
    }
    button:active{
        background-color: #555;
    }
    </style>
</head>
<body>
    <div id="App"></div>
    <script>
        function postMsg(type, data=[]) {
            window.parent.postMessage({type, data, id: '${id}'});
        }
        console.log = (...args) => {
            postMsg('iframe_log', args);
        };
        console.clear = () => {
            postMsg('iframe_clear_log');
        };
        window.addEventListener('DOMContentLoaded', () => {
            postMsg('iframe_loaded');
        });
        
    </script>
    <script>
${code}
    </script>
</body>
</html>`;
    }
    const blob = new Blob([ html ], { type: 'text/html' });
    return URL.createObjectURL(blob);
}