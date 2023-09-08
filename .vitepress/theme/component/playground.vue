<script setup lang="ts">
import eveit from 'eveit'
import {computed, ref} from 'vue';
import pkg from 'lz-string';
const { compressToEncodedURIComponent } = pkg;

let nameRef = ref('');
let codeRef = ref('');

eveit.on('playground-code', ({name = 'Custom Code', code})=>{
    if(!code) {
        close();
    }else if(code === 'PLAYGROUND'){
        codeRef.value = 'PLAYGROUND';
        document.body.style.overflow = 'hidden'
    }else{
        nameRef.value = name;
        codeRef.value = compressToEncodedURIComponent(code);
        document.body.style.overflow = 'hidden'
    }
});

let src = computed(() => {
    if(!codeRef.value){
        return ''
    }
    const search = codeRef.value !== 'PLAYGROUND' ? `?name=${nameRef.value}&code=${codeRef.value}`: '';
    return `https://alinsjs.github.io/playground/${search}`;
});

function openStandalone(){
    window.open(src.value);
}

function close(){
    codeRef.value = ''
    document.body.style.overflow = ''
}

</script>

<template>
    <div v-show="codeRef !== ''" class="iframe-block">
        <div class="iframe-title">
            <span @click="close"><i class="ei-times"></i> Close</span>
            <span @click="openStandalone"><i class="ei-window-alt"></i> Open Standalone</span>
        </div>
        <iframe :src="src" class="code-block"></iframe>
    </div>
</template>

<style lang="less">
.iframe-block{
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #222;
    .iframe-title{
        position: absolute;
        font-family: var(--font);
        font-weight: bold;
        color: #fff;
        white-space: nowrap;
        right: 195px;
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: end;
        height: 51px;
        gap: 20px;
        span{
            font-weight: normal;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 3px;
            &:hover{
                text-decoration: underline;
                color: var(--vp-c-brand);
            }
        }
    }
    iframe{
        width: 100%;
        height: 100%;
        border: none;
    }
}
</style>
