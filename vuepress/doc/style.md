<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:34
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-09 01:38:46
-->
## 1. Alins-style 概述

alins-style 是一套css-in-js方案，可以对dom节点style、css样式表进行响应式变更，支持原子样式和伪类伪元素，并且对一些需要兼容性的样式做了兼容性处理

搭配js的灵活性和 alins 的所有功能，让开发者可以想使用积木一样组合式的构建样式，并且做到实时的响应式变更

alins-style也是一个独立的包，可以独立使用，并且独立支持响应式样式

> 通过alins-style的样式和css组合，可以实现模块化、组件化、响应式的css样式书写，并且可以有效的避免css全局样式污染问题

## 2. style函数

style 函数用于声明一套样式，可以用于单个dom，也可以使用在css函数组作为一部分构建

style函数声明如下

```js
interface IStyleConstructor extends IStyleAtoms{
    (json: TStyleJsonValue): IStyleBuilder;
    (ts: TemplateStringsArray, ...reactions: TReactionItem[]): IStyleBuilder;
    (style: string): IStyleBuilder;
}
```

### 2.1 传入字符串

传入字符串时表示静态样式, 一般不建议这样使用

<code-runner/>

```js
import {div} from 'alins';
import {style} from 'alins-style';

div('Hello!', style(`color: #f44; font-size: 20px;`)).mount();
```

### 2.2 传入json

传入json对象时，既可以表示静态样式，也可以使用响应式数据

>  注：json形式 css属性采用驼峰形式

这里的响应式数据支持 react数据、computed和函数

<code-runner/>

```js
import {div, $, computed, input, br, span} from 'alins';
import {style} from 'alins-style';

const num = $(14);
const color = $('#f44');

const computedItem = computed(()=>num.value+10);

const Style = style({
    color,
    fontSize: num, // react数据
    marginLeft: computedItem,
    marginTop: ()=>num.value+20,
});
div(
    span('修改颜色：'), input.model(color),
    br(),
    span('修改num：'), input.model(num, 'number'),
    div('Hello!', Style),
).mount()
```

> 注：类似fontSize之类的数字类型css属性 可以忽略单位，默认使用单位是px，如需手动添加单位，可以像这样写

```js
const computedItem = computed(()=>`${num.value+10}rem`);
const Style = style({
    color: '#f44',
    fontSize: $`${num}rem`, // react数据
    marginLeft: computedItem,
    marginTop: ()=> `${num.value+20}rem`,
});
```

### 2.3 传入模板字符串

传入es6的模板字符串也可以使用响应式样式，但是css属性不支持驼峰形式

<code-runner/>

```js
import {div, $, computed, input, br, span} from 'alins';
import {style} from 'alins-style';

const num = $(14);
const color = $('#f44');

const computedItem = computed(()=>num.value+10);

const Style = style`
    color: ${color};
    font-size: ${num}px;
    margin-left: ${computedItem}px;
    margin-top: ${()=>num.value+20}px;
`;
div(
    span('修改颜色：'), input.model(color),
    br(),
    span('修改num：'), input.model(num, 'number'),
    div('Hello with string template!', Style),
).mount()
```

## 3. 原子样式

通过style函数上定义的原子样式方法，可以使用alins-style的原子样式功能，可以实现更加灵活地样式书写

原子样式分为 `预设样式`、`组合样式` 和 `单属性样式`

1. 预设样式：指一个或多个不同的属性固定搭配组合起来的样式，属于静态样式，不接受参数
2. 组合样式：指接受传参的预设样式，属于动态样式
3. 单属性样式：指一个原子样式控制一个css属性，传参接受静态数据或响应式数据，具体又可以分为数字类型、字符串类型、枚举类型等

由于原子样式数量很多，不便在文档中全部贴出，具体可以使用原子样式函数请参考 [style.d.ts](https://github.com/alinsjs/alins/blob/master/packages/utils/src/types/style.d.ts)

<code-runner/>

```js
import {div, $, computed, input, br, span} from 'alins';
import {style} from 'alins-style';

const num = $(14);
const color = $('#f44');
const cursorType = () => num.value === 14 ? 'pointer': 'text';

const computedItem = computed(()=>num.value+10);

const Style = style.borderBox() // 预设样式
    .cursorUrl('https://xxx.com/xxx.png', cursorType) // 组合样式
    .fontSize(num) // 单属性样式
    .color(color)
    .marginTop(computedItem)
    .marginLeft(()=>num.value+20);

div(
    span('修改颜色：'), input.model(color),
    br(),
    span('修改num：'), input.model(num, 'number'),
    div('Hello with string atom styles!', Style),
).mount()
```

## 4. 伪类伪元素

### 4.1 基本使用

alins-style 暴露了一些伪类伪元素函数用于声明 css 伪类和伪元素函数，暴露出来的如下

```js
import {hover, active, before, after} from 'alins-style';
```

以下是伪类函数的类型声明

```ts
type ICssBase = string | IStyleBuilder | IStyleAtoms | IReactBuilder;

