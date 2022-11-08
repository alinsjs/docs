<!--
 * @Author: chenzhongsheng
 * @Date: 2022-11-04 20:16:21
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-07 21:46:19
-->
<template>
    <el-button class='code-btn-w'
               :type='type'
               size='large'
               @click='run'>{{text}}</el-button>
</template>

<script>
    import initJSBox from '../../src/jsbox';
    let jsbox = null;
    export default {
        props: {
            text: {
                type: String,
                default: '运行'
            },
            type: {
                type: String,
                default: 'primary'
            },
            url: {
                type: String,
                default: '',
            }
        },
        mounted () {
            jsbox = initJSBox();
        },
        methods: {
            run () {
                if (!this.url) {
                    this.$toast('url 错误');
                    return;
                }
                let url = '';
                if (this.url[0] === '/') {
                    url = `${location.protocol}://${location.host}${this.url}`;
                } else if (this.url.indexOf('http') === 0) {
                    url = this.url;
                } else if (this.url[0] === '@') {
                    jsbox.openSample(this.url.substring(1));
                    return;
                    // url = `https://theajack.github.io/jsbox?github=alinsjs.docs.samples/${}.js`;
                } else {
                    url = `https://theajack.github.io/jsbox?github=${this.url}`;
                }
                jsbox.openUrl(url);
            }
        }
    };
</script>

<style lang="less">

.code-btn-w {
    margin: 0!important;
    span {
        font-size: 16px;
        color: #f5d63b;
        text-decoration: underline;
        &:hover{
            color: rgb(233, 215, 122);
        }
    }
}
</style>
