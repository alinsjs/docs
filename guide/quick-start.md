<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-21 11:17:44
 * @Description: Coding something
-->
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

You can also directly clone [template code repository](https://github.com/alinsjs/ebuild-template-alins)

## 1.2 Using the Web Compiler

<CodeBox :iframe='true' :height='60' :html='true' :pure='true'/>

```html
<script src='https://unpkg.com/alins-compiler-web'></script>
<script type='text/alins'>
     let count = 1;
     <button onclick={count++} $mount='body'>
         count is {count}
     </button>;
</script>
```

Note:
1. This method is not recommended for use in production environments.
2. You can use type='text/babel' to get the editor's own syntax highlighting.

You can also use it freely in [Practice Ground](https://alinsjs.github.io/playground/#48), which also uses the Web compiler