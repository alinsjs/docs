# Custom Renderer

Although Alins directly operates DOM elements, it also provides an optional UI abstraction layer, allowing developers to perform custom rendering or cross-platform development by modifying the render function or custom rendering elements.

## 1. Custom render function

The rendering function can be customized through the useRenderer function provided by Alins. After customizing the rendering function, Alins will enable the UI abstraction layer internally, and finally render the UI abstraction layer to any object through the developer's customized render function.

Here is an example of using console.log to print the UI abstraction layer:

<CodeBox :iframe='true' :height='50'></CodeBox>

```jsx
import { useRenderer, CustomElement } from 'alins';

function start(){
     const root = useRenderer({
         render (node: CustomElement) {
             const prefix = new Array(node.deep).fill(' ').join('');
             const text = `${node.innerText}`;
             console.log(`${prefix}${node.tagName || 'text'}: ${text.trim()}`);
         }
     });
     let v = 0;
     const v2 = v * 2;
     <div $mount={root}>
         value = {v}
         <div>value * 2 = {v2}</div>
     </div>;
     function loopRender () {
         v++;
         console.clear();
         root.render();
         setTimeout(() => {requestAnimationFrame(loopRender);}, 1000);
     }
     loopRender();
}
<button onclick={start} $$App>Start</button>
```

## 2. Use canvas as container

We can also use canvas as a container to render Alins' UI abstraction layer, which is very useful in certain canvas-based scenarios, such as H5 game engines, small game environments, etc.

<CodeBox :iframe='true' :height='390' />

```jsx
import { useRenderer, CustomElement } from 'alins';

function start(e){
     e.target.remove();

     let msg = 'Hello World';
    
     let canvas;
     <div $$App>
         <canvas $ref={canvas} style='border: 1px solid #666;'></canvas>
         <div>msg = {msg}</div>
         <button onclick={msg += '!'}>Click Me </button>
     </div>;

     const ctx = initCanvasCtx(canvas);

     const root = useRenderer({
         render (element: CustomElement) {
             const _parent = element.parentElement || { deep: 0 };
             if (!_parent.textLeft) _parent.textLeft = 10;
             ctx.fillText(element.textContent, _parent.textLeft, (_parent.deep - 1) * 15 + 10);
             _parent.textLeft += (ctx.measureText(element.textContent).width);
             return el => {el.textLeft = 0;};
         },
     });

     <div $mount={root}>
         msg = {msg}
     </div>;
     loopRender();

     function loopRender () {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         root.render();
         requestAnimationFrame(loopRender);
     }
}

<button onclick={start} $$App>Start</button>

function initCanvasCtx (canvas, size = 300) {
     const scale = window.devicePixelRatio;
     canvas.width = canvas.height = size * scale;
     canvas.style.width = canvas.style.height = `${size}px`;
     canvas.style.backgroundColor = '#333';
     const ctx = canvas.getContext('2d');
     ctx.font = `${15 * scale}px Microsoft Sans Serif`;
     ctx.fillStyle = '#eee';
     ctx.textBaseline = 'top';
     return ctx;
}
```

## 3. Custom abstraction layer

Developers can customize the abstraction layer through the interface provided by Alins, first by implementing the IElement interface to customize the UI element class, and then by calling the `defineRenderer` method to customize the abstraction layer and renderer.

<CodeBox :iframe='true' :height='50'></CodeBox>

