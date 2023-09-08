<script setup lang="ts">
import {onMounted, ref} from 'vue';

const viewRef = ref();
onMounted(async ()=>{
    const el = viewRef.value.nextSibling;
    if(!el) return;

    const imgs = el.getElementsByTagName('img');

    for(let img of imgs){
        img.style.cursor = 'zoom-in';
        img.onclick = () => {
            window.open(img.src);
        }
    }
})
</script>

<template>
    <div ref="viewRef"></div>
</template>

