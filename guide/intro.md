<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-08 13:17:31
  * @Description: Coding something
-->
# Introduction

## What are Alins?

Alins is the abbreviation of All-in-js. Alins is an extremely pure, simple and elegant Web UI framework. Adhering to the development philosophy of 0-API and Less is More, it aims to help developers get rid of the complicated API calling dilemma of UI framework and develop high-performance responsive web applications in the most intuitive, pure and closest to vanillajs development method. At the same time, it has a very small packaging volume.

You only need to understand the writing rules of jsx (similar to html syntax) and you can develop alins web applications with almost no obstacles. Here is a basic Counter example:

<CodeBox />

```jsx
let count = 1;
<button onclick={count++} $mount='#App'>
     count is {count}
</button>;
```

The above example demonstrates two core features of Alins:

- Jsx: Alins uses jsx (a js syntax extension similar to html syntax, used to describe UI) to describe the UI, and has customized some special attributes and extended jsx syntax.

- Responsiveness: Unlike the responsive features of other frameworks, Alins does not need to introduce any responsive APIs. The Alins compiler will track and mark responsive data during the compilation phase, and cooperate with the responsive design at runtime to enable the most fine-grained updates to Alins applications. The responsiveness of UI.

Based on Alins' powerful compiler functions and runtime responsive design, developers can develop responsive applications using only the purest jsx, without introducing any responsive APIs or any unnecessary syntax that increases mental burden. And it has extremely high performance and extremely small packaging size.

In addition, Alins does not use vdom. In addition, thanks to the fine-grained responsive binding, alins can reference the dom elements of the responsive data in the most fine-grained changes at the smallest cost.

In the above example, if you don't like the `$mount` attribute, you can also use appendChild to complete the mounting of the node, but you will need to write a little more code:

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
The remainder of this document assumes you have basic familiarity with HTML, CSS, and JavaScript. If you're completely new to front-end development, it's best not to start with a framework - it's better to come back here once you've mastered the basics. You can test your JavaScript knowledge through this [JavaScript Overview](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_overview). Previous experience with other frameworks is helpful but not required.
:::