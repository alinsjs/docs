

/*
 * @Author: chenzhongsheng
 * @Date: 2022-11-01 07:51:40
 * @Description: Alins Counter Sample
 */
window.jsboxCode = {
    lib: 'https://cdn.jsdelivr.net/npm/alins',
    lang: 'js',
    wrapCode: true,
    needUI: true,
    hideLog: true,
    useDefaultUI: true,
    clearWhenReRun: true,
    code: /* javascript */`const {
    button, comp, prop, click, $, input, span, dom
} = Alins;

function Count () {
    const count = $(0);
    return [
        span('input count'),
        input.model(count, 'number'),
        dom('br')(),
        comp(CountProps)(prop({value: count})),
        button('add', click(() => {count.value++;})),
    ];
};

function CountProps ({props}) {
    return span($\`Count is \${props.value}\`);
}

comp(Count).mount('#jx-app')`
};

