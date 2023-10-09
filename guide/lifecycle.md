<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-21 11:17:44
 * @Description: Coding something
-->
# Lifecycle

The Alins element has the following four life cycle attributes, $created, $appended, $mounted, and $removed. Lifecycle attribute values only accept functions.

## 1. $created

$created means that the dom element has just been created, and the attributes of the dom element have not been added yet. How to use it

<CodeBox/>

```jsx
function created(dom) {
     console.log(dom.outerHTML, `parent=${dom.parentElement}`);
}
<div $created={created} name='hello' $mount='#App'>Hello</div>;
```

## 2. $appended

$appended indicates that the dom element has been mounted on the parent element node, but the dom element may not necessarily be mounted on the document tree at this time. How to use it:

<CodeBox/>

```jsx
function appended(dom) {
     console.log(
         dom.outerHTML,
         `parent=${dom.parentElement.tagName}`,
         `parent.parent=${dom.parentElement.parentElement}`
     );
}
<div $mount='#App'>
     <div $appended={appended} name='hello'>Hello</div>
</div>
```

## 3. $mounted

$mounted means that the dom element has been mounted on the document tree. How to use it:

<CodeBox/>

```jsx
function mounted(dom) {
     console.log(
         dom.outerHTML,
         `parent=${dom.parentElement.tagName}`,
         `parent.parent=${dom.parentElement.parentElement.tagName}`
     );
}
<div $mount='#App'>
     <div $mounted={mounted} name='hello'>Hello</div>
</div>
```

### return value

$mounted can return a function as the $removed life cycle function, indicating that the DOM node is removed from the document tree.

<CodeBox/>

```jsx
let ref;
function mounted(dom) {
     console.log(
         dom.outerHTML,
         `parent=${dom.parentElement.tagName}`,
         `parent.parent=${dom.parentElement.parentElement.tagName}`
     );
     return dom => {console.log(`Removed: ${dom.innerHTML}`)}
}
<div $mount='#App'>
     <div $ref={ref} $mounted={mounted} name='hello'>Hello</div>
     <button onclick={ref.remove()}>Remove Hello</button>
</div>
```

## 4. $removed

$removed means that the dom node is removed from the document tree.

<CodeBox/>

```jsx
let ref;
function removed(dom) {
     console.log(`Removed: ${dom.innerHTML}`);
}
<div $mount='#App'>
     <div $ref={ref} $removed={removed} name='hello'>Hello</div>
     <button onclick={ref.remove()}>Remove Hello</button>
</div>
```

## 5. Use within components

In the component, you can use compilation rules to separate from JSX attributes and declare life cycle functions in js logic. For specific usage, please refer to Section 7 of Chapter [Compilation Rules] (./rule.html)