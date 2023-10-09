<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# alins-standalone

Alins provides a compile-free toolkit that enables full Alins application functionality through some API calls, but cannot use JSX syntax.

## 1. Installation and use

npm installation use

```
npm i alins-standalone
```

```js
import {/**import**/} from 'alins-standalone';
```

It can be used through CDN

```js
<script src='https://unpkg.com/alins-standalone'></script>
<script> 
    window. Alins;
</script>
```

## 2. API

alins-standalone exports the following APIs, and the basic usage is the same as alins

```js
import {
    mount, ref, reactive, watch, computed,
    If, ElseIf, Else,
    Switch, Case, Default,
    For, Async, Show, Dom, Component,
    created, appended, mounted, removed,
} from 'alins-standalone';
```

The counter program above can be expressed using Alins Standalone:

<CodeBox :iframe='true' :height='60' :html='true' :standalone='true'/>
```js
import { ref, computed, Dom, join } from 'alins-standalone';

const count = ref(1);
const countAdd1 = computed(() => count.v + 1);
Dom.button({
    $mount: '#App',
    onclick: () => count.v++,
}, join`count is ${count}; countAdd1 is ${countAdd1}`);
```

We use the CDN approach to understand it with an example

<CodeBox :iframe='true' :height='60' :html='true'/>

```html
<script src='https://unpkg.com/alins-standalone'></script>
<script>
const { ref, computed, Dom, join } = window. Alins;
const count = ref(1);
const countAdd1 = computed(() => count.v + 1);
Dom.button({
    $mount: 'body',
    onclick: () => count.v++,
}, join`count is ${count}; countAdd1 is ${countAdd1}`);
</script>
```

Note: The join API means to concatenate a string with reactive data to return an array. You can also use array form directly

```js
['count is ', count, '; countAdd1 is ', countAdd1]
```

For other API usage, please refer to [alins-standalone.d.ts](https://unpkg.com/alins-standalone/dist/alins-standalone.d.ts)