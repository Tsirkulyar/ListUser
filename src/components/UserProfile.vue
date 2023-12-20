<template>
  <div>
    <div class="divBtn">
    <router-link :to="{ name: 'user.profile.post' }">
      <button class="btn">посты пользователя</button>
    </router-link>
    <router-link :to="{ name: 'user.profile.albums' }">
      <button class="btn">альбомы пользователя</button>
    </router-link>
  </div>

  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useDataStore } from "../store/DataStore";

const dataStore = useDataStore();

import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;

onMounted(() => {
  dataStore.GetProfile(id);
});

</script>
<style scoped>
.btn{
    margin-top: 50px;
    width: 300px;
    height: 50px;
    background-color: #0AB6AB;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    font-size: 25px;
    color:aliceblue;
    box-shadow: 2px 2px 30px 0px rgba(214, 221, 226, 0.2);
}
.divBtn{
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 30px;
  text-align: center;
}
@media (max-width:400px){
  .divBtn{
    display: block;
    margin: auto;
    text-align: center;
  }
}
</style>
