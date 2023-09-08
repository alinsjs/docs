
export async function compileCode(code: string){
    return (await getCompiler())(code);
}

function getCompiler(): Promise<(code:string)=>string> {
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
    <script src="https://cdn.jsdelivr.net/npm/alins-compiler-web"></script>
</head>
<body>
    <!--
        This demo is only used for development and debugging. 
        For official use, please refer to https://alinsjs.github.io/docs/
    -->
    <div id="App"></div>
    <script type="text/alins">
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