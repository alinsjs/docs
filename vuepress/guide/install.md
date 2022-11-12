<!--
 * @Author: chenzhongsheng
 * @Date: 2022-10-30 02:42:04
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 17:04:09
-->

## 1. npm installation

```
npm i alins
```

<code-runner title='Use alins only' ></code-runner>

```js
import {$, div, click} from 'alins';
const mes = $('Hello World');
div($`${mes}!`, click(()=>{mes.value+='!'; })).mount();
```

### Use alins-style independently

```
npm i alins-style
```

<code-runner title='alins-style standalone'></code-runner>

```js
import {$, style} from 'alins-style';
const color = $('#fff');
const div = document.createElement('div');
div.innerText = 'Click to change color';
div.onclick = () => {color.value = '#f44'; };
style({color}).mount(div);

document.getElementById('jx-app').appendChild(div);
```

### Alins and alins-style are used together

```
npm i alins alins-style
```

<Code-runner title='alins alins-style together'></code-runner>

```js
import {$, div, click} from 'alins';
import {style} from 'alins-style';

const color = $('#fff');

div($`Click to change color: ${color}`, 
  style({color}),
  click(()=>{color.value = '#f44'; }),
).mount();
```

## 2. CDN reference

### alins

<code-runner title='CDN uses alins' :result="false"></code-runner>

```html
<script src="https://cdn.jsdelivr.net/npm/alins"></script>
<script>
  Alins.div('Hello World!').mount();
</script>
```

### alins-style

Using the CDN method to introduce alins-style will contain alins code by default, if you only want to use style independently, please refer to alins-style-standby below

<code-runner title='CDN alins-style' :result="false"></code-runner>

```html
<script src="https://cdn.jsdelivr.net/npm/alins-style"></script>
<script>
  console.log(AlinsStyle, AlinsStyle.div);
</script>
```

### alins-style-standalone

Use alins-style - alins-style.standalone.min .js independently

<code-runner title='CDN alins-style standalone' :result="false"></code-runner>

```html
<script src="https://cdn.jsdelivr.net/npm/alins-style/dist/alins-style.standalone.min.js"></script>
<script>
  console.log(AlinsStyle);
</script>
```