type IPseudoClass = (...args: ICssBase[]) => IPseudoBuilder;

interface IPseudoConstructor {
  (name: TPseudoName, arg?: TReactionValue<string|number>): IPseudoClass;
}
```

hover, active 等都为 `IPseudoClass`, 支持传入字符串、StyleBuiler、原子样式和响应式字符串

下面一个例子一一演示一下

<code-runner title='伪类使用示例'/>

```js
import {div, $, input, span} from 'alins';
import {hover, after, style} from 'alins-style';

const num = $(30);

const hoverEle = hover(
    'color: #f44;', // 字符串
    style({fontSize: num}), // StyleBuiler
    style.paddingLeft(num).relative().left(num), // 原子样式
    $`padding-top: ${num}px;` // 响应式字符串
)

const afterEle = after(style.content('"after element"').marginLeft(num).color('#4f4'))

div(
    span('修改num: '),
    input.model(num, 'number'),
    div('Mouse hover me', hoverEle, afterEle),
).mount();
```

### 4.2 pseudo函数

对于其他的伪类伪元素可以使用 `pseudo` 函数访问， `pseudo("hover") 等价于 hover`

<code-runner title='pseudo函数使用示例'/>

```js
import {input} from 'alins';
import {pseudo, style} from 'alins-style';
const focus = pseudo('focus');

input(focus(style.height(40))).mount();
```

对于需要传参的伪类，可以在 `pseudo` 函数的第二个参数传入参数，支持`静态数据`和`响应式数据`

```js
import {pseudo} from 'alins-style';
const nthChild = pseudo('nth-child', 2);
```

## 5. css函数

style函数只是用于生成单个css样式，对于css样式表的生成需要使用css函数，css函数中可以将style对象作为构件使用

基本使用语法如下

```ts
type ICssBase = string | IStyleBuilder | IStyleAtoms | IReactBuilder;

type ICssCBArg = ICssBase | ICssCBArg[];

interface ICssCallback {
    (...args: ICssCBArg[]): {
        reactiveStyle(setStyle: (v:string) => void): void;
        mount(selector?: string | HTMLElement): void;
    };
}

interface ICssConstructor {
    (selector?: string): ICssCallback;
}
```

```js
css('#app')(
    style({
        color: '#f44'
    })
)
```

### 5.1 使用示例

css函数支持使用嵌套语法，可以有效的避免全局样式污染

css函数执行完成之后需要会生成个一段响应式的css样式表，需要通过mount函数插入文档

#### 5.1.1 mount函数

先讲解一下mount函数

mount函数支持传入字符串或者dom元素，一般不需要传入任何参数，为空时会默认使用 CSSStyleSheet插入 adoptedStyleSheets 中，如果不支持会插入到head中

```js
css()('style').mount(); // 默认插入 adoptedStyleSheets 中
css()('style').mount(document.head); // 传入dom节点
css()('style').mount('#app'); // 传入选择器
```

#### 5.1.2 传入选择器

<code-runner/>

```js
import {input, div} from 'alins';
import {$, css, style} from 'alins-style';
const num = $(30);

const simpleStyle = style({
    color: '#888',
    fontSize: num,
});
css('.parent')(
    simpleStyle,
    ['.child', style({
        fontSize: 16,
        paddingLeft: num
    })],
    ['&:hover', style({color: "#f44"})]
).mount();

input.model(num, 'number').mount();

div('.parent:Parent', div('.child:Child')).mount();
```

> 嵌套使用数组定义子css样式，& 符号表示应用在当前父元素上

> 参数传入接受 支持传入字符串、StyleBuiler、原子样式和响应式字符串，与伪类一致

#### 5.1.3 不传入选择器

不传入选择器表示一个全局样式

```js
const simpleStyle = style({
    backgroundColor: '#fff'
});
css()(
    $`::-webkit-scrollbar-track-piece {
        ${simpleStyle}
    }`,
    ['.main', simpleStyle]
).mount();
```

### 5.2 reactiveStyle 函数

css Object除了可以mount到文档中外，还可以自行传入一个函数监听style元素的改变，在这个监听中可以由开发者决定后续的处理逻辑

reactiveStyle 函数就是用于接受这个监听函数

<code-runner/>

```js
import {input, div} from 'alins';
import {$, css, style} from 'alins-style';

const color = $('#eee');
const cssValue = $('');

input.model(color).mount();
div(cssValue).mount();

css('#app')(
    style({color})
).reactiveStyle((value)=>{
    cssValue.value = value;
})
```


## 6. 独立使用

alins-style 支持独立于 alins 使用，搭配原生dom，也可以支持响应式样式变更

<code-runner/>

```js
import {$, style} from 'alins-style';

const num = $(20);
const color = $('#eee');

const div = document.createElement('div');
div.innerText = 'onlyUseStyle, click to change';
div.addEventListener('click', () => {
    num.value = 30;
    color.value = '#f44';
});

__DOM__.appendChild(div);

style({color, fontSize: num}).mount(div);

```
