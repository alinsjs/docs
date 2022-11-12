<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:50:46
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 16:09:48
-->
## 1. dom-builder

In Alins, we use functions to construct a dom-builder object that can be rendered to a document by mounting it to a dom node, dom-builder, and comp-builder object

The following is the structure of a dom-builder object

```ts
interface IElementBuilder {
    type: 'builder';
    exe(): IElement;
    mount(parent?: IMountParent): void;
}
```

### 1.1. Hello World example

Let's mount a Hello World div to the body node with the following code

<code-runner title='dom example' ></code-runner>

```js
import {div} from 'alins';
div('Hello World!').mount();
```

### 1.2. Build the dom-builder object

#### 1.2.1 The DOM object is exported by default

With the builder function exported from alins by default, we can create almost any DOM object

```js
import {div, span, a, i, img, input, button ...} from 'alins';
```

The following are the builder functions exported by default

```js
const MainDomNames = [
    'a', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'canvas', 'code', 'pre', 'table', 'th', 'td', 'tr', 'video', 'audio',
    'ol', 'select', 'option', 'p', 'i', 'iframe', 'img', 'input', 'label', 'ul', 'li', 'span', 'textarea', 'form', 'br', 'tbody'
]
```

#### 1.2.2 Other DOM objects

You can see that the above only contains a small number of commonly used DOM elements, and for others that are not exported, we can use them through DOMS objects

<code-runner/>

```js
import {doms} from 'alins';
doms.header('header').mount();
doms.section('section').mount();
```

Then if we need to customize the DOM tag, we can use the DOM function

<code-runner/>

```js
import {dom} from 'alins';
dom('my-element')('Hello!').mount();
```

The dom() function returns a dom builder, so 'dom('div') is equivalent to div'

## 2. Properties and content

The builder function populates everything in the DOM by passing parameters, including text, html, styles, classes, attributes, child nodes, events, responsive data, controllers, lifecycles, and so on

In this chapter, I will first introduce text, html, classes, attributes, and child nodes. Other build parameters are described in detail in later sections

We directly use parameters to pass in all build parameters, the syntax is as follows

```ts
builder(... BuildArgs: TBuildArgs[]);
```

### 2.0 Empty dom node

Passing in no parameters means constructing an empty DOM node

```js
div();
```

### 2.1 Text, classes, attributes

We can directly use string parameters for these three attributes, and alins uses the emment style to parse strings

#### 2.1.1 Incoming text

<code-runner title='text' ></code-runner>

```js
import {div} from 'alins';
div('Hello World!').mount();
div(':Hello World!').mount();
```

The colon indicates that the text content is followed and can be ignored if the text content is passed in separately

#### 2.1.2 Classes, properties, and IDs

Use '.' to indicate class '[]' for attribute '#' for id

<code-runner/>

```js
import {div} from 'alins';
div('class instance', '.class1.class2').mount();
div('property instance', '[disabled][title=property instance]').mount();
div('id instance', '#idDemo').mount();
div('combination', '#idDemo.class1.class2[title=combination]').mount();
```

#### 2.1.1 Change the DOM tag

You can use '/' to change the current dom-builder tag, which will be useful in if and switch controller scenarios

<code-runner />

```js
import {div} from 'alins';
div('/button: I now become a button').mount();
```

#### 2.1.1 Combination

<code-runner />

```js
import {div} from 'alins';
div('#domDemo.dom-class.dom-class2[title=domDemo2]: use in combination').mount();
div('/h3#domDemo2.dom-class[title=domDemo2]: combine and change the label').mount();
div('Combinatorial separation use', '.dom-class', '[title=domDemo3]').mount();
```

### 2.2 Child nodes

Pass the builder as an argument to another builder, and that builder becomes a child node of another builder

Builder arrays are also supported as arguments

<code-runner title='text' ></code-runner>

```js
import {div} from 'alins';
div('Parent',
    div('Child1'),
    div('Child2'),
    [div('Child3'), div('Child4')]
).mount();
```

## 3. Text & html functions

### 3.3 Text function

When the DOM text content contains special characters, such as '.#/[]:' it will conflict with the emment style in 2

For such text with special characters, we can use the text function definition

<code-runner title='text function'></code-runner>

```js
import {div, text} from 'alins';
div(
    text('Text with special characters: [a=1.12]##//todo'),
    '.text-content'
).mount();
```

> Note: All the responsive data described in subsequent sections after the text parameter

### 3.3 HTML content

If you want to set the HTML content of a DOM element, you need to use HTML functions

> Note: After using HTML functions, all child elements and child builders will not take effect

<code-runner title='html function' ></code-runner>

```js
import {div, html} from 'alins';
div(
    html('<b>html content</b>'),
    '.html-content'
).mount();
```

> Note: All the responsive data described in subsequent sections after the html parameter

## 4. mount function

Now that we have created the dom-builder, the next step is to render it on the real dom node

We need to use the dom-builder's mount function

```ts
mount(parent?: string | HTMLElement | IComponentBuilder | IElementBuilder): void;
```

The function supports passing in selectors, dom elements, domBuilder, or components, without passing in the default value is 'body'

```js
div().mount(document.getElementById('app'));
div().mount('#app');
div().mount();

const parent = div();
div().mount(parent); 
parent.mount(); 
> Note: When mounting to another domBuilder, you must ensure that the domBuilder is not mounted
```

## 5. function as a parameter

Support for using functions as parameters to builders, which in some complex logics can be used to wrap the internal logic using closures

Of course, if this scenario is too complex, it is generally recommended to use components

<code-runner title='function as argument' ></code-runner>

```js
import {div} from 'alins';
div(
    () => '.class-name[title=func]:text',
    () => div('single element'),
    () => [
        div('array type element'),
        div('array type element')
    ],
    () => {
        console.log('do something')
        return div ('logical processing')
    }
).mount();
```

## 6. Summarize the example

<code-runner />

```js
import {div} from 'alins';
div(
    '/h3#demo-main.class1.class2[title=demo]:Hello World!',
    '.class3', '[attr-2=xxx]'
).mount();
```