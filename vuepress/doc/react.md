<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:15
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 16:20:48
-->
## 1. Responsive overview

Alins uses the react function to declare a reactive data, and for writing convenience, Alins exports $ as an alias for react

Reactive data is divided into value types and object types, which can be defined using the $ function, which is defined internally by Alins using the createProxy method, which Alins also derives

Responsive data can be applied to many scenarios of Alins applications, including text, html, class names, property names, ids, controllers, components, alins-style, etc., which we will introduce one by one later

## 2. React function

We use the React function to create a reactive data, and if we need to manually listen for changes to the reactive data, we can use the subscribe method, which is called sybmol

If we need to assign a value to reactive data we need to use the value property, which is a string in the reactive value type and a symbol in the object type, where the object type assignment can also be accessed directly without the help of the value property

We will demonstrate it with an example later,

Value type data

<code-runner title='react function value type example'/>

```js
import {$, subscribe, div, click, button} from 'alins';
const num = $(1); // We use aliases

num[subscribe]((newValue, old)=>{
    alert(`subscribe: ${newValue} ${old}`)
});

button('Add num', click(() => {num.value++})).mount();
```

> Note: We don't need to actively listen for changes during general application development, here is just a demonstration of how to use React functions independently

By using the forceUpdate method, you can proactively trigger response callbacks for reactive data binding

The getListeners method allows you to view the bound response callback function queue

Raw data can be viewed via JSON methods (typically used for responsive objects)

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

## 3. Responsive objects

After the react function recognizes an object, it will automatically use the createProxy function to listen to it, and the method used is basically the same as that of the value type object

<code-runner title='react function value type example'/>

```js
import {$, subscribe, div, click, button, value} from 'alins';
const obj = $({a: 1, b: [1, 2]}); // We use aliases

obj[subscribe]((newValue, old) => {
    alert(`subscribe: ${JSON.stringify(newValue)} ${JSON.stringify(old)}`);
});

button('Mod object', click(() => {
    obj[value] = {a:2,b:[2,3]}
})).mount();
```

## 4. computed functions

Use the computed function to generate a computed object on a reactive data, supporting get and set operations

When passing in the function defaults to only use get

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

If you want to use set, you can pass in an object

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

## 5. watch function

Use the watch function to listen for changes to react data or computed data, and the actual effect is the same as that of the subscribe function

The watch function can also be passed directly into a function to listen for changes in all dependent values in the function

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

## 6. Responsive binding

Reactive data can be applied to many scenarios of Alins applications, including text, html, class names, property names, ids, controllers, components, alins-style, etc

The reactive data here contains react data and computed data

In this section, we introduce the binding usage of responsive data and the binding of text, html, class names, attribute names, and ids, and other types will be introduced in the corresponding sections later

Subsequent demo examples can use reactive binding to output results without relying on the alert function

Reactive data can be categorized according to usage scenarios can be divided into 'template usage' and 'parameter transfer use'

> Template usage Refers to embedding responsive data in the template string, called via the React function such as: $\`Hello ${msg}\`

> Parameter Usage Refers to taking reactive data as a parameter and passing in a function that supports reactive use such as: html(msg)

According to the way of use, it can be divided into 'direct use' and 'function reference use'

> Direct use such as: $\`Hello ${msg}\` 、 html(msg)

> Function reference usage Refers to wrapping use through functions such as: $\`Hello ${()=>msg.value+"!"}\` 、 html(()=>msg.value+"!")

Example template usage

<code-runner/>

```js
import {$, click, button, br, computed, div, html} from 'alins';
const num = $(0);
const addNum = click(()=>{num.value++});
const computedNum = computed(() => `<strong>Add strong num ${num.value}</strong>`);
div(
    button($`Add num ${num}`, addNum), // template use + use directly
    button($`Add num ${()=>num.value+3}`, addNum), // template use + function
    br(),
    button(html(computedNum), addNum), // Pass parameters + use directly
    button(html(()=> computedNum.value + '!'), addNum), // parameter use + function use
).mount();
```

> Note: All subsequent binding uses are basically the use of these four combinations

Binding to DOM literals can also directly use the React object as a parameter

<code-runner/>

```js
import {$, div} from 'alins';
const msg = $('Hello World!');
div(msg).mount()
```