<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-17 16:33:22
  * @Description: Coding something
-->
# Alins Standalone

Alins provides a compilation-free toolkit. Through some API calls, complete Alins application functions can be realized, but jsx syntax cannot be used.

## 1. Installation and use

npm installation and use

```
npm i alins-standalone
```

```js
import {/**import**/} from 'alins-standalone';
```

```js
<script src='https://unpkg.com/alins-standalone'></script>
<script>
     window.Alins;
</script>
```


## 2.API

alins-standalone exports the following API, the basic usage is consistent with alins

```js
import {
     ref,
     react,
     watch,
     computed,
     If,
     ElseIf,
     Else,
     Switch,
     Case,
     Default,
     For,
     Async,
     Show,
     Dom,
     Component,
} from 'alins-standalone';
```

Let’s use the cdn method and learn about it through an example.

<CodeBox :iframe='true' :height='40' :html='true'/>

```html
<script src='https://unpkg.com/alins-standalone'></script>
<script>
     const {react, computed, Dom} = window.Alins
     let count = react(1);
     let countAdd1 = computed(()=>count.v+1);
     Dom('button', {
         $mount: document.body,
         onclick: ()=>count.v++,
     }, [
         react`count is ${count}; countAdd1 is ${countAdd1}`
     ]);
</script>
```

Note: The second use of react means splicing a string with responsive data and returning an array. You can also use the array form directly

```js
['count is ', count, '; countAdd1 is ', countAdd1]
```

For specific usage of other APIs, please refer to [alins-standalone.d.ts](https://unpkg.com/alins-standalone/dist/alins-standalone.d.ts)