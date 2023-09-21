<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-09 15:17:24
  * @Description: Coding something
-->
# HTML class name

The use of HTML class names in Alins is somewhat different from that of ordinary attributes.

## 1. Use strings

When using strings as class attribute values, there is not much difference in removing ordinary attribute values:

<CodeBox/>

```jsx
function logClass(e){
     console.log(e.target.className);
}
let className = 'v1 v2';
<div $$App>
     <button class='a b' onclick={logClass}>static string</button>
     <button class={className} onclick={logClass}>String variable</button>
     <button class={`a ${className}`} onclick={logClass}>String template</button>
</div>;
```

## 2. Use objects

In Alins, objects can be used as class attribute values. The key of the object represents the class name, and the value of the object is a Boolean value, indicating whether the attribute is valid.

<CodeBox/>

```jsx
const classObject = {
     a: true,
     a1: false,
     a2: true
};
function logClass(e){
     console.log(e.target.className);
}
<button $$App
     class={classObject}
     onclick={logClass}>
     Log Class
</button>
```

## 3. Use Boolean expressions

The class attribute value can also use Boolean expressions

<CodeBox/>

```jsx
let a1Flag = false;
let a2Count = 2;
function logClass(e){
     console.log(e.target.className);
}
<button $$App
     class={{
         a: true,
         a1: a1Flag,
         a2: a2Count > 1
     }}
     onclick={logClass}>
     Log Class
</button>
```

## 4. Single attribute class name

The attribute prefixed with `class:` represents a single-attribute class name. The part after `class:` of the attribute name of a single-attribute class name represents the class name. The value of the single-attribute class name is a Boolean type, indicating whether a class name needs to be used. The single-attribute class name can exist at the same time as the class attribute.

<CodeBox/>

```jsx
function logClass(e){
     console.log(e.target.className);
}
<button $$App
     class='a1 a2'
     class:a3={true}
     class:a4={2 < 1}
     onclick={logClass}>
     Log Class
</button>
```