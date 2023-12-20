<template>
    <img :src="path"/>
</template>

<script setup>
const props = defineProps({
    path: { type: String, required: true },
});
</script>
<style>

</style>