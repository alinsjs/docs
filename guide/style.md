<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-09 15:17:24
  * @Description: Coding something
-->
# Style

The use of the style attribute in Alins is somewhat different from that of ordinary attributes.

## 1. Use strings

When using a string as the style attribute value, there is not much difference from the ordinary attribute value:

<CodeBox/>

```jsx
let style = 'color: #4f4';
<div $mount='#App'>
     <div style='color: #f44'>Static string</div>
     <div style={style}>String variable</div>
     <div style={`font-size:20px;${style}`}>String template</div>
</div>;
```

## 2. Use objects

Alins can use objects as style attribute values. When using objects, the style name must be in camel case. And for numeric types, if the unit is px, you can omit the px at the end

<CodeBox/>

```jsx
const style = {
     color: '#f44',
     fontSize: 20, // The unit here defaults to px
     fontWeight: 'bold',
};
<div $mount='#App'>
     <div style={style}>Alins is AWESOME!</div>
</div>;
```

## 3. Use js expressions

The style attribute value can also use js expressions

<CodeBox/>

```jsx
let redNumber = 255;
let fontSize = 20;

<div $mount='#App'>
     <div style={{
         color: `rgb(${redNumber}, 50, 50)`,
         fontSize,
         fontWeight: `bold`,
     }}>Alins is AWESOME!</div>
</div>;
```

## 4. Single attribute style

The attribute prefixed with `style:` represents a single-attribute style, the part after the attribute name `style:` of a single-attribute style represents the style name, and the value of a single-attribute style represents the style value. Single-attribute styles can exist simultaneously with the style attribute. The style names of single-attribute styles also need to use camelCase.

<CodeBox/>

```jsx
<div $mount='#App'
     style='color: #f44;'
     style:fontSize={20}
     style:fontWeight='bold'>
     Alins is AWESOME!
</div>
```