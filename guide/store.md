<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-17 16:33:22
  * @Description: Coding something
-->
# Store

Alins has built-in state management functions, which can be used to share data across components and centrally manage data in applications. AlinsStore has very powerful responsiveness and friendly type support.

## 1. createStore

You can use `createStore` to create a data warehouse and accept a json type parameter. The parameter has the following three attributes:

1. state: This parameter is a function, and the return value represents the initial data of the data warehouse.
2. getters: used to define some calculated properties.
3. Actions: equivalent to the data warehouse method, which can be used to modify the data in the data warehouse, and can also be used to represent responsive data through the return value.

The return value of createStore is a function, and the function return value is a Store instance. The data warehouse is used by calling this function.

The basic usage is as follows:

<CodeBox/>

```jsx
import { createStore } from 'alins';
const useStore = createStore({
     state: () => ({
         count: 0,
     }),
     actions: {
         increase () {
             this.count++;
         },
         countAddX (x: number) {
             return this.count + x;
         }
     },
     getters: {
         countAdd2 () {
             return this.count + 2;
         },
         getCountAddX () {
             return this.countAddX(3);
         }
     }
});

const store = useStore();

<div $mount='#App'>
     <div>Count = {store.count}</div>
     <div>countAdd2 = {store.countAdd2}</div>
     <div>countAddX = {store.countAddX(4)}</div>
     <div>getCountAddX = {store.getCountAddX}</div>
     <button onclick={store.increase}>Increase Count</button>
</div>;
```

## 2. Monitor data changes

You can use the `$watch` api of the Store instance to monitor state changes. You can use strings to directly monitor state and getters, or you can monitor data changes in the return value of a function.

<CodeBox/>

```jsx
import { createStore } from 'alins';
const useStore = createStore({
     state: () => ({
         count: 0,
     }),
     actions: {
         increase () {
             this.count++;
         },
         countAddX (x: number) {
             return this.count + x;
         }
     },
     getters: {
         countAdd2 () {
             return this.count + 2;
         },
         getCountAddX () {
             return this.countAddX(3);
         }
     }
});
const store = useStore();
store.$watch('count', (newValue, oldValue) => {
     console.log('store.count change', newValue, oldValue);
});
store.$watch('countAdd2', (newValue, oldValue) => {
     console.log('store.countAdd2 change', newValue, oldValue);
});
store.$watch(() => store.countAddX(4), (newValue, oldValue) => {
     console.log('store.countAddX(4) change', newValue, oldValue);
});
<div $mount='#App'>
     <div>Count = {store.count}</div>
     <div>countAdd2 = {store.countAdd2}</div>
     <div>countAddX = {store.countAddX(4)}</div>
     <div>getCountAddX = {store.getCountAddX}</div>
     <button onclick={store.increase}>Increase Count</button>
</div>;
```

For object types, you can also use string operators to listen for property changes.

<CodeBox/>

```jsx
import { createStore } from 'alins';
const useStore = createStore({
     state: () => ({
         person: {
             name: 'tack',
             age: 1,
         }
     }),
     actions: {
         increase () {
             this.person.age++;
         }
     }
});
const store = useStore();
store.$watch('person.age', (newValue, oldValue) => {
     console.log('person.age change', newValue, oldValue);
});
<div $mount='#App'>
     <div>Age = {store.person.age}</div>
     <button onclick={store.increase}>Increase Age</button>
</div>;
```