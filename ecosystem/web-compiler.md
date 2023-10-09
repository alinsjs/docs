<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# Web compiler

Alins provides a compiler for the browser environment for development and debugging, and it is not recommended to use it directly in a production environment because it is compiled directly in the browser environment.

## 1. use

Save the following code in an HTML file to compile and run the Alins application directly in the browser environment:

<CodeBox :iframe='true' :height='60' :html='true'/>

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
        <button onclick={count++} $mount='body'>
            count is {count}
        </button>;
    </script>
</body>
</html>
```

## 2. The type attribute

The web compiler can recognize three types, 'text/alins', 'text/babel', 'text/jsx', and compile and execute the code in them.

## 3. import property

You can use the import attribute to specify how alins is introduced. Optional values are:

1. esm: Indicates the introduction of alins using the import statement
2. cjs: Indicates the introduction of Alins using the require method
3. iife means from `window.Alins` introduced alins, which defaults to iife

The usage method is as follows

```html
<script type='text/alins' import="esm"> 
    let count = 1;
    <button onclick={count++} $mount='body'>
        count is {count}
    </button>;
</script>
```

## 4. ts attribute

The ts attribute is used whether to use TypeScript

The following ways to enable it

```html
<script type='text/alins' ts> 
    let count: number = 1;
    <button onclick={count++} $mount='body'>
        count is {count}
    </button>;
</script>
```

