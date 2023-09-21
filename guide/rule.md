<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-17 16:38:24
  * @Description: Coding something
-->

# Compilation rules

This chapter introduces some grammatical rules in Alins.

## 1. Attribute abbreviation

Properties in Alins can be abbreviated in the following situations:

1. For the $mount attribute, when the value is the id selector, it can be abbreviated to $$ID. For example, `$mount='#App'` can be abbreviated to `$$App`
2. For the $mount attribute, when the value is document.body, it can be abbreviated to $$body. For example, `$mount={document.body}` can be abbreviated to `$$body`
3. For ordinary attributes, when the attribute value is a variable, you can use : to abbreviate it, such as `name={userName}` can be abbreviated as `name:userName`
4. For ordinary attributes, when the attribute name is consistent with the variable name, you can prefix the attribute name with $ and then omit the attribute value. For example, `src={src}` can be abbreviated to `$src`
   
Here is an example of a summary:

<CodeBox/>

```jsx
let msg = 'Hello';
function modifyMsg(e){
     msg += '!';
     console.log(e.target.outerHTML);
}
<button
     $$App
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
<div $$App>
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

<button $$App onclick={a++}>Modify A</button>;
```

## 4. Static and dynamic data

Alins will judge static data and dynamic data by default, but if you need to manually specify the type, you can also do it through variable naming, comments or labels. Which writing method to use can be decided according to personal preference.

### 4.1 Variable naming

Variables whose first character is `_` will be forcibly marked as static data, and data starting with `$` will be forcibly marked as reactive data.

<CodeBox/>

```jsx
let _name = 1;
_name++;
// Variables starting with _ are compiled as static data even if the value changes

let $name = 2;
// Variables starting with $ are compiled into reactive data even if the value does not change

const $$shallowReactive = {a:1};
// Variables starting with $$ are compiled into shallow reactive data

<div $$App>Click output to view the compilation product</div>
```

### 4.2 Comments

Variables modified with the `@static` annotation will be forced to be marked as static data, and variables modified with the `@reactive` annotation will be forced to be marked as reactive data.

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

<div $$App>Click output to view the compilation product</div>
```

Annotations can also be defined before variables, such as:

```jsx
// @static
let name1 = 1;
```

Comments can also be used to modify import statements

```jsx
// @static
import {data} from './data';
```

### 4.3 Tags

You can also force the declaration of static data or reactive data through the `_` and `$` tags, which has the same effect as let

<CodeBox/>

```jsx
_: name1 = 1; // @static
name1++;

$: name2 = 2;

<div $$App>Click output to view the compilation product</div>
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
<div $$App>Click output to view the compilation product</div>;
```

### 5.2 Function naming declaration

You can also declare a static scope by naming a function starting with an underscore.

<CodeBox/>

```jsx
function _foo(){
     let name = '';
     name++;
}
const _foo2 = () => {
     let name = '';
     name++;
}
<div $$App>Click output to view the compilation product</div>;
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
<div $$App>Click output to view the compilation product</div>;
```