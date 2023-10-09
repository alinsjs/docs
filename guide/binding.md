# Data Binding

All objects that reference reactive data will have reactive capabilities, such as DOM elements, attributes, styles, etc. All reactive elements will trigger updates at the most granular level. For example, changes in text content will only update the bound TextNode. Reactive styles will only update a single style, etc.

We have introduced the basic usage of reactive data binding in more detail in the above two chapters.

This chapter mainly introduces two-way data binding.

## 1. value attribute

For input type DOM elements using the value attribute, if the value attribute value is a variable, then the variable will be directly marked as reactive data and bidirectionally bound to the input element. When the variable is updated, the DOM element will be updated. When the DOM element input changes, the value of the variable will also be modified.

Here are some examples

### 1.1 input and textarea

<CodeBox/>

```jsx
let value = 'Hello';
<div $mount='#App'>
     <input value={value} /><br/>
     <textarea value={value}></textarea>
     <div>Content = "{value}"</div>
</div>
```

### 1.2. number and range

When the variable is of numeric type, Alins will automatically set the two-way binding mode to numeric mode, that is, it will subsequently convert the value of the input element into a numeric type and assign it to the bound variable.

<CodeBox/>

```jsx
let a = 1, b = 2;
<div $mount='#App'>
     <div>
         <input type='number' value={a}/>
         <input type='range' value={a}/>
     </div>
     <div>
         <input type='number' value={b}/>
         <input type='range' value={b}/>
     </div>
     <div> a + b = {a + b}</div>
</div>
```

### 1.3. select

<CodeBox/>

```jsx
let selected = 'Apple';
<div $mount='#App'>
     <select value={selected}>
         <option>Apple</option>
         <option>Banana</option>
         <option>Orange</option>
     </select>
     <div>Selected Fruit: {selected}</div>
</div>
```

#### bool type

Like the automatic conversion of numeric types introduced in 1.3, the two-way binding of Boolean type variables will also be automatically converted.

<CodeBox/>

```jsx
let selected = true;
<div $mount='#App'>
     <select value={selected}>
         <option>true</option>
         <option>false</option>
     </select>
     <div>True of False: {selected}; type = {typeof selected}</div>
</div>
```

## 2. checked attribute

For input elements of checkbox type, Alins will use the `checked` attribute as the binding target. When the value of the checked attribute is a variable, the change will be marked as a reactive variable and bidirectionally bound to the input element.

<CodeBox/>

```js
let checked = false;
<div $mount='#App'>
     <input type='checkbox' checked={checked} />
     <div> checked = {checked}; type = {typeof checked}</div>
</div>
```

## 3. Type decorator

As introduced in 1.2 and 1.3, when the variable type is a numeric type or a Boolean type, two-way binding will automatically convert the data type.

So what if the initial type of the variable is not the expected data type? At this time we can use type decorators to force data type conversion.

### 3.1 number decorator

<CodeBox/>

```jsx
let a = 1, b = '';
<div $mount='#App'>
     <input value={a}/>
     <input value:number={b}/>
     <div> a + b = {a + b}</div>
</div>
```

### 3.2 boolean decorator

<CodeBox/>

```jsx
let selected = 'true';
<div $mount='#App'>
     <select value:boolean={selected}>
         <option>true</option>
         <option>false</option>
     </select>
     <div>True of False: {selected}; type = {typeof selected}</div>
</div>
```

Note: There is actually a string decorator, but since the default mode is string mode, you don’t need to pay attention to this decorator.