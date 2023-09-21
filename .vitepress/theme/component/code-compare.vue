<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {countCodeSize} from '../utils/alins-compiler';
const blockRef = ref();

let fullscreen = ref(false);

const props = defineProps<{
    list?: string[],
    count?: number,
}>();

let size = ref([] as any[]);

const list = (()=>{
    if(Array.isArray(props.list)) return props.list;
    let arr = ['alins', 'vue3', 'react'];
    if(typeof props.count === 'number') return arr.slice(0, props.count);
    return arr;
})();


onMounted(()=>{
    let n = list.length;

    const dom = blockRef.value;

    const children = dom.children;
    let i = 0;
    while(i < n){
        const el = dom.nextSibling;
        size.value.push(countCodeSize(el.textContent))
        el.classList.add('code-compare-container')
        children[i].appendChild(el);
        i ++;
    }
});

function toggleFullScreen(){
    fullscreen.value = !fullscreen.value
    document.body.style.overflow = fullscreen.value ? 'hidden': ''
}
</script>

<template>
    <div class="code-compare-box" :class="{fullscreen: fullscreen}" ref="blockRef">
        <div class="code-compare-item" v-for="(title, index) in list">
            <span class="code-size">{{ size[index] }}</span>
            <div class="code-compare-title">{{ title }}</div>
        </div>
        <i @click="toggleFullScreen" 
            :class="'fullscreen-btn ' + (fullscreen?'ei-collapse-full':'ei-expand-full')"></i>
    </div>
</template>

<style lang="less">
.code-compare-box{
    display: flex;
    background-color: #111;
    position: relative;
    .fullscreen-btn {
        position: absolute;
        z-index: 100;
        right: 8px;
        top: 8px;
        cursor: pointer;
    }
    .code-compare-item{
        flex: 1;
        width: 33.333333%;
        border-right: 1px solid #333;
        position: relative;
        div[class*='language-']{
            background-color: #111;
            border-radius: 0;
            margin: 5px 0;
            border-top: 1px dashed #333;
        }
        .code-compare-title{
            font-family: var(--font);
            text-align: center;
            color: #ccc;
            margin-top: 5px;;
        }
    }
    &.fullscreen{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        .code-compare-container{
            max-height: none;
        }
    }
}
.code-compare-container{
    max-height: 500px;
    overflow-y: auto;
}
</style>
