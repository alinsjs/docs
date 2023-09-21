<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
<script setup lang="ts">
import eveit from 'eveit';
import {computed, onMounted, ref} from 'vue';
import {IS_DEV} from '../utils/alins-compiler';
import pkg from 'lz-string';
const { compressToEncodedURIComponent } = pkg;

let nameRef = ref('');
let codeRef = ref('');

let isIframe = ref(false)

let loading = ref(true);

eveit.on('playground-code', ({name = 'Custom Code', code, iframe})=>{
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
    isIframe.value = iframe || false;
});

onMounted(()=>{
    window.addEventListener('message', (e)=>{
        if(e.data.type === 'playground_loaded'){
            loading.value = false;
        }
    });
})

let src = computed(() => {
    if(!codeRef.value){
        return ''
    }
    loading.value = true;
    const search = codeRef.value !== 'PLAYGROUND' ? `?name=${nameRef.value}&code=${codeRef.value}&iframe=${isIframe.value?1:0}`: '';
    return IS_DEV() ? `http://localhost:5174/${search}`: `https://${location.hostname}/playground/${search}`;
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
        <i v-show="loading" class="ei-spinner-snake ei-spin"></i>
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
    .ei-spinner-snake{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
    }
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
