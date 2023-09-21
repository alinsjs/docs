<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-17 16:33:22
  * @Description: Coding something
-->
# Web Compiler

Alins provides a browser environment compiler that can be used for development and debugging. Since it is compiled directly in the browser environment, it is not recommended to be used directly in the production environment.

## 1. Use

Save the following code in an html file to compile and run the alins application directly in the browser environment:

<CodeBox :iframe='true' :height='40' :html='true'/>

```html
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
</head>
<body>
     <script src='https://unpkg.com/alins-compiler-web'></script>
     <script type='text/alins'>
         let count = 1;
         <button onclick={count++} $$body>
             count is {count}
         </button>;
     </script>
</body>
</html>
```

## 2. type attribute

The web compiler can recognize three types, `text/alins`, `text/babel`, `text/jsx`, and compile and execute the code in them.

## 3. import attribute

You can use the import attribute to top the import statement. The optional values are:

1. esm: means using the import statement to introduce alins
2. cjs: means using the require method to introduce alins
3. iife means importing alins from window.Alins, the default value is iife

How to use it

```html
<script type='text/alins' import="esm">
     let count = 1;
     <button onclick={count++} $$body>
         count is {count}
     </button>;
</script>
```

## 4. ts attribute

The ts attribute is used to determine whether to use typescript

The opening method is as follows

```html
<script type='text/alins' ts>
     let count: number = 1;
     <button onclick={count++} $$body>
         count is {count}
     </button>;
</script>
```