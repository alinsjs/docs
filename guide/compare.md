# Compared

Alins adheres to the development philosophy of 0-Api and Less-Is-More and uses jsx to describe UI. It can have strong responsive capabilities without introducing any additional APIs, which can greatly improve the development efficiency of developers. , Reduce the cost of understanding the code.

At the same time, Alins also has a very small runtime size and packaging size, and has good performance.

Let’s compare it with mainstream frameworks from the following aspects:

## [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark) data

<ViewImg/>

![](https://shiyix.cn/images/alins/performance.jpg)

Note: The lower the score, the better the performance.

## Source code and packaged products

We use the Counter example above as a test application to implement the same functions with alins, vue, and react respectively. The source code is as follows:

<CodeCompare/>

```jsx
let count = 1;
<button onclick={count++} $mount='#App'>
     count is {count}
</button>;
```

<div>

   ```vue
   <script setup>
   import { ref } from 'vue'
   const count = ref(0)
   </script>

   <template>
     <button @click="count++">
       count is {{ count }}
     </button>
   </template>
   ```

   ```js
   import { createApp } from 'vue'
   import Counter from './counter.vue'
   const app = createApp(Counter)
   app.mount('#app')
   ```

</div>

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Main () {
     const [count, setCount] = useState(1);
     return <button onClick={()=>setCount(count ++)}>
         count is {count}
     </button>;
}

ReactDOM.render(
     <Main/>,
     document.getElementById('app')
);
```


Let’s take a look at the comparison of compiled products:

<CodeCompare/>

```js
import { _$r, _$ce } from "alins";
let count = _$r(1);
_$ce("button", {
   onclick: () => count.v++,
   $mount: "#App"
}, "count is ", count);
```


```js
/* Analyzed bindings: {
   "ref": "setup-const",
   "count": "setup-ref"
} */
import {
     toDisplayString as _toDisplayString,
     openBlock as _openBlock,
     createElementBlock as _createElementBlock
} from "vue"

import { ref } from 'vue'

const __sfc__ = {
   __name: 'App',
   setup(__props) {

const count = ref(0)

return (_ctx, _cache) => {
     return (_openBlock(), _createElementBlock("button", {
             onClick: _cache[0] || (_cache[0] = $event => (count.value++))
         }, " count is " + _toDisplayString(count.value), 1 /* TEXT */))
     }
}

}
__sfc__.__file = "src/App.vue"
export default __sfc__
```

```js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
function Main() {
   const [count, setCount] = useState(1);
   return /*#__PURE__*/_jsxs("button", {
     onClick: () => setCount(count++),
     children: ["count is ", count]
   });
}
ReactDOM.render( /*#__PURE__*/_jsx(Main, {}), document.getElementById('app'));
```

Comprehensive source code volume, packaged code volume and framework runtime volume are compiled into a table

| | alins | vue3 | react |
| :----: | :----: | :----: | :----: |
| Source code size | 90byte | 281byte | 302byte |
| Compile product size | 140byte | 620byte | 435byte |
| Runtime size | 26.6kb | 474kb | 139kb |
| Volume Rating | 1.24 | 2.74 | 1.52 |
| Runtime Performance | 1.36 | 1.45 | 1.54 |
| Memory usage score | 2.77 | 3.30 | 3.28 |

::: tip
This comparison is only for the current Counter example and is for reference only
:::