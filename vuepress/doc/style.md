<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:34
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 17:37:11
-->
## 1. Overview of Alins-style

Alins-style is a set of css-in-js scheme, which can make responsive changes to DOM node style and CSS style sheets, support atomic styles and pseudo-class pseudo-elements, and make compatibility processing for some styles that require compatibility

Combined with the flexibility of JS and all the features of Alins, developers can want to use a brick-like composite build style and make responsive changes in real time

Alins-style is also a standalone package that can be used independently and supports responsive styling independently

> Through the combination of alins-style style and CSS, modular, componentized and responsive CSS style writing can be realized, and the problem of CSS global style pollution can be effectively avoided

> Attributes in alins-style are all humped and automatically prefixed with style compatibility

## 2. style function

The style function is used to declare a set of styles, either for a single DOM or built as part of a CSS function group

The style function is declared as follows

```js
interface IStyleConstructor extends IStyleAtoms{
    (json: TStyleJsonValue): IStyleBuilder;
    (ts: TemplateStringsArray, ... reactions: TReactionItem[]): IStyleBuilder;
    (item: IReactBuilder): IStyleBuilder;
    (style: string): IStyleBuilder;
}
```

### 2.1 Pass in the string

Represents a static style when a string is passed in

<code-runner/>

```js
import {div} from 'alins';
import {style} from 'alins-style';

div('Hello!', style(`color: #f44; fontSize: 20px; `)).mount();
```

### 2.2 Pass in json

When passing in a JSON object, you can either represent static styles or use responsive data

The reactive data here supports react data, computed, and functions

<code-runner/>

```js
import {div, $, computed, input, br, span} from 'alins';
import {style} from 'alins-style';

const num = $(14);
const color = $('#f44');

const computedItem = computed(()=>num.value+10);

const Style = style({
    color,
    fontSize: num, // react data
    marginLeft: computedItem,
    marginTop: ()=>num.value+20,
});
div(
    span('Modify color:'), input.model(color),
    br(),
    span('modify num:'), input.model(num, 'number'),
    div('Hello!', Style),
).mount()
```

> Note: css properties of numeric types like fontSize can ignore units, the default unit is px, if you need to add units manually, you can write like this

```js
const computedItem = computed(()=>`${num.value+10}rem`);
const Style = style({
    color: '#f44',
    fontSize: $`${num}rem`, // react data
    marginLeft: computedItem,
    marginTop: ()=> `${num.value+20}rem`,
});
```

### 2.3 Pass in the template string

Template strings passed into ES6 can also be used in responsive styling, and camel form and auto-completion compatible prefixes are also supported

<code-runner/>

```js
import {div, $, computed, input, br, span} from 'alins';
import {style} from 'alins-style';

const num = $(14);
const color = $('#f44');

const computedItem = computed(()=>num.value+10);

const Style = style`
    color: ${color};
    fontSize: ${num}px;
    marginLeft: ${computedItem}px;
    marginTop: ${()=>num.value+20}px;
`;
div(
    span('Modify color:'), input.model(color),
    br(),
    span('modify num:'), input.model(num, 'number'),
    div('Hello with string template!', Style),
).mount()
```

## 3. Atomic style

Through the atomic style method defined on the style function, you can use the atomic style function of alins-style, which can achieve more flexible style writing

Atomic styles are divided into 'Preset Styles', 'Combined Styles' and 'Single Attribute Styles'

1. Preset style: refers to one or more different attributes fixed and combined styles, which belong to static styles and do not accept parameters
2. Composition style: refers to the preset style that accepts the parameters, which belongs to the dynamic style
3. Single-attribute style: refers to an atomic style to control a CSS property, and the parameters accept static data or responsive data, which can be divided into numeric types, string types, enumeration types, etc

Due to the large number of atomic styles, it is not convenient to post them all in the document, please refer to [style.d.ts](https://github.com/alinsjs/alins/blob/master/packages/utils/src/types/style.d.ts) for specific atomic style functions.

<code-runner/>

```js
import {div, $, computed, input, br, span} from 'alins';
import {style} from 'alins-style';

const num = $(14);
const color = $('#f44');
const cursorType = () => num.value === 14 ? 'pointer': 'text';

const computedItem = computed(()=>num.value+10);

