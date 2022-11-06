<!--
 * @Author: chenzhongsheng
 * @Date: 2022-10-30 02:42:04
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-05 20:56:40
-->

## 1. npm安装

```
npm i alins
```

<code-runner title='只使用alins'></code-runner>

```js
import {$, div, click} from 'alins';
const mes = $('Hello World');
div($`${mes}!`, click(()=>{mes.value+='!';})).mount();
```

### 独立使用 alins-style

```
npm i alins-style
```

<code-runner title='alins-style独立使用'></code-runner>

```js
import {$, style} from 'alins-style';
const color = $('#fff');
const div = document.createElement('div');
div.innerText = 'Click to change color';
div.onclick = () => {color.value = '#f44';};
style({color}).mount(div);

document.getElementById('jx-app').appendChild(div);
```

### alins 和 alins-style 一起使用

```
npm i alins alins-style
```

<code-runner title='alins alins-style一起使用'></code-runner>

```js
import {$, div, click} from 'alins';
import {style} from 'alins-style';

const color = $('#fff');

div($`Click to change color: ${color}`, 
  style({color}),
  click(()=>{color.value = '#f44';}),
).mount();
```

## 2. CDN引用

### alins

<code-runner title='CDN 使用 alins' :result="false"></code-runner>

```html
<script src="https://cdn.jsdelivr.net/npm/alins"></script>
<script>
  Alins.div('Hello World!').mount();
</script>
```

### alins-style

使用 cdn 方式引入alins-style，会默认包含alins代码，若只希望独立使用 style，请参考下面的 alins-style-standalone

<code-runner title='CDN alins-style' :result="false"></code-runner>

```html
<script src="https://cdn.jsdelivr.net/npm/alins-style"></script>
<script>
  console.log(AlinsStyle, AlinsStyle.div);
</script>
```

### alins-style-standalone

独立使用alins-style - alins-style.standalone.min.js

<code-runner title='CDN alins-style standalone' :result="false"></code-runner>

```html
<script src="https://cdn.jsdelivr.net/npm/alins-style/dist/alins-style.standalone.min.js"></script>
<script>
  console.log(AlinsStyle);
</script>
```
