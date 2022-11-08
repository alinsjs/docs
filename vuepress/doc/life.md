<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:30
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-08 23:15:14
-->
## 1. 生命周期概述

在alins中，一个dom节点拥有一下五个生命周期函数

1. created: 节点被创建还未添加到文档上
2. appended: 节点被append到了父元素上, 但是不一定被挂载到了文档上
3. mounted: 节点被挂载到了文档上
4. updated: 节点响应数据更新
5. removed: 节点被移除

## 2. created

以下为created函数的回调函数类型，接受一个dom元素作为回调参数

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

appended 回调函数同 created

<code-runner/>

```js
import {div, appended, button, click} from 'alins';
button('Add a div', click(()=>{
    const onappended = appended((dom) => {alert('appended:parent='+dom.parentElement)});
    div('Hello', onappended).mount();
})).mount();
```


## 4. mounted

mounted 回调函数同 created

<code-runner/>

```js
import {div, mounted, button, click} from 'alins';
button('Add a div', click(()=>{
    const onmounted = mounted((dom) => {alert('mounted:parent='+dom.parentElement)});
    div('Hello', onmounted).mount();
})).mount();
```


## 5. updated

updated 回调函数如下

```ts
type TUpdatedType = 'value' | 'text' | 'className' | 'attribute-key' |  'attribute-value' |'id';
type IUpdatedCallback = (data: {
    node: Node | HTMLElement, // 当前节点
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

mounted 回调函数同 created

<code-runner/>

```js
import {div, created, mounted, appended, removed, $, click, button} from 'alins';
const result = $([]);

const oncreated = created(() => {result.push('created')});
const onappended = appended(() => {result.push('appended')});
const onmounted = mounted(() => {result.push('mounted')});
const onremoved = removed((dom) => {result.push('removed:'+dom.tagName)});

const num = $(0);

button('Add num', click(()=>{num.value += 1;})).mount();

div.switch(num)
    .case(1)(
        $`case1-${num}`, 
        oncreated, onappended, onmounted, onremoved
    )
    .default($`default-${num}`)
    .mount();

div.for(result)(item => div(item)).mount();
```

## 7. life 函数

life函数也可以声明一个生命周期对象

`life('created') 等价于 created`

<code-runner/>

```js
import {div, life, $} from 'alins';

const result = $([]);

const oncreated = life('created')(()=>{result.push('mounted!')})

div('Hello!', oncreated).mount();

div.for(result)(item => div(item)).mount();
```

## 8. 组件生命周期

alins组件不支持生命周期函数，因为alins组件本质只是一些普通节点的集合

如果要在组件上使用，可以是组件只返回一个dom-builder，然后对该builder使用

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
