<!--
 * @Author: chenzhongsheng
 * @Date: 2022-10-30 02:42:04
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-12 16:14:07
-->
<template>
    <div v-show='localCode!==""' class='code-runner' ref='runner'>
        <span class='code-title'>{{title}}</span>
        <span class='code-desc'>{{result ? desc: 'Click the button on the right to run the code in jsbox'}}</span>
        <i class='ei-play code-btn' @click='jsbox' title='Open jsbox'></i>
        <i class='ei-copy code-btn' @click='copy' title='Copy code'></i>
        <i class='ei-undo code-btn' @click='run' title='Refresh'></i>
        <i class='code-btn' :class="{'ei-eye-close': showCode.visible, 'ei-eye-open': !showCode.visible}"
           @click='toggleShowCode' :title='showCode.visible?"Hide code":"Show code"'></i>
        <i v-show='result && !isEdit' class='ei-code code-btn' @click='edit' title='Turn on Editing'></i>
    </div>
</template>

<script>
    import initJSBox, {showCode} from '../../src/jsbox';
    import {copy} from '../../src/util';
    let jsbox = null;
    export default {
        props: {
            title: {
                type: String,
                default: 'Demo program'
            },
            desc: {
                type: String,
                default: 'The button on the right can turn on editing | run online'
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
                showCode: showCode,
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
            console.log('mounted');
        },
        watch: {
            'showCode.visible' () {
                this.initCodeVisible();
            }
        },
        methods: {
            initCodeVisible () {
                this.next.style.display = this.showCode.visible ? 'block' : 'none';
            },
            toggleShowCode () {
                this.showCode.visible = !this.showCode.visible;
                this.initCodeVisible();
            },
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
                this.$toast('Refresh Success');
            },
            edit () {
                const next = this.next;
                const pre = next.querySelector('pre');
                pre.classList.add('edited');
                const code = pre.children[0];
                code.setAttribute('contenteditable', 'true');
                code.setAttribute('style', '-webkit-user-modify: read-write-plaintext-only;');
                code.setAttribute('spellcheck', 'false');
                code.textContent = code.innerText;
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
                    const run = document.createElement('i');
                    run.className = 'ei-undo code-btn in-result';
                    run.title = 'Refresh';
                    run.onclick = () => {this.run();};
                    div.appendChild(run);
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
                this.$toast(copy(this.next.querySelector('code').innerText) ? 'Copy Success' : 'Copy Fail');
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

<style lang="less">
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
    &.in-result{
        margin: 0;
        font-size: 20px;
    }
}
</style>
