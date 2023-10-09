<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-09 00:59:16
  * @Description: Coding something
-->
# Concept

This chapter will introduce the core concepts and related principles in Alins.

## JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript) is a JavaScript-based syntax extension that is very similar to HTML. It was first used in Describe the user interface in React. Alins also uses JSX to describe the UI.

In this article, we will not introduce too much about JSX. Just introduce the differences between JSX in Alins and React. If you don’t know JSX, don’t worry. You only need to have a certain understanding of HTML to learn the following tutorials without hindrance. If you need to have a better understanding of JSX, you can also move to [React JSX](https://react.dev/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript).

## Reactive data

Alins will mark each changed variable as reactive data during the compilation phase. Reactive data is the basis of Alins' powerful reactive capabilities. All objects that reference reactive data will have reactive capabilities. At the same time, it supports responsiveness. Type data to monitor data changes. The basis of Alins reactivity is `Proxy API`.

```jsx
let count = 0;
count ++; // count will be marked as reactive data at this time
```

## calculate data

Variables that rely on reactive data will be marked as calculated data. Calculated data is read-only by default. You can also set the assignment behavior of calculated data through the set syntax, which will be introduced in detail in subsequent chapters.

Calculated data is also reactive data. When the reactive data on which the calculated data depends changes, the calculated data will also trigger updates and trigger updates for other elements that depend on it.

```jsx
let count = 0;
let countAdd1 = count + 1;
count ++; // countAdd1 will be marked as calculated data at this time
```

## Data binding

All objects that reference reactive data will have reactive capabilities, such as DOM elements, attributes, styles, etc. All reactive elements will trigger updates at the most granular level. For example, changes in text content will only update the bound TextNode. Reactive styles will only update a single style, etc.

Data binding only needs to use the most original jsx expression. The data binding of related elements is completed as follows. When the count changes, all reactive binding objects will be updated accordingly:

<CodeBox/>

```jsx
let count = 0;
function increaseCount(e){
     count++;
     console.log(e.target.outerHTML);
}
<button $mount='#App'
     onclick={increaseCount}
     count-attr={count}
     class={`count-${count}`}
>
     Count is {count}
</button>;
```

Note: $mount='#App' means mounting the element to the element with the ID App, which will be introduced in subsequent chapters.

### Two-way binding

At the same time, for input type elements, such as Input, Select, TextArea and other input type elements, no additional attributes or syntax are required. Alins naturally supports two-way data binding, and supports type judgment and automatic conversion of bound data.

<CodeBox/>

```jsx
let count = 0;
function increaseCount(e){
     count++;
}
<div $mount='#App'>
     <input value={count} />
     <button onclick={increaseCount}>
         Count is {count}
     </button>
</div>
```


## Components and one-way data flow

The use of the Alins component is basically the same as that of the JSX component. The component itself is a function that returns a JSX object, so the component returns native DOM elements. The first parameter of the component is the attribute, and the second parameter is the element within the component.

The code inside the component will only be executed once, changes to the binding data will only cause fine-grained element updates, and the entire component will not be re-rendered. Components only serve as an organizational form for UI logic.

Here is a basic example of a component:

<CodeBox/>

```jsx
function Component(props, children){
     return <span>
         {children} {props.msg}!
     </span>;
}
<Component msg='World' $mount='#App'>
     <span>Hello</span>
</Component>
```

### One-way data flow

Alins follows the one-way data flow principle. The data passed from the parent component to the child component is also reactive, but cannot be changed in the child component. If you need to modify the parent component data in the child component, you can modify it through the transfer method, or you can use The state sharing scheme introduced in subsequent chapters.

**Note: props in components also support destructuring**

<CodeBox/>

```jsx
function Component({msg, modifyMsg}, children){
     return <div>
         <div>msg = {msg}</div>
         <button onclick={msg += '!'}>Subcomponent directly modifies msg[invalid]</button>
         <button onclick={modifyMsg()}>Subcomponent modifies msg through methods</button>
         {children}
     </div>
}

let msg = 'Hello';
function modifyMsg(){
     msg += '!';
}
<Component msg={msg} modifyMsg={modifyMsg} $mount='#App'>
     <button onclick={msg += '!'}>Parent component modifies msg</button>
</Component>
```

## Compiler and runtime

Alins is mainly divided into two parts: compiler and runtime.

The bottom layer of the compiler is supported by Babel, which is responsible for compiling jsx/tsx code into js code. During this process, Alins will parse and process custom JSX extensions and reactive data logic in the code, converting it into a format that can ultimately be run directly. code in the browser.

The runtime is responsible for running the compiled products and processing reactive data, data binding, logical statements, etc., so that the application can run correctly. The reactive foundation of the runtime is the Proxy API.

The runtime of Alins does not include VDom, and JSX elements will be directly generated into real DOM elements. The biggest feature and advantage of Alins is that each reactive binding is performed with the smallest granularity, so when the data changes, The corresponding element can be updated with a single TextNode, class name, and single style. Each update operation can be ensured to be completed with minimal cost.