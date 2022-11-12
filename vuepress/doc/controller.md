<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:23
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 17:20:15
-->

## 1. Controller overview

The controller is used to logically control the DOM or components, such as repeatedly rendering elements based on data, controlling which element is displayed based on response data, etc

Alins controllers are for, if, show, switch, model

They are all methods in the DOM or component, and the controller uses the following syntax

```ts
builder.controller (react responsive data) (controller logic);
```

## 2. for

The for controller is used to loop through the DOM or component based on the array type of responsive data

The for controller logic section is a function with the first argument being the responsive data of the array elements and the second argument being the reactive data below the array

The function can return a single element or an array with dom-builder parameters passed to the caller of the for controller to execute

<code-runner title="DOM node for example"/>

```js
import {$, div, span, button, click} from 'alins';
const list = $([
    {name: 'bob', age: 12},
    {name: 'allen', age: 13}
]);
button('Add person', click(()=>{list.push({name: 'new', age: 10})})).mount();
div.for(list)((person, index) => 
    // Returns a single element
    $`${index}: ${person.name} (age=${person.age})`
).mount();
div('--------').mount();
// Returns multiple elements
div.for(list)((person, index) => [
    '.list-item',
    span($`${index}:`),
    span($`name=${person.name}; `),
    span($`age=${person.age}; `),
]).mount();
```

## 3. if

The if controller is used to control the content rendered by elements according to conditions, and can be used with elif, else

<code-runner title="Use with Boolean single if"/>

```js
import {$, div, button, click} from 'alins';
const isAdult = $(true);
div(
    button('toggle boolean', click(()=>{isAdult.value = !isAdult.value})),
    div.if(isAdult)('I am a adult')
).mount();
```

<code-runner title="Use with other types to combine EIF and else"/>

```js
import {$, div, button, click} from 'alins';
const age = $(17);
div(
    button('add age', click(() => {age.value++})),
    div.if(() => age.value<18)('I am not a adult')
        .elif(() => age.value === 18)('I am a adult(age=18)')
        .else($`/h3:I am a adult and age is ${age}`)
        // Note: The tag of the DOM element can be changed here
        // else condition is not required
).mount();
```

> Note: If elif else The judgment condition passed in must be a reactive Boolean type (React data, computed data, or function)

## 4. show

The show controller is used to control whether an element is hidden based on conditions

Unlike if, the elements of the show controller are not removed from the DOM node, just the display-none style is added

<code-runner title="shou controller example"/>

```js
import {$, div, span, button, click} from 'alins';
const isAdult = $(true);
div(
    button('toggle boolean', click(()=>{isAdult.value = !isAdult.value})),
    div.show(isAdult)('I am a adult')
).mount();
```

## 5. switch

The switch element acts like if and is used to render different content to the element based on different conditions, except that swicth accepts a value instead of having to pass in responsive Boolean type data

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
        // Note: The tag of the DOM element can be changed here
        // The default branch is not required
).mount();
```

## 6. model two-way binding

The model controller is used to bind data to input boxes or contenteditable elements in both directions

<code-runner title='number modifier example'/>

```js
import {$, input, div} from 'alins';
const msg = $('Hello')
div($`msg=${msg}`).mount();
input.model(msg).mount(); 
```

> Note: The syntactic call with the last parenthesis is mandatory, but alins does the processing, and if the input content is empty, the builder call can be omitted

If you want to add content to the input element, you can add it

<code-runner title='number modifier example'/>

```js
import {$, input, div} from 'alins';
const msg = $('Hello');
div($`msg=${msg}`).mount();
input.model(msg)('.input-item[title=input something]').mount();
```

### 6.1 model modifier

The model modifier is used to decorate the bound data type, and there are two modifiers

1. 'number': Returns the number type
2. 'camel': lowercase treatment of return values

<code-runner title='number modifier example'/>

```js
import {$, div, input} from 'alins';
const num = $(0)
div(
    $`value=${num}`,
    input.model(num, 'number'), 
).mount();
```

> Note: If the element has the type=number attribute set, the number modifier will be turned on by default

## 7. Component + controller

Controllers can also be used with components

<code-runner title='component + controller'/>

```js
import {$, div, h4, input, comp, prop, button, click} from 'alins';

const Child = comp(({props})=>div($`child value=${props.value}`))
const num = $(-1);
div(
    button($`add num(${num})`, click(()=>{num.value++})),
    h4('for sample'),
    Child.for($([1,2,3]))((item) => prop({value: `for item=${item.value}`})),
    h4('if sample'),
    Child.if(() => num.value > 1)(prop({value: '>1'}))
        .elif(() => num.value < 0)(prop({value: '<0'}))
        .else(prop({value: ()=>`value=${num.value}`})),
    h4('show sample'),
    Child.show(() => num.value > 1)(prop({value: 'show!: value> 1'})),
    h4('switch sample'),
    Child.switch(num)
        .case(0)(prop({value: 'case num=0!'}))
        .case(1)(prop({value: 'case num=1!'}))
        .case(2)(prop({value: 'case num=2!'})),
).mount();
```