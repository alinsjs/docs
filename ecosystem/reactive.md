<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-28 09:30:56
 * @Description: Coding something
-->

# alins-reactive

alins-reactive is a reactive base library for alins, providing APIs for creating and listening to reactive data, which can be used independently of alins.

## Installation

```
npm i alins-reactive
```

## Summary of major APIs

```js
import {
    ref,
    reactive,
    computed,
    watch,
    createStore,
    observe,
    isReactive,
    isRef,
    createProxy,
    watchRef,
    watchArray,
} from 'alins-reactive';
```

For other API and type declarations, see [alins-reactive.d.ts](https://unpkg.com/alins-reactive/dist/alins-reactive.d.ts)

## Base use

<CodeBox :no-compile='true'/>

```js
import {ref, computed, watch} from 'alins-reactive';
const count = ref(1);
const countAdd1 = computed(() => count.v + 1);

const button = document.createElement('button');
button.onclick = () => { count.v ++; };
document.getElementById('App').appendChild(button);

const update = () => { button.innerText = `count = ${count.v}, count+1=${countAdd1.v}` };
update();
watch(count, update);
```

For other API usage, see [alins-reactive.d.ts](https://unpkg.com/alins-reactive/dist/alins-reactive.d.ts)
