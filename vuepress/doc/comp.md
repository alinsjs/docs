<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:06
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 16:14:44
-->

## 1. comp-builder

In Alins, a function is a component, wrapped through the comp function will generate a comp-builder, by mounting it to the dom node, dom-builder, comp-builder object, you can achieve this comp-builder object to the document

The following is the structure of a comp-builder object

```ts
interface IComponentBuilder {
    type: 'comp';
    exe(): TElementChild;
    mount(parent?: IMountParent): void;
}
```

Let's mount a hello world component to the body node with the following code

<code-runner title='dom example'/>

```js
import {div, comp} from 'alins';
const HelloWorld = () => div('Hello World!');
comp(HelloWorld).mount();
```

The return value of the component is a TElementChild of null (null is skipped), dom elements, dom-builder, comp-builder, and objects that will be described in subsequent chapters, as well as arrays that can be used

It can also be a function to return the other types mentioned above

```ts
type TElementChild = null | HTMLElement | IElementBuilder | IComponentBuilder |
    IForBuilder | IIfBuilder<any> | IShowBuilder |
    IModelBuilder | ISwitchBuilder<any, any> | (()=>TElementChild) | TElementChild[];
```

## 2. prop function

Parameters passed between parent-child components are made using the prop function, and the parameters passed in are used in the component through props parameters

<code-runner title='Parent-child component parameter example'/>

```js
import {div, comp, prop} from 'alins';
const Child = comp(({props}) => div(`Child ${props.name.value}`));
const Parent = () => [
    Child(prop({name: '1'})),
    Child(prop({name: '2'})),
]
comp(Parent).mount();
```

> Note: The properties in props are reactive, and normal values need to be accessed using .value. See Responsive data later

## 3. event function

Event passing between parent-child components occurs using the event function, and incoming events are used in the component via the events parameter

<code-runner title='parent-child event example'/>

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

## 3. Slot function (slot)

The parent component can inject DOM elements into the child component by using slots, which are defined using slot functions, and inserted inside the child component via slot parameters

Single slot used

<code-runner title='slot example'/>

```js
import {div, comp, slot} from 'alins';
const Child = comp(({slots}) => div('Child', slots));
const Parent = () => [
    Child(slot(div('I am a slot'))),
    Child(slot(() => div('I am a function slot'))), // function as slot
];
comp(Parent).mount();
```

Multiple slots are used

<code-runner title='Multiple slot examples'/>

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

## 4. The function returns the value as a component

Support for using functions as return values for components

<code-runner title='function returns as component value' ></code-runner>

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