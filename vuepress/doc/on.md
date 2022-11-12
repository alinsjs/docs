<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-05 10:51:00
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 15:11:11
-->
## 1. 事件builder

在 Alins 中，我们使用事件函数来构建一个事件builder，事件builder可以作为参数传给 dom-builder函数绑定到dom对象上

如下是一个简单的 click 事件演示

<code-runner/>

```js
import {button, click} from 'alins';
const onclick = ()=>{ alert('clicked!') }
button('click me', click(onclick)).mount();
```

### 1.1 默认导出事件

以下是 alins 中默认导出的常用事件builder

```js
const MainEventNames = [
    'click', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseup',
    'touchend', 'touchmove', 'touchstart', 'wheel', 'input', 'change'
]
```

>  注：input事件由于与 input标签命名冲突，导出时的变量名为 $input，使用 events 访问时不受影响

对于没有默认导出的事件有以下两种使用方式

### 1.2 events

使用events对象可以访问绝大多数事件

<code-runner/>

```js
import {button, events} from 'alins';
const onclick = ()=>{ alert('mouse enter') }
button('mouse enter', events.mouseenter(onclick)).mount();
```

### 1.2 自定义事件名

使用 on 函数可以创建一个事件builder函数

<code-runner/>

```js
import {button, on} from 'alins';
const onclick = ()=>{ alert('clicked!') }
button('click me', on('click')(onclick)).mount();
```

>  注： `on('click') 等价与 click`

## 2. 事件传参

可以使用 event builder的 args 函数来进行传参

<code-runner/>

```js
import {button, click} from 'alins';
const onclick = (a,b,c)=>{ alert(`clicked! ${a} ${b} ${c}`) }
button('click me', 
    click(onclick).args(1,2,3)
).mount();
```

## 3. 事件修饰符

event builder函数可以传入事件修饰符，以下是可选的事件修饰符

```ts
type TEventDecorator = 'prevent' | 'stop' | 'capture' | 'once' | 'self';
```

1. prevent：阻止默认事件（常用）；
2. stop：阻止事件冒泡（常用）；
3. once：事件只触发一次（常用）；
4. capture：使用事件的捕获模式；
5. self：只有event.target是当前操作的元素时才触发事件；

看一个例子

<code-runner/>

```js
import {div, click} from 'alins';
const onclick = (name)=>{ alert(`clicked ${name}`) }
div('parent', 
    click(onclick).args('parent'),
    div('child', click(onclick, 'stop').args('child'))
).mount();
```

### 3.1 修饰符快捷用法

对于 prevent 和 stop 修饰符，有时不需要其执行任何事件，只需要触发prevent或stop的效果就可以，那边可以通过 prevent 和 stop属性快捷使用

<code-runner/>

```js
import {div, click} from 'alins';
const onclick = (name)=>{ alert(`clicked ${name}`) }
div('parent', 
    click(onclick).args('parent'),
    div('child', click.stop)
).mount();
```



## 4. event和this访问

如果要访问事件的原生的event和this对象(绑定事件的dom) ，只需要访问 listener 倒数第二个和倒数第一个回调参数即可

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
