import{_ as e,E as t,o as p,c,J as a,k as l,a as o,S as n}from"./chunks/framework.cd7b584e.js";const P=JSON.parse('{"title":"JSX Extension","description":"","frontmatter":{},"headers":[],"relativePath":"guide/jsx.md","filePath":"guide/jsx.md"}'),r={name:"guide/jsx.md"},D=l("h1",{id:"jsx-extension",tabindex:"-1"},[o("JSX Extension "),l("a",{class:"header-anchor",href:"#jsx-extension","aria-label":'Permalink to "JSX Extension"'},"​")],-1),F=l("p",null,"Alins uses JSX to describe the UI, but makes some extensions based on JSX to enable it to achieve more powerful capabilities. This chapter is about introducing some extensions to JSX in Alins.",-1),y=l("h2",{id:"_1-jsx-return-value",tabindex:"-1"},[o("1.JSX return value "),l("a",{class:"header-anchor",href:"#_1-jsx-return-value","aria-label":'Permalink to "1.JSX return value"'},"​")],-1),i=l("p",null,"Unlike JSX in React, which returns a React Component, in Alins, the JSX rendering function returns a native DOM element or DocumentFragment element, so we can use the following statement to add an element to the App element:",-1),C=n(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello World!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>It can be seen from the compiled product that the JSX object is converted into a <code>_$ce</code> function for execution, and the return result is a DOM element. JSX allows us to write UI in JS just like writing HTML code.</p><h3 id="return-documentfragment" tabindex="-1">Return DocumentFragment <a class="header-anchor" href="#return-documentfragment" aria-label="Permalink to &quot;Return DocumentFragment&quot;">​</a></h3><p>By using an empty JSX tag, a DocumentFragment object can be returned</p>`,4),A=n(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> frag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Div 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Div 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Frag is a </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> frag</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(frag)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="frag-tags" tabindex="-1">Frag Tags <a class="header-anchor" href="#frag-tags" aria-label="Permalink to &quot;Frag Tags&quot;">​</a></h3><p>You can also return a DocumentFragment through the Frag tag. The advantage is that you can use Frag to mount properties. Empty tags cannot</p>`,3),d=n(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> frag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Frag</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Div 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Div 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Frag</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Frag is a </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> frag</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(frag)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Note: When the Frag tag mounts attributes, all attributes introduced in subsequent chapters will only act on the first child element, and the life cycle will only act on the first child node.</p><h2 id="_2-mount-attribute" tabindex="-1">2.$mount attribute <a class="header-anchor" href="#_2-mount-attribute" aria-label="Permalink to &quot;2.$mount attribute&quot;">​</a></h2><p>The <code>$mount</code> attribute is used to mount the DOM element generated by the JSX object to the target node. It can be understood as syntactic sugar for the .appendChild method. For example, the example in the first section is equivalent to the following writing method using the $mount attribute.</p>`,4),u=n('<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello World!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>The value of the $mount attribute is an HTML selector used to select DOM elements. It has the same effect as appendChild, but the code will be much simpler and the writing burden will be reduced a lot.</p><p>Of course, the <code>$mount</code> attribute value can also be another JSX object, as follows:</p>',3),h=n(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Parent</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Child</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Note: Empty JSX tags do not support the $mount attribute</p><h2 id="_3-jsx-expression" tabindex="-1">3.JSX expression <a class="header-anchor" href="#_3-jsx-expression" aria-label="Permalink to &quot;3.JSX expression&quot;">​</a></h2><p>JSX expression is JS code wrapped in curly braces, which is used to embed JS logic into the UI, providing the UI with extremely high flexibility and scalability.</p><p>Here is an example of inserting html attributes and html content using JSX expressions</p>`,5),_=n('<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Hello </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Hello </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h2 id="_4-ref-attribute" tabindex="-1">4.$ref attribute <a class="header-anchor" href="#_4-ref-attribute" aria-label="Permalink to &quot;4.$ref attribute&quot;">​</a></h2><p>The <code>$ref</code> attribute is used to reference the DOM element returned by the JSX object. Of course, you can also directly use the value of the JSX object as the DOM element, but in some UIs with deeper nesting levels, it will not look so elegant.</p><p>$ref is used as follows:</p>',4),g=n(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     Parent</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">         </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(ref</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">     &gt;</span><span style="color:#A6ACCD;">Click Me!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Note:</p><ol><li>If you use it immediately after the ref declaration, you will get an undefined. The initialization time of the ref reference is after the created life cycle function. We will introduce the life cycle in subsequent chapters.</li><li>The onclick attribute means adding an event, which can be a js expression or function. It will be introduced in detail in the next chapter.</li></ol><h2 id="_5-html-attribute" tabindex="-1">5.$html attribute <a class="header-anchor" href="#_5-html-attribute" aria-label="Permalink to &quot;5.$html attribute&quot;">​</a></h2><p>Using the <code>$html</code> attribute, you can set the html style of a DOM element. <strong>It is worth noting that after setting $html, all the child nodes of the DOM element will become invalid.</strong></p>`,5),m=n(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> html </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">This is &lt;h1&gt;h1 title&lt;/h1&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$html</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Internal elements will be invalid</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h2 id="_6-attributes-attribute" tabindex="-1">6.$attributes attribute <a class="header-anchor" href="#_6-attributes-attribute" aria-label="Permalink to &quot;6.$attributes attribute&quot;">​</a></h2><p>The <code>$attributes</code> attribute is used to aggregate HTML attributes. You can use objects to set attributes in batches, as shown below</p>`,3),b=n(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TestName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TestValue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">logAttributes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">attrs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">attributes</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">attrs</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#C792EA;">inner-attr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#C792EA;">$attributes</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">logAttributes</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Click Me!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_7-dynamic-node" tabindex="-1">7. Dynamic node <a class="header-anchor" href="#_7-dynamic-node" aria-label="Permalink to &quot;7. Dynamic node&quot;">​</a></h2><p>Since the essence of Alins is to directly operate Dom, creating dynamic nodes is also very intuitive. You can just directly mount JSX elements. Here is an example.</p>`,3),f=n(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> parent</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">addChild</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Dynamic Node </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">_id</span><span style="color:#89DDFF;">++}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// Or use $mount={e.target.parentElement}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">border: 1px solid #555</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">addChild</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Add Child</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>Note: The _id variable here uses an underscore prefix to identify a static data, otherwise id++ will be identified as calculated data and cause responsive changes</strong></p>`,2);function T(v,E,x,S,$,j){const s=t("CodeBox");return p(),c("div",null,[D,F,y,i,a(s),C,a(s),A,a(s),d,a(s),u,a(s),h,a(s),_,a(s),g,a(s),m,a(s),b,a(s),f])}const k=e(r,[["render",T]]);export{P as __pageData,k as default};