# Logic Block

Using the logic blocks in Alins makes it easy to manage UI logic. The data of logical components is specified through the data attribute.

## 1. If logic

If is used to express branch logic. When a certain condition is matched, the corresponding UI is displayed. If logic can be expressed in three forms: components, attributes, and statements. The specific usage method depends on the developer's preferences.

### 1.1 Components

The judgment condition of the If component is passed in using the data attribute. Supports Boolean values and Boolean expressions, use the following

<CodeBox/>

```jsx
let count: number = 0;
const add = () => {count++};
<div $mount='#App'>
     <If data={count > 3}>
         <div>Now count > 3</div>
     </If>
     <ElseIf data={count > 2}>
         <button onclick:add>continue[count>2]</button>
     </ElseIf>
     <Else>
         <button onclick:add>count={count}</button>
     </Else>
</div>;
```

### 1.2 Properties

You can use $if, $elseif, $else attributes to complete the implementation of If logic:

<CodeBox/>

```jsx
let count: number = 0;
const add = () => {count++};
<div $mount='#App'>
     <div $if={count>3}>Now count > 3</div>
     <button $elseif={count > 2} onclick:add>continue[count>2]</button>
     <button $else onclick:add>count={count}</button>
</div>;
```

Note: If logic attributes and components can be mixed at will:

<CodeBox/>

```jsx
let count: number = 0;
const add = () => {count++};
<div $mount='#App'>
     <div $if={count>3}>Now count > 3</div>
     <ElseIf data={count > 2}>
         <button onclick:add>continue[count>2]</button>
     </ElseIf>
     <button $else onclick:add>count={count}</button>
</div>;
```


### 1.3 Statement

Alins will compile the `if` statement of js into an If logical component, with the same function as the If component.

<CodeBox/>

```jsx
function Main () {
     let count: number = 0;
     const add = () => {count++};
     if (count > 3) {
         return <div>Now count > 3</div>;
     } else if (count > 2){
         return <button onclick:add>continue[count>2]</button>;
     }
     return <button onclick:add>count={count}</button>
}
<Main $mount='#App'/>;
```

## 2. Switch logic

The switch logic is similar to the js switch statement, which is used to select separate executions based on the value of a variable. Switch logic can be expressed in three forms: components, attributes, and statements.

### 2.1 Components

The judgment condition of the Switch component is passed in using the data attribute, the conditional branch is received using the Case component, and the value of the condition is also passed in using the data attribute. The Default component is used to handle the default conditional branch of Switch.

The data attribute of Case supports passing in an array, which means matching multiple values at the same time.

<CodeBox/>

```jsx
function Main () {
     let count = 0;
     const add = () => {count++;};
     return <Switch data={count}>
         <Case data={[1,2]}>
             <button onclick={add}>Count is 1 or 2:{count}</button>
         </Case>
         <Case data={3}>
             <button onclick={add}>Count is 3[count=3]</button>
         </Case>
         <Case data={4}>
             <button onclick={add}>Now Count = 4</button>
         </Case>
         <Default>
             <button onclick={add}>Other Count:{count}</button>
         </Default>
     </Switch>;
}
<Main $mount='#App'/>;
```

At the same time, the Case component supports the break attribute, which is used to indicate whether to jump out of the Switch logic immediately. The default value is true.

<CodeBox/>

```jsx
function Main () {
     let count = 0;
     const add = () => {count++;};
     return <Switch data={count}>
         <Case data={1} break={false}>
             <button onclick={add}>Count is 1</button>
         </Case>
         <Case data={2}>
             <button onclick={add}>Count is 1 or 2:{count}</button>
         </Case>
         <Default>
             <button onclick={add}>Other Count:{count}</button>
         </Default>
     </Switch>;
}
<Main $mount='#App'/>;
```

### 3.2 Properties

You can use $switch, $case, $default attributes to complete the implementation of Switch logic:

<CodeBox/>

```jsx
function Main () {
     let count = 0;
     const add = () => {count++;};
     return <div $switch={count}>
         <button $case={1} $break={false} onclick={add}>Count is 1</button>
         <button $case={2} onclick={add}>Count is 1 or 2:{count}</button>
         <button $default onclick={add}>Other Count:{count}</button>
     </div>;
}
<Main $mount='#App'/>;
```

Note: The properties and components of switch logic can be mixed at will:

<CodeBox/>

```jsx
function Main () {
     let count = 0;
     const add = () => {count++;};
     return <div $switch={count}>
         <Case data={1} break={false}>
             <button onclick={add}>Count is 1</button>
         </Case>
         <button $case={2} onclick={add}>Count is 1 or 2:{count}</button>
         <Default>
             <button onclick={add}>Other Count:{count}</button>
         </Default>
     </div>;
}
<Main $mount='#App'/>;
```

