<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# Peripheral tools

Alins is currently in its infancy and the library of tools is under development, if you are interested, developers are welcome to participate:

There are currently the following plans:

1. [alins-router](https://github.com/alinsjs/alins-router): Routing library
2. [alins-v](https://github.com/alinsjs/alins-v): Form validation library
3. [alins-ui](https://github.com/alinsjs/alins-ui): UI library (based on material design or antd)
4. [alins-style](https://github.com/alinsjs/alins-style): The complete css-in-js scheme
5. [alins-ssr](https://github.com/alinsjs/alins-ssr): Server-side rendering
6. [alins-html](https://github.com/alinsjs/alins-html): Template compilation scheme support, based on HTML files and syntax, closest to HTML semantics
7. [alins-vsc](https://github.com/alinsjs/alins-vsc): The Alins vscode plugin supports some syntax highlighting and IntelliSense that JSX does not support, such as $item and custom items in the For component. alins-html IntelliSense
8. [alins-animate](https://github.com/alinsjs/alins-animate): Animation support
9. [alins-use](https://github.com/alinsjs/alins-use): A collection of tools
10. [alins-term](https://github.com/alinsjs/alins-term): A custom nodejs renderer implements a terminal drawing UI
11. [alins-canvas](https://github.com/alinsjs/alins-term): Custom canvas renderer implements canvas-based drawing UI
12. [alins-native](https://github.com/alinsjs/alins-native): Implement a cross-end scheme based on alins

## Next Version TODO

- [ ] alins-router - official routing library (as generic as possible, able to use native js calls directly)
- [ ] alins-ui - Official UI library
- [ ] alins-style style tag optimization to improve CSS usability, style value type declarations (can be used with the reactive library with native js)
- [ ] alins-style supports compatibility extensions
- [ ] alins-ssr - server-side rendering (as generic as possible, able to use native js calls directly)
- [ ] Add @reactive for variable declarations and function parameters, add @static comments
- [ ] For supports deconstruction
- [ ] For Object support
- [ ] source-map support
- [ ] Compiler code refactoring - Compile in two steps The first step is JSX parsing; The second part carries out alins reactivation; SSR is supported
- [ ] Runtime code refactoring - Optimized memory footprint and run time
- [ ] Perfect test
- [ ] Branch memory usage issues
- [ ] For type hint
- [ ] Async Data type annotation
- [ ] alins-vsc
- [ ] Move DOM elements when sorting large lists to optimize performance
- [ ] Template syntax supports HTML files as the template language
- [ ] computed refactoring; dirty tag. Optimize const b = a++; logic