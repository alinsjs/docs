<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-17 16:33:22
  * @Description: Coding something
-->
# Query Manual

This chapter briefly summarizes the core jsx attributes and syntax rules in Alins. The main purpose is to help developers quickly find how to use Alins. If you are reading this document for the first time, it is recommended to read the specific introduction chapter first to understand the detailed introduction and examples of each attribute and syntax rule.

**The list here contains almost all Alins concepts, so not everything listed here is necessary, and includes some advanced uses of Alins.**

1. [$mounted](./jsx): used to mount dom elements to specified elements
2. [$$ID](./jsx): Abbreviation of `$mounted='#ID'`
3. [Event](./jsx): The event naming is consistent with the native DOM, such as `onclick, onmousedown`. At the same time, the event value supports js expressions. At this time, you can use the $e variable to access the event object, such as `onclick={console.log($e.clientX)}`
4. [Event decorator](./jsx): `prevent, stop, capture, once, self, pure`, usage method: `onclick:stop={console.log(1)}`
5. [$ref](./jsx): Reference dom element
6. [$html](./jsx): Set innerHTML
7. [$attributes](./jsx): Use objects to set attributes in batches
8. [Fragment](./jsx): DocumentFragment can be created using both empty tags and Frag tags
9. [Single attribute class name](./class): `class:a={true}`
10. [Single attribute style](./style): `class:color='#f44'`
11. [Lifecycle](./lifecycle): $created, $appended, $mounted, $removed
12. [Data binding decorator](./binding): Convert the bound data type, such as `value:number={str}`
13. [Component price](./component): The input parameters of the component are props and children
14. [Logic block](./logic): `if, switch` syntax; map function; `If, Switch, For, Show, Async` logical components; `$show`, `$if`, `$switch` ,`$for`,`$async` attribute
15. [set syntactic sugar](./rule): used to set computed set such as: `let b=a+1;set: v=>{a=v-1;}`
16. [watch syntactic sugar](./rule): monitor data changes, such as: `watch: a, (...args)=>{console.log(args)}`
17. [Attribute abbreviation](./rule): `name={name}` is equivalent to `name:name` and is equivalent to `$name`
18. [Variable naming](./rule): The beginning of $ indicates mandatory definition of responsive data, and the beginning of _ indicates mandatory definition of static data.
19. [Annotation](./rule): `@reactive, @static, @shallow, @static-scope`, where @reactive, @static can carry parameters
20. [Tag](./rule): $: can declare responsive data, _: can declare static data, static_scope: can declare static scope
21. [State sharing](./store): `createStore` API
22. [Custom renderer](./render): `useRenderer`, `defineRenderer` API