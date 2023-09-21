# Components and Data Flow

The use of the Alins component is basically the same as that of the JSX component. The component itself is a function that returns a JSX object, so the component returns native DOM elements. The first parameter of the component is the attribute, and the second parameter is the element within the component.

The code inside the component will only be executed once, changes to the binding data will only cause fine-grained element updates, and the entire component will not be re-rendered.

## 1. Properties

The first parameter of the component function is all the properties passed in by the component.

<CodeBox/>

```jsx
function Component(props){
     return <div>
         a = {props.a}; b = {props.b};
     </div>;
}

let a = 1, b = 2;
<div $$App>
     <Component a={a} b={b} />
     <button onclick={()=>{
         a++;
         b++;
     }}>Increase Data</button>
</div>
```

### Attribute structure

Both the passing and use of attributes support the use of attribute destructuring, and the attributes will not lose their responsiveness.

<CodeBox/>

```jsx
function Component({a, b}){
     return <div>
         a = {a}; b = {b};
     </div>;
}

let data = {a: 1, b: 2};
<div $$App>
     <Component {...data} />
     <button onclick={()=>{
         data.a++;
         data.b++;
     }}>Increase Data</button>
</div>
```

## 2. JSX extended attributes

The Alins component does not support the following JSX extended attributes: $attributes, $html, $ref, because these attributes directly affect DOM elements. Since the component itself does not directly represent a DOM element, the above attributes cannot be used.

Since the return value of a component can be a DOM element or HTMLDocument, and HTMLDocument has certain limitations in mounted and removed monitoring, Alins did some processing on the life cycle attributes. When the return value is a DOM element, it acts directly on the component return value; when the return value is an HTMLDocument, it acts on the first child node of the DOM element.

Examples of components using $mount and lifecycle properties are as follows:

<CodeBox/>

```jsx
function Component () {
     let dom;
     return <div $ref={dom}>
         <span>Hello!</span>
         <button onclick={dom.remove()}>Remove</button>
     </div>;
}

<Component $$App
     $mounted={(dom) => {console.log('mounted', dom.tagName);}}
     $appended={(dom) => {console.log('appended', dom.tagName);}}
     $removed={(dom) => {console.log('removed', dom.tagName);}}
     $created={(dom) => {console.log('created', dom.tagName);}}
></Component>;
```

## 3. Child node

Child nodes can be added inside the component, and the child nodes will be passed into the second parameter of the component function, which is a node array and can be inserted into the return value JSX object of the component function.

<CodeBox/>

```jsx
function Counter ({count}, children) {
     return <div>
         <span>Count is {count}</span>
         {children}
     </div>;
}

let count = 0;
<Counter $$App count={count}>
     <button onclick={count ++}>Increase Count</button>
</Counter>;
```

## 4. Asynchronous components

Asynchronous functions can also be used as components. We call them `asynchronous components`. When Alins encounters an asynchronous component, it will first generate an empty node and return it as an anchor point. When the asynchronous component completes execution and returns the real node, it will replace the anchor point. .

<CodeBox/>

```jsx
function mockFetch(){
     return new Promise(resolve => {
         setTimeout(()=>{
             resolve({name: 'Bob', age: 10})
         }, 1000)
     });
}

async function Componnt(){
     const data = await mockFetch();
     return <div>name={data.name}; age={data.age}</div>
}

<button onclick={<Componnt $$App/>} $$App>
     Mount Async Component
</button>
```

## 5. One-way data flow

Alins follows the one-way data flow principle. The data passed from the parent component to the child component is also responsive, but cannot be changed in the child component. If you need to modify the parent component data in the child component, you can modify it through the transfer method, or you can use The state sharing scheme introduced in subsequent chapters.

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
<Component msg={msg} modifyMsg={modifyMsg} $$App>
     <button onclick={msg += '!'}>Parent component modifies msg</button>
</Component>
```