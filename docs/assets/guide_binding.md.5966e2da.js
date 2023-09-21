import{_ as l,E as o,o as p,c as e,J as n,S as s}from"./chunks/framework.cd7b584e.js";const T=JSON.parse('{"title":"Data Binding","description":"","frontmatter":{},"headers":[],"relativePath":"guide/binding.md","filePath":"guide/binding.md"}'),t={name:"guide/binding.md"},c=s('<h1 id="data-binding" tabindex="-1">Data Binding <a class="header-anchor" href="#data-binding" aria-label="Permalink to &quot;Data Binding&quot;">​</a></h1><p>All objects that reference responsive data will have responsive capabilities, such as DOM elements, attributes, styles, etc. All responsive elements will trigger updates at the most granular level. For example, changes in text content will only update the bound TextNode. Responsive styles will only update a single style, etc.</p><p>We have introduced the basic usage of reactive data binding in more detail in the above two chapters.</p><p>This chapter mainly introduces two-way data binding.</p><h2 id="_1-value-attribute" tabindex="-1">1. value attribute <a class="header-anchor" href="#_1-value-attribute" aria-label="Permalink to &quot;1. value attribute&quot;">​</a></h2><p>For input type DOM elements using the value attribute, if the value attribute value is a variable, then the variable will be directly marked as responsive data and bidirectionally bound to the input element. When the variable is updated, the DOM element will be updated. When the DOM element input changes, the value of the variable will also be modified.</p><p>Here are some examples</p><h3 id="_1-1-input-and-textarea" tabindex="-1">1.1 input and textarea <a class="header-anchor" href="#_1-1-input-and-textarea" aria-label="Permalink to &quot;1.1 input and textarea&quot;">​</a></h3>',8),r=s(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">} /&gt;&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}&gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Content = &quot;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">&quot;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="_1-2-number-and-range" tabindex="-1">1.2. number and range <a class="header-anchor" href="#_1-2-number-and-range" aria-label="Permalink to &quot;1.2. number and range&quot;">​</a></h3><p>When the variable is of numeric type, Alins will automatically set the two-way binding mode to numeric mode, that is, it will subsequently convert the value of the input element into a numeric type and assign it to the bound variable.</p>`,3),D=s(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">range</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">range</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> a + b = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="_1-3-select" tabindex="-1">1.3. select <a class="header-anchor" href="#_1-3-select" aria-label="Permalink to &quot;1.3. select&quot;">​</a></h3>`,2),F=s(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> selected </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Apple</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">selected</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Apple</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Banana</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Orange</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Selected Fruit: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">selected</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="bool-type" tabindex="-1">bool type <a class="header-anchor" href="#bool-type" aria-label="Permalink to &quot;bool type&quot;">​</a></h4><p>Like the automatic conversion of numeric types introduced in 1.3, the two-way binding of Boolean type variables will also be automatically converted.</p>`,3),y=s(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> selected </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">selected</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">true</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">false</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">True of False: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">selected</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">; type = </span><span style="color:#89DDFF;">{typeof</span><span style="color:#A6ACCD;"> selected</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_2-checked-attribute" tabindex="-1">2. checked attribute <a class="header-anchor" href="#_2-checked-attribute" aria-label="Permalink to &quot;2. checked attribute&quot;">​</a></h2><p>For input elements of checkbox type, Alins will use the <code>checked</code> attribute as the binding target. When the value of the checked attribute is a variable, the change will be marked as a responsive variable and bidirectionally bound to the input element.</p>`,3),i=s(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> checked </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checkbox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">checked</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> checked = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">checked</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">; type = </span><span style="color:#89DDFF;">{typeof</span><span style="color:#A6ACCD;"> checked</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_3-type-decorator" tabindex="-1">3. Type decorator <a class="header-anchor" href="#_3-type-decorator" aria-label="Permalink to &quot;3. Type decorator&quot;">​</a></h2><p>As introduced in 1.2 and 1.3, when the variable type is a numeric type or a Boolean type, two-way binding will automatically convert the data type.</p><p>So what if the initial type of the variable is not the expected data type? At this time we can use type decorators to force data type conversion.</p><h3 id="_3-1-number-decorator" tabindex="-1">3.1 number decorator <a class="header-anchor" href="#_3-1-number-decorator" aria-label="Permalink to &quot;3.1 number decorator&quot;">​</a></h3>`,5),C=s(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">number</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> a + b = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="_3-2-boolean-decorator" tabindex="-1">3.2 boolean decorator <a class="header-anchor" href="#_3-2-boolean-decorator" aria-label="Permalink to &quot;3.2 boolean decorator&quot;">​</a></h3>`,2),A=s(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> selected </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">boolean</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">selected</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">true</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">false</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">True of False: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">selected</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">; type = </span><span style="color:#89DDFF;">{typeof</span><span style="color:#A6ACCD;"> selected</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Note: There is actually a string decorator, but since the default mode is string mode, you don’t need to pay attention to this decorator.</p>`,2);function d(u,h,_,g,b,v){const a=o("CodeBox");return p(),e("div",null,[c,n(a),r,n(a),D,n(a),F,n(a),y,n(a),i,n(a),C,n(a),A])}const E=l(t,[["render",d]]);export{T as __pageData,E as default};
