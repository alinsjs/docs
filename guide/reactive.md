<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-08 22:04:06
  * @Description: Coding something
-->
# Reactive Data

In Alins, every modified data will be marked as reactive data. JSX objects that use reactive data will be given reactive capabilities. Reactive target objects can be attributes, styles, classes, text, HTML, Logic and other various objects.

## 1. Text

Below is a simple reactive text content

<CodeBox/>

```jsx
let msg = 'Alins';
<button onclick={msg+='!'} $mount='#App'>
     Hello {msg}
</button>
```

In this example, we use the direct use of js expressions as events introduced in the previous chapter to modify the value of msg, so msg will be marked as reactive data during the compilation phase, and the text content of the `Button` element will also be marked as reactive data. It will become a reactive object, and when msg is modified, it will automatically be updated at the most granular level.

## 2. HTML

Reactive HTML is similar to reactive text, but the object becomes HTML content:

<CodeBox/>

```jsx
let html = 'This is<h1>H1 Title<h1>';
<div $mount='#App'>
     <button onclick={html=html.replace(/[hH]1/g, 'h3')}>Change HTML</button>
     <div $html={html}/>
</div>
```

## 3. Attribute

Here is an example of a reactive attribute:

<CodeBox/>

```jsx
let msg = 'Hello';
function onclick(e){
     msg += '!';
     console.log('Msg Attribute = ', e.target.getAttribute('msg'))
}
<button msg={msg} onclick={onclick} $mount='#App'>
     Click Me!
</button>
```

Note: The `$attributes` attribute mentioned in the previous chapter also fully supports reactive data.

<CodeBox/>

```jsx
let name = 'alins';
function logAttributes(e){
    name += '!';
    console.log(e.target.outerHTML);
}
<button $mount='#App'
    inner-attr="test"
    $attributes={`name=${name}&value=framework`}
    onclick={logAttributes} 
>Click Me!</button>
```

## 4. Attribute enable

The attribute accepts an object passed in a value and enable attribute. We can use the enable attribute to control whether the HTML attribute takes effect. The example is as follows:

<CodeBox/>

```jsx
let msg = 'Hello';
let enable = false;
function onclick(e){
     msg += '!';
     enable = !enable;
     console.log('Msg Attribute = ', e.target.getAttribute('msg'))
}
<button msg={{value: msg, enable}} onclick={onclick} $mount='#App'>
     Click Me!
</button>
```

## 5. Class name

The reactive binding of class names is very flexible and can be strings, objects, and single-property class names.

### 5.1 String class name

<CodeBox/>

```jsx
const classList = [];
let index = 0;
function addClass (e) {
     classList.push(`a${index++}`);
     console.log(e.target.className);
}
<button $mount='#App'
     class={`a ${classList.join(' ')}`}
     onclick={addClass}
>Add Class</button>;
```

### 5.2 Object

When using an object to bind a class, the key of the object is the class name, and the value is whether to enable the class name.

<CodeBox/>

```jsx
let a1Flag = false;
let a2Count = 0;
function toggleClass(e){
     a1Flag = !a1Flag;
     a2Count++;
     console.log(e.target.className)
}
<button class={{
     a: true,
     a1: a1Flag,
     a2: a2Count % 2 === 0
}}
onclick={toggleClass} $mount='#App'>
     Toggle Class
</button>;
```

### 5.3 Single attribute class name

Single-attribute class names can coexist with the above two usage methods, and single-attribute class names have the highest priority:

<CodeBox/>

```jsx
const classList = ['a1'];
let a2Flag = false;
let i = 1;
function toggleClass(e){
     classList.push(`n${i++}`)
     a2Flag = !a2Flag;
     console.log(e.target.className)
}
<button $mount='#App'
     class={`a ${classList.join(' ')}`}
     class:a2={a2Flag}
     class:a3={true}
     onclick={toggleClass}
>Toggle Class a2</button>;
```


## 6. Style

The reactive binding of styles is very flexible and can be strings, objects, and single-property styles.

### 6.1 String style

<CodeBox/>

```jsx
let redNumber = 100;
let fontSize = 14;

<div $mount='#App'>
     <button onclick={() => {
         redNumber += 10;
         fontSize++;
     }}>Modify Style</button>
     <div style={`
         color: rgb(${redNumber}, 100, 100);
         font-size: ${fontSize}px;
         font-weight: bold;
     `}>Alins is AWESOME!</div>
</div>;
```

Note: In string styles, the style name is separated by `-`, which is consistent with the css style name.

### 6.2 Object

When using an object to bind a style, the key of the object is the style name and the value is the value of the style.

<CodeBox/>

```jsx
let redNumber = 100;
let fontSize = 14;
function modifyStyle(){
     redNumber += 10;
     fontSize++;
}
<div $mount='#App'>
     <button onclick={modifyStyle}>Modify Style</button>
     <div style={{
         color: `rgb(${redNumber}, 100, 100)`,
         fontSize,
         fontWeight: `bold`,
     }}>Alins is AWESOME!</div>
</div>;
```

Note: When using object binding styles:

1. Style names need to use camel case
2. For numeric type values (such as fontSize), if the unit is px, you can omit the px at the end

### 6.3 Single attribute style

Single-attribute styles can coexist with the above two usage methods, and single-attribute styles have the highest priority.

<CodeBox/>

```jsx
let redNumber = 100;
let fontSize = 14;
function modifyStyle(){
     redNumber += 10;
     fontSize++;
}
<div $mount='#App'>
     <button onclick={modifyStyle}>Modify Style</button>
     <div
         style={`color: rgb(${redNumber}, 100, 100)`}
         style:fontSize={fontSize}
         style:fontWeight='bold'
     >Alins is AWESOME!</div>
</div>
```

## 7. Shallow reactive data

When Alins performs reactive processing on object types, it will perform deep monitoring of the object, that is, it will recursively traverse all levels of the object's attributes, which may cause unnecessary performance loss in some scenarios.

Shallow reactive data is only valid for object types, which means that only the first-layer properties are monitored responsively. This can effectively improve performance in some scenarios with deeply nested objects and only focusing on first-level property changes.

The declaration of shallow reactive data will be introduced in Section 4.4 of the [Compilation Rules](./rule.html) chapter. Only do here