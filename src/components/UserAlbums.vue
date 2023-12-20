<template>
    <p>Альбомы {{ $route.params.id }}</p>
</template>
<script setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route.params.id)


// const id = ref(this.$route.params.id)

// console.log(id)

</script>
<style>
</style>