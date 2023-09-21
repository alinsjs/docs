<!--
  * @Author: chenzhongsheng
  * @Date: 2023-09-17 16:33:22
  * @Description: Coding something
-->
# Peripheral Tools

Alins is currently in its infancy, and related tool libraries are under development. If you are interested, developers are welcome to participate:

1. [alins-router](https://github.com/alinsjs/alins-router)
2. [alins-ui](https://github.com/alinsjs/alins-ui)
3. [alins-v](https://github.com/alinsjs/alins-v)

## Next Version TODO

- [ ] life cycle optimization, supports use within components; + syntactic sugar $remove: el => {};
- [ ] computed reconstruction; dirty flag. Optimization const b = a++;
- [ ] Branch memory usage problem
- [ ] For type hint
- [ ] Async Data type annotation
- [ ] alins-router - Official routing library (as versatile as possible and can be called directly using native js)
- [ ] alins-ui - official ui library
- [ ] alins-style style tag optimization processing to improve css usability, style value type declaration (can be used with reactive library and native js)
- [ ] alins-style supports compatibility extensions
- [ ] alins-ssr - server-side rendering (as versatile as possible and can be called directly using native js)
- [ ] For supports destructuring
- [ ] For Object support
- [ ] source-map support
- [ ] Compiler code reconstruction - Compile in two steps. The first step is jsx parsing; the second step is alins reactive; supports ssr
- [ ] Runtime code refactoring - Optimize memory space usage and running time
- [ ] improve testing