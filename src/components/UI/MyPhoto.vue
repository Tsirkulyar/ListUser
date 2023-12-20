<template>
    <PathPhoto :path="photo.thumbnailUrl"/>    
</template>

<script setup>
const props = defineProps(["photo"]);
import PathPhoto from './PathPhoto.vue';

</script>