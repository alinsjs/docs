<!--
 * @Author: chenzhongsheng
 * @Date: 2022-10-30 02:42:04
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-05 12:11:07
-->
<template>
    <div v-show='localCode!==""' class='code-runner' ref='runner'>
        <span class='code-title'>{{title}}</span>
        <span class='code-desc'>{{desc}}</span>
        <i class='ei-play code-btn' @click='run' title='在线运行'></i>
        <i class='ei-copy code-btn' @click='copy' title='复制代码'></i>
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
                default: '点击右侧按钮可以自行修改'
            },
            result: {
                type: Boolean,
                default: true
            },
        },
        data () {
            return {
                localCode: '',
                localLang: '',
                env: 'alins'
            };
        },
        mounted () {
            jsbox = initJSBox();
            this.initCode();
        },
        methods: {
            initCode () {
                const el = this.$refs.runner;
                if (!el) return;
                const next = el.nextElementSibling;
                if (!next) return;

                if (next.className.indexOf('language-js') !== -1) {
                    this.localLang = 'javascript';
                } else if (next.className.indexOf('language-html') !== -1) {
                    this.localLang = 'html';
                }

                if (this.localLang) {
                    this.localCode = this.transformCode(next.innerText);
                }
                this.initResult(next);

            },
            initResult (next) {
                if (!this.result) return;

                const div = document.createElement('div');
                next.appendChild(div);
                div.className = 'code-result';

                const code = this.localCode.replace(/"#jx\-app"/g, 'dom')
                    .replace(/document\.getElementById\('jx\-app'\)/g, 'dom');

                new Function('dom', code)(div);
            },
            run () {
                jsbox.code(this.localCode, this.localLang, this.env);
            },
            copy () {
                this.$toast(copy(this.localCode) ? '复制成功' : '复制失败');
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
