/*
 * @Author: chenzhongsheng
 * @Date: 2022-11-01 07:51:40
 * @Description: Coding something
 */
window.jsboxCode = {
    lib: 'https://cdn.jsdelivr.net/npm/alins',
    lang: 'js',
    code: /* javascript */`const {
    div, $, css, style, button, hover, click, input, cls
} = Alins;

function Style () {
    const num = $(30);
    const active = $(false);

    css('.main')(
        style({
            color: '#888',
            marginLeft: $\`${num}px\`,
        }),
        ['&.active', style.fontSize(num)],
        ['.child', style.marginTop(num)]
    ).mount();

    return div(\`parent.main\`,
        cls({active}),
        hover('color: #f44'),
        input.model(num, 'number'),
        button('toggle active', click(() => active.value = !active.value)),
        div('child.child'),
    );
}

mount(comp(Style));`
};
