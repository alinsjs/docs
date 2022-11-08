<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:23
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-08 21:46:11
-->

## 1. 控制器概述

控制器用于对dom或组件进行逻辑控制，如根据数据重复渲染元素，根据响应数据控制显示哪一个元素等

alins中控制器有 for，if，show，switch，model

他们都是在dom或者组件中的方法，控制器使用语法如下

```ts
builder.controller(react响应式数据)(控制器逻辑);
```

## 2. for

for控制器用于根据数组类型响应式数据循环渲染dom或者组件

for 控制器逻辑 部分是一个函数，第一个参数为数组元素的响应式数据，第二个参数为数组下边的响应式数据

该函数可以返回单个元素，也可以返回一个数组，数组内为dom-builder的参数，会传给for控制器的调用者执行

<code-runner title="dom节点for示例"/>

```js
import {$, div, span, button, click} from 'alins';
const list = $([
    {name: 'bob', age: 12},
    {name: 'allen', age: 13}
]);
button('Add person', click(()=>{list.push({name: 'new', age: 10})})).mount();
div.for(list)((person, index) => 
    // 返回单个元素
    $`${index}: ${person.name} (age=${person.age})`
).mount();
div('--------').mount();
// 返回多个元素
div.for(list)((person, index) => [
    '.list-item',
    span($`${index}:`),
    span($`name=${person.name};`),
    span($`age=${person.age};`),
]).mount();
```

## 3. if

if 控制器用来根据条件控制元素渲染的内容，可以支持配合 elif，else使用

<code-runner title="配合布尔值单个if使用"/>

```js
import {$, div, button, click} from 'alins';
const isAdult = $(true);
div(
    button('toggle boolean', click(()=>{isAdult.value = !isAdult.value})),
    div.if(isAdult)('I am a adult')
).mount();
```

<code-runner title="配合其他类型组合elif和else使用"/>

```js
import {$, div, button, click} from 'alins';
const age = $(17);
div(
    button('add age', click(() => {age.value++})),
    div.if(() => age.value<18)('I am not a adult')
        .elif(() => age.value === 18)('I am a adult(age=18)')
        .else($`/h3:I am a adult and age is ${age}`)
        // >  注：此处可以改变dom元素的标签
        // else 条件非必须
).mount();
```

>  注：if elif else 传入的判断条件必须要是响应式布尔类型 （React数据、computed数据或者函数）

## 4. show

show 控制器用来根据条件控制元素是否隐藏

与if 不同，show控制器的元素不会从dom节点中移除，只是添加了display-none样式

<code-runner title="shou控制器示例"/>

```js
import {$, div, span, button, click} from 'alins';
const isAdult = $(true);
div(
    button('toggle boolean', click(()=>{isAdult.value = !isAdult.value})),
    div.show(isAdult)('I am a adult')
).mount();
```

## 5. switch

switch 元素作用于 if 类似，用于根据不同的条件对元素渲染不同的内容，区别在于swicth接受的判断条件为值 而不是必须传入响应式布尔类型数据

<code-runner title="switch"/>

```js
import {$, div, span, button, click} from 'alins';
const age = $(17);
div(
    button('add age', click(()=>{age.value++})),
    div.switch(age)
        .case(17)('I am not a adult')
        .case(18)('I am not a adult age only 18')
        .case(19)($`I am not a adult age = ${age}`)
        .default('/h3:I am not a adult age more then 19')
        // >  注：此处可以改变dom元素的标签
        // default 分支非必须
).mount();
```

## 6. model 双向绑定

model控制器用于对输入框或者 contenteditable元素进行数据双向绑定

<code-runner title='number修饰符示例'/>

```js
import {$, input, div} from 'alins';
const msg = $('Hello')
div($`msg=${msg}`).mount();
input.model(msg).mount(); 
```


>  注：按照语法最后一个括号调用是必须的，但是alins做了处理，如果input内容为空，可以省略builder调用

如果要对input元素增加内容，则可以加上

<code-runner title='number修饰符示例'/>

```js
import {$, input, div} from 'alins';
const msg = $('Hello');
div($`msg=${msg}`).mount();
input.model(msg)('.input-item[title=input something]').mount();
```

### 6.1 model修饰符

model修饰符用于修饰绑定的数据类型，修饰符有以下两个

1. 'number': 返回number类型
2. 'camel': 对返回值小写处理

<code-runner title='number修饰符示例'/>

```js
import {$, div, input} from 'alins';
const num = $(0)
div(
    $`value=${num}`,
    input.model(num, 'number'), 
).mount();
```
