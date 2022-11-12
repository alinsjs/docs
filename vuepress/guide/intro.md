---
sidebarDepth: 0 // Setting 0 here is invalid! Only 1 or 2 can be set!
---

# Introduction

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

<!-- ### Samples

<code-btn type='text' text='Counter' url='@count'/> | 
<code-btn type='text' text='Components & Model' url='@model'/> |
<code-btn type='text' text='Todo List' url='@todo-list'/> |
<code-btn type='text' text='CSS-In-JS' url='@style'/> -->

## 1. Preface

Alins is an all-in-js web UI framework that supports one-way data flow + two-way binding, no virtual dom

In Alins applications, state changes are listened for and then directly and precisely modified to dom/text nodes, class names, and attributes.

When complex states are replaced, Alins can reuse dom nodes to reduce the performance overhead of dom destruction and creation.

Alins Everything is a function, allowing you to stitch everything in web development together in the form of function calls. So Alins can be run directly in any browser environment without compiling.

With Alins-style's Css-In-JS scheme, you can realize responsive changes to any formal style, including inline styles, selector styles, pseudo-classes, pseudo-elements. And Alins-style can run independently of Alins.

[Feedback Question] (https://github.com/alins/issues/new) 

## 2. Features

1. No vdom, the listening data is accurately modified to dom/textNode, and the dom node is reused
2. Alins-style CSS-in-JS scheme, atomic properties/building block combinations/style response changes
3. Good componentization support
4. Support for, if, show, switch, model controller
5. Support computed and watch
6. One-way data flow + two-way binding
7. Good TS support

## 3. Package structure

|     Name | Description |   Features | Version supported |
| :----------: | :------------------------------: | :--------------------: | :--------------------: |
|    alins    | Alins main library |  Used to create web application | 0.0.1 |
|    alins-style    | CSS-in-JS schemes |  Not dependent on alins can be used independently of | 0.0.1 |

In addition, Alins also contains two tool libraries, which generally do not require developers to introduce them

1. alins-reactive: A reactive library that alins and alins-style co-depend
2. alins-utils: The repository that the other three packages depend on

<div>
    <star></star>
</div>

