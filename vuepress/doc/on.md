<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:00
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 16:10:56
-->
## 1. Event builder

In Alins, we use event functions to build an event builder that can be passed as a parameter to the dom-builder function to bind to the dom object

The following is a simple click event demonstration

<code-runner/>

```js
import {button, click} from 'alins';
const onclick = ()=>{ alert('clicked!') }
button('click me', click(onclick)).mount();
```

### 1.1 Export events by default

The following are common event builders that are exported by default in alins

```js
const MainEventNames = [
    'click', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseup',
    'touchend', 'touchmove', 'touchstart', 'wheel', 'input', 'change'
]
```

> Note: Due to the naming conflict with the input tag, the variable named $input when exporting is not affected when accessed using events

There are two ways to use events that do not have a default export

### 1.2 events

The vast majority of events can be accessed using the events object

<code-runner/>

```js
import {button, events} from 'alins';
const onclick = ()=>{ alert('mouse enter') }
button('mouse enter', events.mouseenter(onclick)).mount();
```

### 1.2 Custom event name

Use the on function to create an event builder function

<code-runner/>

```js
import {button, on} from 'alins';
const onclick = ()=>{ alert('clicked!') }
button('click me', on('click')(onclick)).mount();
```

> Note: 'on('click') is equivalent to click'

## 2. Event parameters

You can use Event Builder's args function to pass parameters

<code-runner/>

```js
import {button, click} from 'alins';
const onclick = (a,b,c)=>{ alert(`clicked! ${a} ${b} ${c}`) }
button('click me', 
    click(onclick).args(1,2,3)
).mount();
```

## 3. Event modifiers

Event Builder functions can pass in event modifiers, and the following are optional event modifiers

```ts
type TEventDecorator = 'prevent' | 'stop' | 'capture' | 'once' | 'self';
```

1. prevent: block default events (commonly used);
2. stop: stop event bubbling (commonly used);
3. once: the event is triggered only once (commonly used);
4. capture: Use the capture mode of events;
5. self: The event is triggered only if event.target is an element of the current operation;

Look at an example

<code-runner/>

```js
import {div, click} from 'alins';
const onclick = (name)=>{ alert(`clicked ${name}`) }
div('parent', 
    click(onclick).args('parent'),
    div('child', click(onclick, 'stop').args('child'))
).mount();
```

### 3.1 Modifier shortcuts

For the prevent and stop modifiers, sometimes they do not need to perform any events, just trigger the effect of prevent or stop, which can be used quickly through the prevent and stop properties

<code-runner/>

```js
import {div, click} from 'alins';
const onclick = (name)=>{ alert(`clicked ${name}`) }
div('parent', 
    click(onclick).args('parent'),
    div('child', click.stop)
).mount();
```

## 4. Event and this access

If you want to access the event's native event and this object (the dom of the bound event), you only need to access the listener penultimate and penultimate callback parameters

<code-runner/>

```js
import {button, click} from 'alins';
const onclick = (arg, event, dom)=>{ 
    alert(`clicked ${arg}, ${event.constructor.name}, ${dom.constructor.name}`); 
}
button('click me', 
    click(onclick).args('xxx')
).mount();
```
