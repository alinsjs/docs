<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-07 08:09:07
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 14:06:32
-->
## 1. Counter

<code-runner title='计数器'/>

```js
import { button, comp, click, $, mount } from 'alins';

function Count () {
    const count = $(0);
    return button(
        click(() => {count.value++;}),
        $`Count is ${count}`
    );
}

comp(Count).mount();
```

## 2. Component and Model

<code-runner title='组件'/>

```js
import { button, comp, prop, click, $, input, span, br } from 'alins';

function Count () {
    const count = $(0);
    return [
        span('input count'),
        input.model(count, 'number'),
        br(),
        comp(CountProps)(prop({value: count})),
        button('add', click(() => {count.value++;})),
    ];
};

function CountProps ({props}) {
    return span($`Count is ${props.value}`);
}

comp(Count).mount()
```

## 3. Todo-List

<code-runner title='待办'/>

```js
import {comp, button, div, input, click, $, value} from 'alins';
import {style} from 'alins-style';

function todoList () {
    const edit = $('');
    const list = $([]);
    const addItem = () => {
        list.push({content: edit.value, done: false});
        edit.value = '';
    };
    const removeItem = (index) => { list.splice(index.value, 1); };
    const finishItem = (item) => { item.done = !item.done.value; };
    const clear = () => { list[value] = []; };

    const itemStyle = (item) => {
        return style.textDecoration(() => item.done.value ? 'line-through' : 'none')
            .color(() => item.done.value ? '#888' : '#fff');
    }

    return [
        input.model(edit),
        button('submit', click(addItem)),
        div('.todo-list',
            div.for(list)((item, index) => [
                itemStyle(item),
                $`${() => index.value + 1}:${item.content}`,
                button('delete', click(removeItem).args(index)),
                button(
                    $`${() => item.done.value ? 'undo' : 'done'}`,
                    click(finishItem).args(item)
                ),
            ]),
        ),
        button('clear', click(clear)),
    ];
}
comp(todoList).mount();
```

## 4. CSS-In-JS

<code-runner title='CSS-In-JS'/>

```js
import { div, $ , button, hover, click, input, cls, comp } from 'alins';
import { css, style } from 'alins-style';
function Style () {
    const num = $(30);
    const active = $(false);

    css('.main')(
        style({
            color: '#888',
            marginLeft: num,
        }),
        ['&.active', style.fontSize(num)],
        ['.child', style.marginTop(num)]
    ).mount();

    return div('parent.main',
        cls({active}),
        hover('color: #f44'),
        input.model(num, 'number'),
        button('toggle active', click(() => active.value = !active.value)),
        div('child.child'),
    );
}

comp(Style).mount();
```