const Style = style.borderBox() // Preset style
    .cursorUrl('https://x.com/xxx.png', cursorType) // Combine styles
    .fontSize(num) // Single-attribute style
    .color(color)
    .marginTop(computedItem)
    .marginLeft(()=>num.value+20);

div(
    span('Modify color:'), input.model(color),
    br(),
    span('modify num:'), input.model(num, 'number'),
    div('Hello with string atom styles!', Style),
).mount()
```

## 4. Pseudo-class pseudo-elements

### 4.1 Basic Use

alins-style exposes some pseudo-class pseudo-element functions for declaring CSS pseudo-classes and pseudo-element functions, which are exposed as follows

```js
import {hover, active, before, after} from 'alins-style';
```

The following is the type declaration of a pseudo-class function

```ts
type ICssBase = string | IStyleBuilder | IStyleAtoms | IReactBuilder;

type IPseudoClass = (... args: ICssBase[]) => IPseudoBuilder;

interface IPseudoConstructor {
  (name: TPseudoName, arg?: TReactionValue<string|number>): IPseudoClass;
}
```

hover, active, etc. are all 'IPseudoClass' and support incoming strings, StyleBuiler, atomic styles, and responsive strings

The following example demonstrates them one by one

<code-runner title='pseudo-class usage example'/>

```js
import {div, $, input, span} from 'alins';
import {hover, after, style} from 'alins-style';

const num = $(30);

const hoverEle = hover(
    'color: #f44; ', // string
    style({fontSize: num}), // StyleBuiler
    style.paddingLeft(num).relative().left(num), // atomic style
    $`paddingTop: ${num}px;` // responsive string
)

const afterEle = after(style.content('"after element"').marginLeft(num).color('#4f4'))

div(
    span('modify num: '),
    input.model(num, 'number'),
    div('Mouse hover me', hoverEle, afterEle),
).mount();
```

### 4.2 pseudo function

For other pseudo-class pseudo-elements can be accessed using the 'pseudo' function, 'pseudo('hover') is equivalent to hover'

<code-runner title='pseudo function usage example'/>

```js
import {input} from 'alins';
import {pseudo, style} from 'alins-style';
const focus = pseudo('focus');

input(focus(style.height(40))).mount();
```

For pseudo-classes that need to pass parameters, you can pass in the second parameter of the 'pseudo' function, supporting 'static data' and 'reactive data'

```js
import {pseudo} from 'alins-style';
const nthChild = pseudo('nth-child', 2);
```

## 5. CSS functions

The style function is only used to generate a single CSS style, and CSS functions are required for the generation of CSS style sheets, and the style object can be used as a component in the CSS function

The basic usage syntax is as follows

```ts
type ICssBase = string | IStyleBuilder | IStyleAtoms | IReactBuilder;

type ICssCBArg = ICssBase | ICssCBArg[];

interface ICssCallback {
    (... args: ICssCBArg[]): {
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

### 5.1 Usage examples

CSS functions support nesting syntax, which can effectively avoid global style pollution

After the CSS function is executed, a reactive CSS style sheet needs to be generated, and the document needs to be inserted through the mount function

#### 5.1.1 mount function

Let's talk about the mount function first

The mount function supports passing in strings or dom elements, generally does not need to pass in any parameters, and will use CSSStyleSheet to insert adoptedStyleSheets by default when empty, and will be inserted into the head if it is not supported

```js
css()('style').mount(); By default, it is inserted into adoptedStyleSheets
css()('style').mount(document.head); Pass in the DOM node
css()('style').mount('#app'); Pass in the selector
```

#### 5.1.2 Pass in selectors

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

> nesting uses arrays to define child CSS styles, and the & symbol is applied to the current parent element

> Parameter Incoming Acceptance supports incoming strings, StyleBuiler, atomic styles, and responsive strings, consistent with pseudo-classes

#### 5.1.3 Do not pass in selectors

Do not pass in selectors to represent a global style

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

### 5.2 reactiveStyle function

In addition to mounting to the document, css object can also pass in a function to listen for changes in the style element, and in this listener, the developer can decide the subsequent processing logic

The reactiveStyle function is used to accept this listener function

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

## 6. Use independently

Alins-style supports independent use of alins, with native DOMs, and can also support responsive style changes

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
