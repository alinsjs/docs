<!--
 * @Author: chenzhongsheng
 * @Date: 2022-10-30 02:42:04
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-08 22:11:22
-->
<template>
    <div v-show='localCode!==""' class='code-runner' ref='runner'>
        <span class='code-title'>{{title}}</span>
        <span class='code-desc'>{{result ? desc: '点击右侧按钮在jsbox中运行该代码'}}</span>
        <i class='ei-play code-btn' @click='jsbox' title='打开jsbox'></i>
        <i class='ei-copy code-btn' @click='copy' title='复制代码'></i>
        <i v-if='isEdit' class='ei-undo code-btn' @click='run' title='重新运行'></i>
        <i v-show='result' v-else class='ei-code code-btn' @click='edit' title='开启编辑'></i>
    </div>
</template>

<script>
    import initJSBox from '../../src/jsbox';
    import {copy} from '../../src/util';
    let jsbox = null;
    export default {
        props: {
            title: {
                type: String,
                default: '演示程序'
            },
            desc: {
                type: String,
                default: '右侧按钮可以开启编辑|在线运行'
            },
            result: {
                type: Boolean,
                default: true
            },
        },
        // computed: {
        //     editClass () {
        //         return this.isEdit ? 'ei-undo' : 'ed-edit';
        //     }
        // },
        data () {
            return {
                isEdit: false,
                localCode: '',
                localLang: '',
                env: 'alins',
                next: null,
            };
        },
        mounted () {
            this.next = this.getNext();
            jsbox = initJSBox();
            this.initCode();
        },
        methods: {
            getNext () {
                const el = this.$refs.runner;
                if (!el) return null;
                const next = el.nextElementSibling;
                if (!next) return null;
                return next;
            },
            initCode () {
                const next = this.next;
                if (!next) return;
                if (next.className.indexOf('language-js') !== -1) {
                    this.localLang = 'javascript';
                } else if (next.className.indexOf('language-html') !== -1) {
                    this.localLang = 'html';
                }

                this.runBase(next);
            },
            run () {
                const next = this.next;
                if (!next) return;
                if (this.codeResultEl) this.codeResultEl.innerHTML = '';
                this.runBase(next);
                this.$toast('重新运行成功');
            },
            edit () {
                const next = this.next;
                const pre = next.querySelector('pre');
                pre.classList.add('edited');
                const code = pre.children[0];
                code.setAttribute('contenteditable', 'true');
                code.setAttribute('spellcheck', 'false');
                code.innerText = code.innerText;
                this.isEdit = true;
            },
            runBase (next) {
                if (this.localLang) {
                    this.localCode = this.transformCode(next.querySelector('code').innerText);
                }
                this.initResult(next);
            },
            initResult (next) {
                if (!this.result) return;

                if (!this.codeResultEl) {
                    const div = document.createElement('div');
                    next.appendChild(div);
                    div.className = 'code-result';
                    this.codeResultEl = div;
                }

                const code = this.localCode.replace(/"#jx\-app"/g, '__DOM__')
                    .replace(/document\.getElementById\('jx\-app'\)/g, '__DOM__');
                try {
                    new Function('__DOM__', code)(this.codeResultEl);
                } catch (err) {
                    this.codeResultEl.innerHTML = `<span style="color: #f55">${err.toString()}</span>`;
                }
            },
            jsbox () {
                jsbox.code(this.localCode, this.localLang, this.env);
            },
            copy () {
                this.$toast(copy(this.next.querySelector('code').innerText) ? '复制成功' : '复制失败');
            },
            transformCode (code) {
                this.env = /from *['"]alins\-style['"]/.test(code) ? 'alins-style' : 'alins';
                return code.replace(/\.mount\(\)/g, '.mount("#jx-app")')
                    .replace(/import ({.*?}) from '(.*?)'/g, (str, $1, $2) => {
                        const comment = ($2 === 'alins' && this.env !== 'alins') ? '/* cdn 引用时只需要引入alins-style即可*/\n' : '';
                        return `${comment}const ${$1} = ${this.env === 'alins' ? 'Alins' : 'AlinsStyle'}`;
                    });
            }
        }
    };
</script>

<style lang="less" scoped>
.code-runner{
    margin-top: 15px;
    .code-title{
        font-weight: bold;
        margin-right: 10px;
    }
    .code-desc{
        font-size: 0.8rem;
        color: #aaa;
    }
    .code-btn{
        float: right;
        color: #ec5c2f;
        margin-left: 10px;
        cursor: pointer;
        transition: transform .3s ease;
        margin-top: 5px;
        &:hover{
            transform: scale(1.2);
        }
    }
}
</style>
