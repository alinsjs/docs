<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:30
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 16:15:17
-->
## 1. Lifecycle overview

In alins, a DOM node has the following five lifecycle functions

1. created: The node has not been added to the document since it was created
2. appended: The node is appended to the parent element, but not necessarily mounted to the document
3. mounted: The node is mounted on the document
4. updated: The node responds to data updates
5. removed: The node is removed

## 2. created

The following is the callback function type of the created function, which accepts a DOM element as a callback parameter

```ts
type ILifeCallbackCommon = (dom:HTMLElement)=>void;
```

<code-runner/>

```js
import {div, created, button, click} from 'alins';
button('Add a div', click(()=>{
    const oncreated = created((dom) => {alert('created:parent='+dom.parentElement)});
    div('Hello', oncreated).mount();
})).mount();
```

## 3. appended

The appended callback function is the same as created

<code-runner/>

```js
import {div, appended, button, click} from 'alins';
button('Add a div', click(()=>{
    const onappended = appended((dom) => {alert('appended:parent='+dom.parentElement)});
    div('Hello', onappended).mount();
})).mount();
```

## 4. mounted

The mounted callback function is the same as created

<code-runner/>

```js
import {div, mounted, button, click} from 'alins';
button('Add a div', click(()=>{
    const onmounted = mounted((dom) => {alert('mounted:parent='+dom.parentElement)});
    div('Hello', onmounted).mount();
})).mount();
```

## 5. updated

The updated callback function is as follows

```ts
type TUpdatedType = 'value' | 'text' | 'className' | 'attribute-key' |  'attribute-value' |' id';
type IUpdatedCallback = (data: {
    node: Node | HTMLElement, // The current node
    type: TUpdatedType,
    value: any,
    prevValue: any,
    key?: string,
}) => void;
```

<code-runner/>

```js
import {div, updated, button, click, $} from 'alins';
const result = $([]);

const num = $(0);
const onupdated = updated((data) => {
    result.push(JSON.stringify(data));
});
div(
    $`.class-${num}#id${num}[title=num-${num}][title-${num}=num]:num=${num}`, 
    onupdated
).mount();
button('Add num', click(()=>{num.value++})).mount();

div.for(result)(item => div(item)).mount();
```

## 6. removed

The mounted callback function is the same as created

<code-runner/>

```js
import {div, created, mounted, appended, removed, $, click, button} from 'alins';
const result = $([]);

const oncreated = created(() => {result.push('created')});
const onappended = appended(() => {result.push('appended')});
const onmounted = mounted(() => {result.push('mounted')});
const onremoved = removed((dom) => {result.push('removed:'+dom.tagName)});

const num = $(0);

button('Add num', click(()=>{num.value += 1; })).mount();

div.switch(num)
    .case(1)(
        $`case1-${num}`, 
        oncreated, onappended, onmounted, onremoved
    )
    .default($`default-${num}`)
    .mount();

div.for(result)(item => div(item)).mount();
```

## 7. life function

The life function can also declare a lifecycle object

'life('created') is equivalent to created'

<code-runner/>

```js
import {div, life, $} from 'alins';

const result = $([]);

const oncreated = life('created')(()=>{result.push('mounted!')})

div('Hello!', oncreated).mount();

div.for(result)(item => div(item)).mount();
```

## 8. Component lifecycle

The alins component does not support lifecycle functions because the alins component is essentially just a collection of ordinary nodes

If you want to use it on a component, you can just return a dom-builder and then use it for that builder

<code-runner/>

```js
import {comp, div, created, button, click} from 'alins';

function Comp(){
    const oncreated = created(()=>alert('created!'))
    return div('Component', oncreated);
}

button('Add a comp', click(()=>{
    comp(Comp).mount();
})).mount();
```
