import{_ as l,E as t,o as p,c as r,J as a,k as s,a as e,S as o}from"./chunks/framework.cd7b584e.js";const x=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"guide/intro.md","filePath":"guide/intro.md"}'),c={name:"guide/intro.md"},i=s("h1",{id:"introduction",tabindex:"-1"},[e("Introduction "),s("a",{class:"header-anchor",href:"#introduction","aria-label":'Permalink to "Introduction"'},"​")],-1),y=s("h2",{id:"what-are-alins",tabindex:"-1"},[e("What are Alins? "),s("a",{class:"header-anchor",href:"#what-are-alins","aria-label":'Permalink to "What are Alins?"'},"​")],-1),D=s("p",null,"Alins is the abbreviation of All-in-js. Alins is an extremely pure, simple and elegant Web UI framework. Adhering to the development philosophy of 0-API and Less is More, it aims to help developers get rid of the complicated API calling dilemma of UI framework and develop high-performance responsive web applications in the most intuitive, pure and closest to vanillajs development method. At the same time, it has a very small packaging volume.",-1),d=s("p",null,"You only need to understand the writing rules of jsx (similar to html syntax) and you can develop alins web applications with almost no obstacles. Here is a basic Counter example:",-1),A=o(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++} </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     count is </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><p>The above example demonstrates two core features of Alins:</p><ul><li><p>Jsx: Alins uses jsx (a js syntax extension similar to html syntax, used to describe UI) to describe the UI, and has customized some special attributes and extended jsx syntax.</p></li><li><p>Responsiveness: Unlike the responsive features of other frameworks, Alins does not need to introduce any responsive APIs. The Alins compiler will track and mark responsive data during the compilation phase, and cooperate with the responsive design at runtime to enable the most fine-grained updates to Alins applications. The responsiveness of UI.</p></li></ul><p>Based on Alins&#39; powerful compiler functions and runtime responsive design, developers can develop responsive applications using only the purest jsx, without introducing any responsive APIs or any unnecessary syntax that increases mental burden. And it has extremely high performance and extremely small packaging size.</p><p>In addition, Alins does not use vdom. In addition, thanks to the fine-grained responsive binding, alins can reference the dom elements of the responsive data in the most fine-grained changes at the smallest cost.</p><h2 id="_2-pure-js-and-jsx" tabindex="-1">2. Pure JS and JSX <a class="header-anchor" href="#_2-pure-js-and-jsx" aria-label="Permalink to &quot;2. Pure JS and JSX&quot;">​</a></h2><p>In the above example, if you don&#39;t like the <code>$mount</code> and <code>{count ++}</code> properties, you can also use appendChild to complete the mounting of the node and use the function as the value of the event, but you will write a little more code:</p>`,7),F=o(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       count is </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_3-run-directly-without-compilation" tabindex="-1">3. Run directly without compilation <a class="header-anchor" href="#_3-run-directly-without-compilation" aria-label="Permalink to &quot;3. Run directly without compilation&quot;">​</a></h2><p>Alins ecology provides <a href="./../ecosystem/standalone.html">alins-standalone</a> to directly use the core runtime functions of Alins in the browser environment. Through some API calls, complete Alins application functions can be realized, but jsx cannot be used. grammar.</p><p>Unlike Alins <a href="./../ecosystem/web-compiler.html">Web Compiler</a>, alins-standalone can be used directly in production environments,</p>`,4),C=o(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computed</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Dom</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">join</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alins-standalone</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> countAdd1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">button</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">$mount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#82AAFF;">onclick</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">++,</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">count is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">; countAdd1 is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">countAdd1</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Preliminary knowledge: The remainder of this document assumes you have basic familiarity with HTML, CSS, and JavaScript. If you&#39;re completely new to front-end development, it&#39;s best not to start with a framework - it&#39;s better to come back here once you&#39;ve mastered the basics. You can test your JavaScript knowledge through this <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_overview" target="_blank" rel="noreferrer">JavaScript Overview</a>. Previous experience with other frameworks is helpful but not required.</p></div>`,2);function u(h,m,_,f,v,g){const n=t("CodeBox");return p(),r("div",null,[i,y,D,d,a(n),A,a(n),F,a(n,{iframe:!0,height:60,html:!0,standalone:!0}),C])}const k=l(c,[["render",u]]);export{x as __pageData,k as default};
