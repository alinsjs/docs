# Quick Start

## 1.1 Command line creation

```
npm create alins
```

After following the steps, execute the following command to install and run it.

```
cd <project>
npm i
npm rundev
```

You can also directly clone the [template code repository](https://github.com/alinsjs/ebuild-template-alins)

## 1.2 Using the Web Compiler

```html
<script src='https://cdn.jsdelivr.net/npm/alins-compiler-web'></script>
<script type='text/alins'>
     let count = 1;
     <button onclick={count++} $$body>
         count is {count}
     </button>;
</script>
```

Note:
1. This approach is not recommended for production environments.
2. You can use type='text/babel' to enable syntax highlighting provided by the editor.

You can also freely use it in the [playground](https://alinsjs.github.io/playground/#48), which also utilizes a web compiler.