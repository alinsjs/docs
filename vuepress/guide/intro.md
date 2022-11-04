---
sidebarDepth: 0  // 吐槽：这里设置0无效！只能设置1或2！
---

# 简介

--------------------

<div style="margin: 10px">
    <a href="https://www.github.com/alinsjs/alins/stargazers" target="_black">
        <img src="https://img.shields.io/github/stars/alinsjs/alins?logo=github" alt="stars" />
    </a>
    <a href="https://www.github.com/alinsjs/alins/network/members" target="_black">
        <img src="https://img.shields.io/github/forks/alinsjs/alins?logo=github" alt="forks" />
    </a>
    <a href="https://www.npmjs.com/package/alins" target="_black">
        <img src="https://img.shields.io/npm/v/alins?logo=npm" alt="version" />
    </a>
    <a href="https://www.npmjs.com/package/alins" target="_black">
        <img src="https://img.shields.io/npm/dm/alins?color=%23ffca28&logo=npm" alt="downloads" />
    </a>
    <a href="https://www.jsdelivr.com/package/npm/alins" target="_black">
        <img src="https://data.jsdelivr.com/v1/package/npm/alins/badge" alt="jsdelivr" />
    </a>
</div>

<div style="margin: 10px">
    <a href="https://github.com/theajack" target="_black">
        <img src="https://img.shields.io/badge/Author-%20theajack%20-7289da.svg?&logo=github" alt="author" />
    </a>
    <a href="https://www.github.com/alinsjs/alins/blob/master/LICENSE" target="_black">
        <img src="https://img.shields.io/github/license/alinsjs/alins?color=%232DCE89&logo=github" alt="license" />
    </a>
    <a href="https://cdn.jsdelivr.net/npm/alins"><img src="https://img.shields.io/bundlephobia/minzip/alins.svg" alt="Size"></a>
    <a href="https://github.com/alinsjs/alins/search?l=javascript"><img src="https://img.shields.io/github/languages/top/alinsjs/alins.svg" alt="TopLang"></a>
    <a href="https://github.com/alinsjs/alins/issues"><img src="https://img.shields.io/github/issues-closed/alinsjs/alins.svg" alt="issue"></a>
    <a href="https://www.github.com/alinsjs/alins"><img src="https://img.shields.io/librariesio/dependent-repos/npm/alins.svg" alt="Dependent"></a>
</div>

### Samples

<code-btn type='text' text='Counter' url='@count'/> | 
<code-btn type='text' text='Components & Model' url='@model'/> |
<code-btn type='text' text='Todo List' url='@todo-list'/> |
<code-btn type='text' text='CSS-In-JS' url='@style'/>

## 1. 前言

Alins 是一个 All-in-js web ui 框架，支持单向数据流+双向绑定，无虚拟dom

在Alins应用中，状态变更会被监听，然后直接且精准的修改到dom/text节点、类名、属性。

在复杂状态被替换时，Alins可以复用dom节点，以减少dom销毁和创建的性能开销。

Alins 一切皆函数，让您可以以函数调用的方式拼接Web开发中的一切事物。所以 Alins 可以在任何浏览器环境中直接运行，无需编译。

搭配 Alins-style 的 Css-In-JS方案，可以实现任何形式样式的响应式变更，包含内联样式、选择器样式、伪类、伪元素。并且 Alins-style 可以独立于 Alins 运行。

[反馈问题](https://github.com/alins/issues/new) 

## 2. Features

1. No vdom, the listening data is accurately modified to dom/textNode, and the dom node is reused
2. Alins-style CSS-in-JS scheme, atomic properties/building block combinations/style response changes
3. Good componentization support
4. Support for, if, show, switch, model controller
5. Support computed and watch
6. One-way data flow + two-way binding
7. Good TS support

## 3. Packages

|     名称     | 描述 |   功能   | 支持版本 |
| :----------: | :------------------------------: | :--------------------: | :--------------------: |
|    alins    | alins主库 |  用于创建web应用程序   | 0.0.1 |
|    alins-style    | css-in-js方案 |  不依赖于alins可以独立于alins使用  | 0.0.1 |

除此之外 Alins还包含两个工具库，一般不需要开发者引入

1. alins-reactive: alins 和 alins-style 共同依赖的响应式库
2. alins-utils: 其他三个包依赖的工具库

<div>
    <star></star>
</div>