### 3.3 Statement

Alins will compile the `switch` statement of js into a Switch logical component, with the same function as the Switch component.

<CodeBox/>

```jsx
function Main () {
     let count = 0;
     const add = () => {count++;};
     switch (count) {
         case 1:
         case 2:
             return <button onclick={add}>Count is 1 or 2:{count}</button>;
         case 3: return <button onclick={add}>Count is 3[count=3]</button>;
         case 4: return <button onclick={add}>Now Count = 4</button>;
     }
     return <button onclick={add}>Other Count:{count}</button>;
}
<Main $mount='#App'/>;
```

## 4. For logic

For logic is used to render arrays and supports responsive support for addition, deletion and modification operations of arrays. For logic can be expressed in three forms: components, attributes, and map functions.

### 4.1 For component

The For component uses the data attribute to pass in the array as follows:

<CodeBox/>

```jsx
const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]
let age = 10;
<div $mount='#App'>
     <button onclick={
         list.unshift({name: 'Tom', age: age++})
     }>Add Person</button>
     <For data:list>
         <div>{$index+1}: name={$item.name}; age={$item.age};</div>
     </For>
</div>;
```

You can use the item attribute to customize the $item name, or you can use the index attribute to customize the $index name:

```jsx
<For data:list name='person' index='id'>
     <div>{id+1}: name={person.name}; age={person.age};</div>
</For>
```

### 4.2 Properties

For logic can also be expressed using the $for attribute:

<CodeBox/>

```jsx
const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]
let age = 10;
<div $mount='#App'>
     <button onclick={
         list.unshift({name: 'Tom', age: age++})
     }>Add Person</button>
     <div $for={list}>{$index+1}: name={$item.name}; age={$item.age};</div>
</div>;
```

You can use the $item attribute to customize the $item name, or you can use the $index attribute to customize the $index name:

```jsx
<div $for={list} $item='person' $index='id'>
     {id+1}: name={person.name}; age={person.age};
</div>
```

## 4.3 map function

The map function that comes with the array has the same effect as the For component:

<CodeBox/>

```jsx
const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]
let age = 10;
<div $mount='#App'>
     <button onclick={
         list.unshift({name: 'Tom', age: age++})
     }>Add Person</button>
     <button onclick={list[1].age ++}>Modify Second Person Age</button>
     {list.map((item, index) => (
         <div>{index+1}: name={item.name}; age={item.age};</div>
     ))}
</div>;
```

## 5. Async logic

Async logic is used to describe an asynchronous component. Asynchronous components have been introduced in the [Component](./component) chapter and will not be repeated here. Async logic can be expressed in two forms: components and attributes.

### 5.1 Components

Use $data in asynchronous components to accept asynchronously returned data. The usage method is as follows:

<CodeBox/>

```jsx
function mockFetch(){
     return new Promise(resolve => {
         setTimeout(() => {
             resolve({name: 'Bob', age: 10})
         }, 1000)
     });
}

function Component(){
     return <Async data={mockFetch()}>
         <div>name={$data.name}; age={$data.age}</div>
     </Async>;
}

<button onclick={<Component $mount='#App'/>} $mount='#App'>
     Mount Async Component
</button>
```

You can modify the name of the return value $data through the name attribute, such as:

```jsx
<Async data={mockFetch()} name='person'>
     <div>name={person.name}; age={person.age}</div>
</Async>
```

### 5.2 Properties

You can use the $async attribute to describe asynchronous logic, as follows:

<CodeBox/>

```jsx
function mockFetch(){
     return new Promise(resolve => {
         setTimeout(() => {
             resolve({name: 'Bob', age: 10})
         }, 1000)
     });
}

function Component(){
     return <div $async={mockFetch()}>
         name={$data.name}; age={$data.age}
     </div>;
}

<button onclick={<Component $mount='#App'/>} $mount='#App'>
     Mount Async Component
</button>
```

You can modify the name of the return value $data through the $name attribute, such as:

```jsx
<div $async={mockFetch()} $name='person'>
     name={person.name}; age={person.age}
</div>;
```

## 6. Show logic

Show logic is used to control whether the UI is displayed. The difference from If is that the hidden component still exists in the DOM tree, but is hidden through styles. Show logic can be expressed in two forms: components and attributes.

### 6.1 Components

<CodeBox/>

```jsx
let show: boolean = false;
<div $mount='#App'>
     <button onclick={show = !show}>Toggle Show</button>
     <Show data={show}>
         <div>Show Element</div>
     </Show>
</div>
```

## 6.2 $show attribute

The same effect as the Show component can also be achieved through the $show attribute.

<CodeBox/>

```jsx
let show: boolean = false;
<div $mount='#App'>
     <button onclick={show = !show}>Toggle Show</button>
    <div $show={show}>Show Element 2</div>
</div>
```