<template>
  <div class="divPost">
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
      <button @click="dataStore.DeletePost(post)">Delete</button>
  </div>
</template>
<script setup>
const props = defineProps(["post"]);
import { useDataStore } from '../store/DataStore'

const dataStore = useDataStore()


</script>
<style scoped lang="scss">
.divPost{
    background-color: #201F1F;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    border-radius: 15px;
    padding: 4px;
    box-shadow: 0.5px 0.5px 10px 0px rgba(214, 221, 226, 0.2);
}
.divPost p{
    padding-left: 10px;
}
.divPost button{
    // float: right;
    margin: 0px 10px 0px 10px;
    width: 50px;
    height: 20px;
    background: #eb0707;
    border: none;
    border-radius: 10px;
    color:aliceblue;
}
</style>
