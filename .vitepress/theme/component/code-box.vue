<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {compileCode, download, copy} from '../utils/alins-compiler';
import eveit from 'eveit'

import hljs from 'highlight.js/lib/core';

const blockRef = ref();
const codeRef = ref();
const compileRef = ref();

let code = ref('');
let name = ref('Result');
let info = ref('');

let showCompileResult = ref(false);

let timer: any = null;

function setInfo(text: string) {
    info.value = text;

    clearTimeout(timer);
    timer = setTimeout(()=>{
        info.value = '';
    }, 2000)
}

const id = `id_${Math.random().toString().substring(2)}`;

let runCode = ()=>{};

function downloadHtml(){
    download(code.value);
    setInfo('Download succeed!');
}

function copyCode(){
    copy(code.value);
    setInfo('Copy succeed!');
}

function openInPlayground(){
    console.log(code.value);
    eveit.emit('playground-code', {code: code.value})
}

onMounted(async ()=>{
    const codeEle = blockRef.value.nextSibling;
    const codeDom = codeEle.querySelector('code');

    if(!codeDom) return;
    
    code.value = codeDom.textContent;

    codeRef.value.appendChild(codeEle);
    // @ts-ignore
    const resultCode = await compileCode(code.value);

    const fn = new Function(resultCode
        .replace('#App', `#${id}`).replace(/\.getElementById\(['"]App['"]\)/i, `.getElementById('${id}')`));

    runCode = ()=>{
        document.getElementById(id)!.innerHTML = '';
        fn();
        setInfo('Refresh succeed!');
    }

    fn();

    const highlightedCode = hljs.highlight(
        resultCode.replace('const _$$ = window.Alins._$$;', 'import {_$$$$} from "alins";'),
        { language: 'javascript' }
    );
    compileRef.value.innerHTML = highlightedCode.value;
})
</script>

<template>
    <div class="code-block" ref="blockRef">
        <div ref="codeRef"></div>
        <div class="code-title">
            <span style="font-weight: bold;">{{ name }} 
                <span @click="showCompileResult=!showCompileResult"
                     class="compiler-toggle">{{showCompileResult ? 'Hide':'Show'}} Compile Result</span>
            </span>
            <span style="color:#4c4">{{ info }}</span>
            <span class='editor-btns'>
                <i @click="openInPlayground" title="Open in Playground" class="ei-code"></i>
                <i @click="copyCode" title="Copy" class="ei-copy"></i>
                <i @click="downloadHtml" title='Download' class="ei-download-alt"></i>
                <i @click="runCode" title='Refresh' class="ei-refresh"></i>
            </span>
        </div>
        <div ref="resultRef" class="result-box" :id="id"></div>
        <pre v-show="showCompileResult" ref="compileRef" class="result-box compile-result" :id="id"></pre>
    </div>
</template>

<style lang="less">
.code-block {
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    padding-bottom: 15px;
    .code-title{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .editor-btns{
            display: flex;
            gap: 10px;
            padding-right: 5px;
            font-size: 18px;
            i{
                cursor: pointer;
                transition: color .1s linear;
                &:hover{
                    color: var(--vp-c-brand-light);
                }
            }
        }
        .compiler-toggle{
            color: var(--vp-c-brand-lighter);
            font-weight: normal;
            margin-left: 5px;
            text-decoration: underline;
            font-size: 13px;
            cursor: pointer;
            &:hover{
                color: var(--vp-c-brand);
            }
        }
    }
}
.result-box{
    padding: 15px;
    background-color: #171717;
    button, input, select{
        // margin: 5px;
        // padding: 3px 5px;
        // background-color: #eee;
        // border: none;
        // border-radius: 1px;
        // outline: none;
        // color: #222;

        margin: 5px;
        padding: 4px 8px;
        background-color: #222;
        border: none;
        border-radius: 1px;
        outline: none;
        color: #fff;
        border: 1px solid #666;
        border-radius: 5px;
    }
    button, select{
        cursor: pointer;
        &:hover {
            background-color: #333;
        }
    }
    button:active{
        background-color: #444;
    }
    &.compile-result{
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 0;
        border-top: 1px solid #333;
    }
}
</style>
