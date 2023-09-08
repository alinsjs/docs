<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-08 09:46:55
 * @Description: Coding something
-->
# Introduction

## What is Alins?

Alins, abbreviated as Alins, is a Web UI framework that is pure, concise, and elegant. It adheres to the development philosophy of 0-API and Less is More, aiming to help developers free themselves from the trouble of API calls in UI frameworks and develop high-performance responsive Web applications with the most intuitive, purest, and most vanillajs-like development methods. At the same time, it has extremely small packaging volume.

You only need to understand the writing rules of JSX (similar to HTML syntax) to develop alins web applications without any obstacles. Here is a basic counter example:

<CodeBox />

```jsx
let count = 1;
<button onclick={count++} $mount='#App'>
    count is {count}
</button>;
```

    
The above example demonstrates two core features of Alins:

- Jsx: Alins uses JSX (a JavaScript syntax extension similar to HTML for describing UI) to describe UI, and customizes some special attri- butes and extends the JSX syntax.

- Responsiveness: Unlike other frameworks' responsive functions, Alins does not need to introduce any responsive APIs. The Alins compiler tracks and marks responsive data during the compilation phase, and with the responsive design at runtime, Alins can update the UI's most granular responsive capabilities.

Based on Alins' powerful compiler function and runtime responsive design, developers can develop responsive applications using only the most pure JSX, without introducing any responsive APIs or unnecessary syntax that increases mental burden. Moreover, it has extremely high performance and minimal packaging volume.

In addition, Alins does not use vdom. Furthermore, thanks to its fine-grained responsive binding, Alins can change and reference the dom elements of the responsive data with the smallest cost.

In the example above, if you don't like the `$mount` attribute, you can also use the appendChild method to complete the mounting node, but you will have to write a little more code.

<CodeBox />

```js
let count = 1;
document.getElementById('App').appendChild(
  <button onclick={count++}>
      count is {count}
  </button>
);
```

::: tip
Preliminary knowledge:
The following content of the document assumes that you are already familiar with HTML, CSS, and JavaScript. If you are completely unfamiliar with front-end development, it is best not to start learning from a framework directly - it is better to master the basics before returning here. You can check your JavaScript proficiency level by reading this [JavaScript Overview](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_overview). Having prior experience with other frameworks would be helpful, but it is not necessary.
:::


## Features

1. [x] 0-API, Less is More, closest to native JavaScript development.
2. [x] Powerful reactivity, supports reactive updates for properties, styles, text, HTML, and other elements.
3. [x] High performance (superior to Vue3 and React).
4. [x] Does not use virtual DOM (vdom), directly updates UI at a granular level.
5. [x] Extremely small runtime and bundle size (better than Vue3 and React).
6. [x] Supports two-way data binding, component development, and follows a unidirectional data flow.
7. [x] Built-in data sharing solution, easily manages shared data among components.
8. [x] Rich ecosystem support, compatible with plugins such as Vite, Rollup, Webpack, and esbuild. It can also customize third-party tools based on the underlying compilation module.
9. [x] Supports if and switch logic, as well as If, Switch, For, and other logical components.
10. [x] Supports custom renderers for cross-platform development.
11. [x] Uses JSX and TSX to describe UI, with built-in TypeScript compilation support.
12. [x] Developed using TypeScript, with highly friendly type support.

## TODO

The following peripheral tools are currently under development, and we also hope that interested developers can participate together:

1. [ ] [alins-router](https://github.com/alinsjs/alins-router): Single-page application routing solution
2. [ ] [alins-ssr](https://github.com/alinsjs/alins-ssr): Server-side rendering solution
3. [ ] [alins-ui](https://github.com/alinsjs/alins-ui): Official UI library (consider implementing ant-design or meterial-design)
3. [ ] [alins-v](https://github.com/alinsjs/alins-v): Official form validation library
4. [ ] [alins-term](https://github.com/alinsjs/alins-term): Tool for developing command line applications based on custom renderers
5. [ ] [alins-canvas](https://github.com/alinsjs/alins-canvas): Tool for developing applications with canvas based on custom renderers