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
    code: /* javascript */`const {
    div, $ , button, hover, click, input, cls, css, style, comp
} = AlinsStyle;
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

comp(Style).mount('#jx-app');`
};

