<template>
  <div>
    <div class="mBtn">
    <button class="btn" @click="show = true">Создать пост</button>
    </div>
    <div v-for="post in dataStore.objProfile" :key="post.id">
      <post-item :post="post" />
    </div>
  </div>
  <MyDialog v-model:show="show" @show-return="showReturn()"><PostForm @create-post="showReturn()"/></MyDialog>
</template>

<script setup>
import PostForm from "../PostForm.vue";
import PostItem from "../PostItem.vue";
import { useDataStore } from "../../store/DataStore";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import MyDialog from "../UI/MyDialog.vue";

let show = ref(false);
const route = useRoute();
const id = route.params.id;
const dataStore = useDataStore();

const showReturn =() =>{
    show.value=!show.value
}

onMounted(() => {
  dataStore.GetProfile(id);
});
</script>

<style scoped lang="scss">
    .mBtn{
        text-align: center;
        margin-top: 20px;
    }
    .btn{
    width: 20%;
    height: 50px;
    font-weight: 400;
    font-size: 21px;
    background-color: #0AB6AB;
    border: none;
    border-radius: 10px;
    color:aliceblue;
    }
    @media (max-width:400px) {
        .btn{
            width: 80%;
        }
    }
</style>
