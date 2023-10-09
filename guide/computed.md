# Computed Properties

Variables that rely on reactive data will be marked as calculated data. Calculated data is read-only by default. You can also set the assignment behavior of calculated data through the set syntax, which will be introduced in detail in subsequent chapters.

Calculated data is also responsive data. When the responsive data on which the calculated data depends changes, the calculated data will also trigger updates and trigger updates for other elements that depend on it.

The definition form of calculated properties is very flexible and can be js expressions, functions, objects, etc. At the same time, calculated properties are very easy to understand and are completely consistent with the use of js.

## 1. js expressions and functions

<CodeBox/>

```jsx
let count = 1;
let countAdd2 = count + 2;
let countAdd3 = countAdd2 + 1;
function countMultiply2 () {
     return count * 2
}
<div $mount='#App'>
     <button onclick={count++}>
         click:{count}
     </button>
     <div>count + 2 = {countAdd2}</div>
     <div>count + 3 = {countAdd3}</div>
     <div>count + 4 = {countAdd3 + 1}</div>
     <div>count * 2 = {countMultiply2}</div>
     <div>count * 2 = {countMultiply2()}</div>
     <div>count * 4 = {countMultiply2() * 2}</div>
</div>
```

## 2. Object

When using objects as calculated properties, there is nothing that requires special attention. Just write it according to the native js writing method.

<CodeBox/>

```jsx
let count = 1;
const object1 = {
     countAdd2: count + 1
};
const object2 = {
     countAdd3: object1.countAdd2 + 1
};
<div $mount='#App'>
     <button onclick={count++}>
         click:{count}
     </button>
     <div>object1.countAdd2 = {object1.countAdd2}</div>
     <div>object2.countAdd3 = {object2.countAdd3}</div>
</div>;
```