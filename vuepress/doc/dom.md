<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:50:46
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 14:20:48
-->
## 1. dom-builder

在 Alins中，我们使用函数来构造的 dom-builder 对象，通过将其挂载到dom节点、dom-builder、comp-builder 对象上，就可以实现将这个 dom-builder 对象渲染到文档上

以下是一个 dom-builder对象的结构

```ts
interface IElementBuilder {
    type: 'builder';
    exe(): IElement;
    mount(parent?: IMountParent): void;
}
```

### 1.1. Hello World 示例

我们通过一下代码将一个 hello world的div挂载到body节点上

<code-runner title='dom示例'></code-runner>

```js
import {div} from 'alins';
div('Hello World!').mount();
```

### 1.2. 构建dom-builder对象

#### 1.2.1 默认导出的dom对象

通过从alins默认导出的builder函数，我们可以创建几乎所有的dom对象

```js
import {div, span, a, i, img, input, button ...} from 'alins';
```

以下是默认导出的builder函数

```js
const MainDomNames = [
    'a', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'canvas', 'code', 'pre', 'table', 'th', 'td', 'tr', 'video', 'audio',
    'ol', 'select', 'option', 'p', 'i', 'iframe', 'img', 'input', 'label', 'ul', 'li', 'span', 'textarea', 'form', 'br', 'tbody'
]
```

#### 1.2.2 其他dom对象

可以看到上面只包含一小部分常用的dom元素，对于其他的没有导出的我们可以通过 doms对象来使用

<code-runner/>

```js
import {doms} from 'alins';
doms.header('header').mount();
doms.section('section').mount();
```

那么如果需要自定义dom标签内，我们可以使用dom函数

<code-runner/>

```js
import {dom} from 'alins';
dom('my-element')('Hello!').mount();
```

dom() 函数 会返回一个dom builder，所以 `dom('div') 等价与 div`

## 2. 属性和内容

builder函数通过传参来填充dom的一切内容，包含文本、html、样式、类、属性、孩子节点、事件、响应式数据、控制器、生命周期、等等

本章节我先介绍 文本、html、类、属性、孩子节点。 其他 build 参数在后面具体章节进行详细介绍

我们直接使用参数进行传入所有build参数，语法如下

```ts
builder(...BuildArgs: TBuildArgs[]);
```

### 2.0 空的dom节点

不传入任何参数表示构造一个空的dom节点

```js
div();
```

### 2.1 文本、类、属性

这三种属性我们都可以直接使用字符串传参，alins使用emment风格解析字符串

#### 2.1.1 传入文本

<code-runner title='文本'></code-runner>

```js
import {div} from 'alins';
div('Hello World!').mount();
div(':Hello World!').mount();
```

冒号表示后面是文本内容，如果是单独传入文本内容则可以忽略

#### 2.1.2 类、属性和id

使用 `.` 表示类 `[]` 表示属性 `#` 表示id

<code-runner/>

```js
import {div} from 'alins';
div('类实例', '.class1.class2').mount();
div('属性实例', '[disabled][title=属性实例]').mount();
div('id实例', '#idDemo').mount();
div('组合使用', '#idDemo.class1.class2[title=组合]').mount();
```

#### 2.1.1 改变dom标签

可以使用 `/` 表示改变 当前dom-builder的标签，这在if和switch控制器场景中会有一定作用

<code-runner />

```js
import {div} from 'alins';
div('/button:我现在变成了一个button').mount();
```

#### 2.1.1 组合使用

<code-runner />

```js
import {div} from 'alins';
div('#domDemo.dom-class.dom-class2[title=domDemo2]:组合使用').mount();
div('/h3#domDemo2.dom-class[title=domDemo2]:组合使用且改变标签').mount();
div('组合分离使用', '.dom-class', '[title=domDemo3]').mount();
```

### 2.2 孩子节点

将builder作为参数传递给另一个builder，那么这个builder就成为另一个builder的孩子节点

也支持以builder数组作为参数

<code-runner title='文本'></code-runner>

```js
import {div} from 'alins';
div('Parent',
    div('Child1'),
    div('Child2'),
    [div('Child3'), div('Child4')]
).mount();
```


## 3. text & html 函数

### 3.3 text函数

当dom文本内容中含有特殊字符时，如 `.#/[]:` 时 就会与 2 中的 emment 风格写法产生冲突

对于这种含有特殊字符的文本，我们可以使用 text 函数定义

<code-runner title='text函数'></code-runner>

```js
import {div, text} from 'alins';
div(
    text('含有特殊字符的文本:[a=1.12]##//todo'),
    '.text-content'
).mount();
```

> 注： text 参数之后后续章节中会介绍到的所有响应式数据

### 3.3 html内容

如果要设置某dom元素的html内容，需要借助 html 函数

>  注：使用了html函数之后，所有的子元素、子builder都会不生效


<code-runner title='html函数'></code-runner>

```js
import {div, html} from 'alins';
div(
    html('<b>html内容</b>'),
    '.html-content'
).mount();
```

> 注： html 参数之后后续章节中会介绍到的所有响应式数据

## 4. mount函数

dom-builder我们已经创建好了，接下来就是需要将其挂载真实的dom节点上渲染出来了

我们需要使用 dom-builder 的mount函数

```ts
mount(parent?: string | HTMLElement | IComponentBuilder | IElementBuilder): void;
```

该函数支持传入选择器、dom元素、domBuilder 或者是组件, 不传入默认值是 'body'

```js
div().mount(document.getElementById('app'));
div().mount('#app');
div().mount();

const parent = div();
div().mount(parent); 
parent.mount(); 
// >  注：挂载到其他domBuilder上时必须要保证改domBuilder还未被挂载
```

## 5. 函数作为参数

支持使用函数作为builder的参数，这在一些复杂逻辑中可以使用闭包封装内部逻辑

当然如果这种场景过于复杂，一般建议使用组件

<code-runner title='函数作为参数'></code-runner>

```js
import {div} from 'alins';
div(
    () => '.class-name[title=func]:text',
    () => div('单个元素'),
    () => [
        div('数组类型元素'),
        div('数组类型元素')
    ],
    () => {
        console.log('do something')
        return div('逻辑处理')
    }
).mount();
```

## 6. 总结示例

<code-runner />

```js
import {div} from 'alins';
div(
    '/h3#demo-main.class1.class2[title=demo]:Hello World!',
    '.class3', '[attr-2=xxx]'
).mount();
```