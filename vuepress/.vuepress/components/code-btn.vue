<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-04 20:16:21
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-04 20:25:19
-->
<template>
    <button class="code-btn"
        :class="{text: type === 'text'}"
         @click='run' 
         :title="text">{{text}}</button>
</template>

<script>
    import initJSBox from '../../src/jsbox';
    import {copy} from '../../src/util';
    let jsbox = null;
    export default {
        props: {
            text: {
                type: String,
                default: '运行'
            },
            type: {
                type: String,
                default: 'button'
            },
        },
        data () {
            return {
                localCode: '',
                localLang: '',
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

                if (this.localLang)
                    this.localCode = next.innerText;
            },
            run () {
                jsbox.code(this.localCode, this.localLang);
            },
            copy () {
                if (copy(this.localCode)) {
                    this.$message.success('复制成功');
                } else {
                    this.$message.error('复制成功');
                }
            }
        }
    };
</script>

<style lang="less" scoped>
.code-btn-w{
    margin-top: 10px;
    .code-button{
        font-weight: bold;
        margin-right: 10px;
    }
    .code-link{
        font-size: 0.8rem;
        color: #aaa;
    }
}
</style>