```jsx
import { IElement, defineRenderer, ILifeListener } from 'alins';

const ElementType = {
    Element: 0,
    Text: 1,
    Empty: 2,
    Frag: 3,
};

class LogElement implements IElement {
    static Root: null|LogElement = null;
    type = ElementType.Element;
    style = {}; // mock
    tagName = '';
    className = '';
    innerText = '';
    get textContent () {return this.innerText;};
    set textContent (v) {this.innerText = v;}
    deep = 0;
    get prefix () {
        return new Array(this.deep).fill('--').join('');
    }
    addEventListener () {};
    removeEventListener () {};
    setAttribute () {};
    removeAttribute () {};
    getAttribute () {return '';};
    classList = {
        add () {},
        remove () {}
    };
    constructor (type, text = '', tag = '') {
        this.type = type;
        this.tagName = tag;
        this.innerText = text;
        if (tag === 'Root') LogElement.Root = this;
    }
    parentElement: LogElement|null = null;
    get parentNode () {return this.parentElement;};
    removeCallList: any[] = [];
    remove () {
        const children = this.parentElement?.children;
        if (children) {
            children.splice(children.indexOf(this), 1);
            this.removeCallList.forEach(call => call(this));
        }
    }
    get innerHTML () {return this.innerText;}
    get outerHTML () {return this.innerText;}
    children: LogElement[] = [];
    get childNodes () {
        return this.childNodes;
    }
    mountCallList: any[] = [];
    appendChild (child: LogElement) {
        this.children.push(child);
        child.mountCallList.forEach(call => call(child));
    }
    get nextSibling () {
        return this.parentElement?.children[this.index + 1] || null;
    }
    insertBefore (node, child) {
        if (child.parentElement !== this) {
            throw new Error('insertBefore error');
        }
        this.parentElement?.children.splice(child.index - 1, 0, node);
        child.mountCallList.forEach(call => call(child));
        return node;
    }
    get index () {
        const parent = this.parentElement;
        return !parent ? -1 : parent.children.indexOf(this);
    }
    render () {
        const text = `${this.innerText}`;
        if (this.type === ElementType.Text) {
            text && console.log(`${this.prefix}text: ${text.trim()}`);
        } else if (this.type === ElementType.Element) {
            console.log(`${this.prefix}${this.tagName}: ${text.trim()}`);
            this.children.forEach(item => {
                item.deep = this.deep + 1;
                item.render();
            });
        }
    }
}

function start(){
    defineRenderer({
        querySelector (selector) {return selector === '#Root' ? LogElement.Root : null;},
        createElement (tag = '') {
            return new LogElement(ElementType.Element, '', tag);
        },
        createTextNode (text) {
            return new LogElement(ElementType.Text, text);
        },
        createEmptyMountNode () {
            return new LogElement(ElementType.Empty);
        },
        createFragment () {
            return new LogElement(ElementType.Frag);
        },
        isFragment (node) {
            return node.type === ElementType.Frag;
        },
        isElement (node) {
            return node.type === ElementType.Element || node.type === ElementType.Text;
        },
        onMounted (parent: LogElement, node: LogElement, mounted: ILifeListener<void|ILifeListener>) {
            node.mountCallList.push(mounted);
        },
        onRemoved (parent: LogElement, node: LogElement, removed: ILifeListener) {
            node.removeCallList.push(removed);
        },
    });

    const Root = new LogElement(ElementType.Element, '', 'Root');

    let v = 0;
    const v2 = v * 2;

    <div $$Root>
        value = {v}
        <div>value * 2 = {v2}</div>
    </div>;

    function loopRender () {
        v ++;
        console.clear();
        Root.render();
        setTimeout(() => {requestAnimationFrame(loopRender);}, 1000);
    }

    loopRender();
}

<button onclick={start} $$App>Start</button>
```

## 4. Used in Nodejs

To use it in nodejs, you need to first compile the jsx file into a js file through alins related plug-ins.

In this example, babel + [babel-plugin-alins](https://www.npmjs.com/package/babel-plugin-alins) is used to compile

### 4.1 Environment preparation

First npm init initializes the environment, and then installs the following packages

```
npm i @babel/core @babel/node alins babel-preset-alins -D
```

Configuration babel.config.json

```json
{
     "presets": [ ["alins", {"importType": "cjs"}] ]
}
```

Create new index.jsx

```jsx
const { version } = require('alins');
console.log('Hello Alins! v = ', version);
```

Add script to package.json:

```json
"scripts": {
     "dev": "babel-node ./index.jsx"
},
```

Then execute `npm run dev` and see Hello Alins! printed, which means the installation is successful.

### 4.2 Custom renderer

Modify the file in index.jsx to the following code:

```jsx
const { useRenderer } = require('alins');

const root = useRenderer({
     render (node) {
         const prefix = new Array(node.deep).fill(' ').join('');
         const text = `${node.innerText}`;
         console.log(`${prefix}${node.tagName || 'text'}: ${text.trim()}`);
     }
});
let v = 0;
const v2 = v * 2;
<div $mount={root}>
         value = {v}
     <div>value * 2 = {v2}</div>
</div>;
function loopRender () {
     v++;
     console.clear();
     root.render();
     setTimeout(loopRender, 1000);
}
loopRender();
```

Then execute `npm run dev`, and you can see the ui printed in the console.