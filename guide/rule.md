<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-17 16:38:24
  * @Description: Coding something
-->

# Compilation rules

This chapter introduces some grammatical rules in Alins.

## 1. Attribute abbreviation

Properties in Alins can be abbreviated in the following situations:

1. For ordinary attributes, when the attribute value is a variable, you can use : to abbreviate it, such as `name={userName}` can be abbreviated as `name:userName`
2. For ordinary attributes, when the attribute name is consistent with the variable name, you can prefix the attribute name with $ and then omit the attribute value. For example, `src={src}` can be abbreviated to `$src`
3. Use the ID selector for the $mount attribute, such as `$mount='#App'`, which can be abbreviated as `$:App`
   
Here is an example of a summary:

<CodeBox/>

```jsx
let msg = 'Hello';
function modifyMsg(e){
     msg += '!';
     console.log(e.target.outerHTML);
}
<button
     $mount='#App'
     $msg
     msg2:msg
     onclick:modifyMsg>
         Modify Msg
</button>;
```

## 2. Computed Set tag

Calculated data in Alins also supports the set method, which can be specified using the set tag, as follows:

<CodeBox/>

```jsx
let a = 1;
let b = a + 1; set: v => a = v + 1;
<div $mount='#App'>
     <button onclick={b++}>Modify B</button>
     <div>a={a}; b={b}</div>
</div>;
```

## 3. Watch tag

Alins supports monitoring changes in responsive data, which can be achieved through the watch tag:

<CodeBox/>

```jsx
let a = 1;
const b = a + 1;
const c = {
     a: a + 2
};

watch: a, (newValue, oldValue) => {
     console.log('a changed:', newValue, oldValue);
};
watch: a + 1, (newValue, oldValue) => {
     console.log('a + 1 changed:', newValue, oldValue);
};
watch: () => a * 2, (newValue, oldValue) => {
     console.log('a * 2 changed:', newValue, oldValue);
};
watch: b, (newValue, oldValue) => {
     console.log('b changed:', newValue, oldValue);
};
watch: c, (newValue, oldValue, prop) => {
     console.log('c changed:', newValue, oldValue, prop);
};

<button $mount='#App' onclick={a++}>Modify A</button>;
```

## 4. Static and dynamic data

Alins will judge static data and dynamic data by default, but if you need to manually specify the type, you can also do it through annotations or tags. Which writing method to use can be decided according to personal preference.

### 4.1 Comments

Variables modified with the `@static` annotation will be forced to be marked as static data, and variables modified with the `@reactive` annotation will be forced to be marked as reactive data. Variables modified with the `@shallow` annotation will be forced to be marked as shallow responsive data

When modifying multiple variable declarations, you can add parentheses to indicate which variables are selected.

<CodeBox/>

```jsx
let name1 = 1; // @static
name1++;
// static coment mark a variable as static data even if the value changes

let a = 1,b = 1,c = 1; // @static(a)
a++; b++; c++;

let name2 = 2; // @reactive
// reactive comment mark a variable as reactive data even if the value does not change

let d = 1,e = 1,f = 1; // @reactive(d)

const shallowReactive = {a:1}; // @shallow
// shallow comment mark a variable as shallow reactive data

<div $mount='#App'>Click output to view the compilation product</div>
```

Comments can also be written before variables, such as:

```jsx
// @static
let name1 = 1;
```

Comments can also be used to modify import statements

```jsx
// @static
import {data} from './data';
```

### 4.2 Label

You can also force the declaration of static data and reactive data respectively through the `_` and `$` label, which have the same effect as let

<CodeBox/>

```jsx
_: name1 = 1; // @static
name1++;

$: name2 = 2;

<div $mount='#App'>Click output to view the compilation product</div>
```

### 4.3 Shallow responsive data

[Shallow responsive data](./reactive.html) is only valid for object types, indicating that only the first layer of properties will be monitored responsively.

Shallow responsive data can be marked in two ways: comments and js label.

<CodeBox/>

```jsx
const data1 = {a:{b:1}}; // @shallow

shallow: data2 = {a:{b:1}};
$$: data3 = {a:{b:1}};

<div $mount='#App'>Click output to view the compilation product</div>
```

## 5. Static domain

All variables declared in the static domain will be forcibly marked as static data, and all variables, calculated data, and logical statements will be skipped by the compiler. JSX and mandatory tagging of responsive data in static fields will not be affected. Static domain objects can be functions, if statements, switch statements, for statements, block scopes, and labels.

### 5.1 Comment Statement

You can use @static-scope to declare a static scope:

<CodeBox/>

```jsx
// @static-scope
function foo(){
     let name = '';
     name++;
}
// @static-scope
if(true){
     let name = '';
     name++;
}
// @static-scope
switch(1){
     case 1: {
         let name = '';
         name++;
     };break;
}
// @static-scope
for(let i=0; i<1; i++){
     let name = '';
     name++;
}
// @static-scope
{
     let name = '';
     name++;
};
// @static-scope
test: () => {
     let name = '';
     name++;
};
<div $mount='#App'>Click output to view the compilation product</div>;
```

### 5.2 Label declaration

You can also declare a static scope through the static_scope tag

<CodeBox/>

```jsx
static_scope: {
     let name = '';
     name++;
};
static_scope: if(true){
     let name = '';
     name++;
}
<div $mount='#App'>Click output to view the compilation product</div>;
```

## 6. Responsive logic blocks

Alins does not compile all if and switch statements into If or Switch logic blocks. Logical block compilation is only performed when there are JSX assignment statements or JSX return statements in the branches of the if or switch statements. However, Since js syntax is very flexible and cannot cover all scenarios during the compilation phase, compilation rules for responsive logic blocks have been added to allow developers to decide whether they need to force logic block compilation to be turned on.

Reactive logic blocks can be marked with the `@reactive` annotation or marked with the `$:` tag as follows:

<CodeBox/>

```jsx
function fnJSX (content, toggle) {
     return <button onclick={toggle}>{content}</button>
}

let flag = false;
const toggle = () => flag = !flag;

function Main () {
     // @reactive
     if (flag) return fnJSX('flag = true', toggle);
     return fnJSX('flag = false', toggle);
}
function Main2 () {
     $: if (flag) return fnJSX('flag = true', toggle);
     return fnJSX('flag = false', toggle);
}
<Main $mount='#App'/>;
<Main2 $mount='#App'/>;
```

## 7. Lifecycle tags

In addition to using life cycle attributes in components, you can also use life cycle tags to define life cycle functions. The usage is as follows:

<CodeBox/>

```jsx
functionComponent(){
     let ref;
     created: dom => {
         console.log('created', dom.className);
     };
     appended: dom => {
         console.log('appended', dom.className);
     };
     mounted: dom => {
         console.log('mounted', dom.className);
     };
     removed: dom => {
         console.log('removed', dom.className);
     };
     return <div $ref={ref} class='component-dom'>
         <button onclick={ref.remove()}>Remove Component</button>
     </div>
}
<Component $mount='#App'/>
```