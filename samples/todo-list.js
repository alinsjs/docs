/*
 * @Author: chenzhongsheng
 * @Date: 2022-11-01 07:51:40
 * @Description: Alins Counter Sample
 */
window.jsboxCode = {
    lib: 'https://cdn.jsdelivr.net/npm/alins-style',
    lang: 'js',
    wrapCode: true,
    needUI: true,
    hideLog: true,
    useDefaultUI: true,
    clearWhenReRun: true,
    code: /* javascript */`const {comp, button, div, input, click, $, style, value} = AlinsStyle;

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
                $\`\${() => index.value + 1}:\${item.content}\`,
                button('delete', click(removeItem).args(index)),
                button(
                    $\`\${() => item.done.value ? 'undo' : 'done'}\`,
                    click(finishItem).args(item)
                ),
            ]),
        ),
        button('clear', click(clear)),
    ];
}
comp(todoList).mount('#jx-app');`
};