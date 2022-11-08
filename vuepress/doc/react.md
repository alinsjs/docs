<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:15
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-08 23:46:54
-->
## 1. 响应式概述

Alins 使用 react函数 声明一个响应式数据，为了书写方便，Alins 导出了 $ 作为 react 的别名

响应式数据分为值类型和对象类型，都可以使用 $ 函数定义，对象类型在Alins内部使用 createProxy 方法定义，Alins也导出了这个方法

响应式数据可以应用在Alins应用的很多场景，包括文本、html、类名、属性名、id、控制器、组件、alins-style等，后续我们会一一介绍

## 2. react函数

我们使用 react函数 创建一个响应式数据, 如果需要手动对响应式数据监听变更，我们可以使用 subscribe 方法，该方法名是一个 sybmol

如果需要对 响应式数据 赋值我们需要使用value属性，该属性在响应式值类型中是一个字符串，在对象类型中是一个symbol，其中对象类型赋值也可以不借助 value属性，而是直接访问属性名

后续我们会通过示例来演示一下，

值类型数据

<code-runner title='react 函数值类型示例'/>

```js
import {$, subscribe, div, click, button} from 'alins';
const num = $(1); // 我们使用别名

num[subscribe]((newValue, old)=>{
    alert(`subscribe: ${newValue} ${old}`)
});

button('Add num', click(() => {num.value++})).mount();
```

>  注：一般开发应用过程我们不需要主动监听变更，这里只是演示一下 react 函数如何独立使用

通过使用 forceUpdate 方法可以主动触发响应式数据绑定的响应回调

通过 getListeners 方法可以查看绑定的响应回调函数队列

通过 json 方法可以查看原始数据（一般用于响应式对象）

```js
import {$, subscribe, forceUpdate, getListeners, json} from 'alins';
const num = $(1);

num[subscribe]((newValue, old)=>{
    alert(`subscribe: ${newValue} ${old}`)
});

num[forceUpdate]();
num[getListeners]();
num[json]();
```

## 3. 响应式对象

react函数识别到一个对象之后会自动使用 createProxy 函数对其进行监听，使用方法基本与值类型对象一致

<code-runner title='react 函数值类型示例'/>

```js
import {$, subscribe, div, click, button, value} from 'alins';
const obj = $({a: 1, b: [1, 2]}); // 我们使用别名

obj[subscribe]((newValue, old) => {
    alert(`subscribe: ${JSON.stringify(newValue)} ${JSON.stringify(old)}`);
});

button('Mod object', click(() => {
    obj[value] = {a:2,b:[2,3]}
})).mount();
```

## 4. computed函数

使用computed函数可以对一个响应式数据生成一个 computed 对象，支持进行 get、set运算

当传入函数默认为只使用get

<code-runner/>

```js
import {$, computed, click, button, value, subscribe} from 'alins';
const num = $(0);

const numComputed = computed(() => num.value + 3);

numComputed[subscribe]((v)=>{
    alert(`numComputed changed: ${v}`)
})

button('Mod num', click(() => { num.value ++; })).mount();
```

如果要使用 set 可以传入一个对象

<code-runner/>

```js
import {$, computed, click, button, value, subscribe} from 'alins';
const num = $(0);

const numComputed = computed({
    get() {return num.value + 3},
    set(v) {num.value = v},
});

numComputed[subscribe](v=>{ alert(`numComputed changed: ${v}`)});
num[subscribe](v=>{ alert(`num changed: ${v}`)})

button('Mod num', click(() => { num.value ++; })).mount();
button('Mod numComputed', click(() => { numComputed.value ++; })).mount();
```

## 5. watch函数

使用 watch 函数可以监听 react数据或者computed数据的变更，实际作用与 subscribe 函数一致

watch函数也可以直接传入一个函数，监听函数内所有依赖的值的变更

<code-runner/>

```js
import {$, computed, click, button, watch} from 'alins';
const num = $(0);

const numComputed = computed({
    get() {return num.value + 3},
    set(v) {num.value = v},
});

watch(numComputed, v=>{ alert(`numComputed changed: ${v}`)});
watch(num, v=>{ alert(`num changed: ${v}`)})
watch(()=>{
    return num.value + 5
}, v=>{ alert(`function return changed: ${v}`)})

button('Mod num', click(() => { num.value ++; })).mount();
```

## 6. 响应式绑定

响应式数据可以应用在Alins应用的很多场景，包括文本、html、类名、属性名、id、控制器、组件、alins-style等

这里的响应式数据包含 react数据和computed数据

本小节我们介绍响应式数据的绑定用法与文本、html、类名、属性名、id的绑定，其他类型会在后续相应章节中介绍

后续的演示示例可以借助响应式绑定来完成结果输出，而不需要依赖alert函数了

响应式数据按照使用场景分类可以分为 `模板使用` 和 `传参使用`

> 模板使用 指将响应式数据内嵌在模板字符串中，通过react函数调用 如: $\`Hello ${msg}\`

> 传参使用 指将响应式数据作为参数，在支持响应式的函数中传入使用 如: html(msg)

按照使用方式分类可以分为 `直接使用` 和 `函数引用使用`

> 直接使用 如: $\`Hello ${msg}\` 、 html(msg)

> 函数引用使用 指通过函数包裹使用 如：$\`Hello ${()=>msg.value+"!"}\` 、 html(()=>msg.value+"!")

模板使用示例

<code-runner/>

```js
import {$, click, button, br, computed, div, html} from 'alins';
const num = $(0);
const addNum = click(()=>{num.value++})
const computedNum = computed(() => `<strong>Add strong num: ${num.value}</strong>`);
div(
    button($`Add num: ${num}`, addNum), // 模板使用 + 直接使用
    button($`Add num: ${()=>num.value+3}`, addNum), // 模板使用 + 函数使用
    br(),
    button(html(computedNum), addNum), // 传参使用 + 直接使用
    button(html(()=> computedNum.value + '!'), addNum), // 传参使用 + 函数使用
).mount()
```

> 注：后续所有的绑定使用基本也都是这四种组合的使用

对于dom文本的绑定也可以直接使用 react对象作为参数

<code-runner/>

```js
import {$, div} from 'alins';
const msg = $('Hello World!');
div(msg).mount()
```


