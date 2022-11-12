<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:06
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 14:04:16
-->

## 1. comp-builder

Alins中，一个函数即为一个组件，通过 comp 函数包裹之后会生成一个 comp-builder，通过将其挂载到dom节点、dom-builder、comp-builder 对象上，就可以实现将这个 comp-builder 对象渲染到文档上


以下是一个 comp-builder对象的结构

```ts
interface IComponentBuilder {
    type: 'comp';
    exe(): TElementChild;
    mount(parent?: IMountParent): void;
}
```

我们通过一下代码将一个 hello world的组件挂载到body节点上

<code-runner title='dom示例'/>

```js
import {div, comp} from 'alins';
const HelloWorld = () => div('Hello World!');
comp(HelloWorld).mount();
```

组件的返回值是一个 TElementChild ，该类型可以是 null（null会被跳过）、dom元素、dom-builder、comp-builder，还可以是后续章节中将会介绍到的对象，以及可以使他们的数组形式

也可以是一个函数 来返回上述其他类型

```ts
type TElementChild = null | HTMLElement | IElementBuilder | IComponentBuilder |
    IForBuilder | IIfBuilder<any> | IShowBuilder |
    IModelBuilder | ISwitchBuilder<any, any> | (()=>TElementChild) | TElementChild[];
```

## 2. prop函数

父子组件之间传参使用 prop 函数进行，在组件中通过 props 参数使用传入的参数

<code-runner title='父子组件传参示例'/>

```js
import {div, comp, prop} from 'alins';
const Child = comp(({props}) => div(`Child ${props.name.value}`));
const Parent = () => [
    Child(prop({name: '1'})),
    Child(prop({name: '2'})),
]
comp(Parent).mount();
```

>  注：props 中的属性都经过了响应式处理，普通取值需要使用 .value 访问。详见后续 响应式数据

## 3. event函数

父子组件之间的事件传递使用 event 函数进行，在组件中通过 events 参数使用传入的事件

<code-runner title='父子事件示例'/>

```js
import {button, comp, click, event} from 'alins';
const Child = comp(({events}) => button('Child', click(events.fromParent)));
const Parent = () => [
    Child(event({
        fromParent: (e, dom) => {alert(`fromChild: ${dom.innerText}`)}
    })),
]
comp(Parent).mount();
```

## 3. slot函数（插槽）

父组件可以通过使用插槽将dom元素注入子组件中，插槽使用slot函数定义，在子组件中可以通过 slots参数插入子组件内部

单个插槽使用

<code-runner title='插槽示例'/>

```js
import {div, comp, slot} from 'alins';
const Child = comp(({slots}) => div('Child', slots));
const Parent = () => [
    Child(slot(div('I am a slot'))),
    Child(slot(() => div('I am a function slot'))), // function as slot
];
comp(Parent).mount();
```

多个插槽使用

<code-runner title='多个插槽示例'/>

```js
import {div, comp, slot} from 'alins';
const Child = comp(({slots}) => div('Child', slots.slotA, slots.slotB));
const Parent = () => [
    comp(Child)(slot({
        slotA: div('I am a slot'),
        slotB: () => div('I am a function slot'),
    })),
];
comp(Parent).mount();
```

## 4. 函数作为组件返回值

支持使用函数作为组件的返回值

<code-runner title='函数作为组件返回值'></code-runner>

```js
import {comp, div, slot} from 'alins';
const Child = comp(({slots}) => div('Child', slots));
const Parent = () => [
    Child(slot(div('I am a slot'))),
    () => { // function as return
        const slotObj = slot(() => div('I am a function slot'))
        return Child(slotObj)
    },
    () => [ // function return array
        Child(slot(div('I am a slot:3'))),
        Child(slot(div('I am a slot:4'))),
    ],
];

comp(Parent).mount();
```