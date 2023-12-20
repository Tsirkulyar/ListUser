<template>
    <div>
        <form @submit.prevent>
            <input 
            class="inputForm"
            placeholder="название поста"
            v-model="dataStore.post.title"/>
            <textarea 
            class="textAreaForm"
            placeholder="текст поста"
            v-model="dataStore.post.body"></textarea>
            <button
            class="btnForm"
             @click="dataStore.CreatePost(), emitChange()">Создать пост</button>
        </form>
    </div>
</template>
<script setup>
import { useDataStore } from '../store/DataStore'

const dataStore = useDataStore()
const emit = defineEmits(['createPost'])

const emitChange =() =>{
    emit('createPost')
}

</script>
<style scoped land="scss">
@import '../assets/scss/PostForm.scss';
</style>