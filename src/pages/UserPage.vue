<template>
  <div>
    <div class="userTitle">
      <h1>{{ dataStore.arrUsers[id - 1].name }}!</h1>
      <h3>{{ dataStore.arrUsers[id - 1].username }}</h3>
    </div>
    <router-view />
  </div>
</template>
<script setup>
import { useDataStore } from "../store/DataStore";
import { onMounted } from "vue";
const dataStore = useDataStore();
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;
onMounted(() => {
  dataStore.GetProfile(id), dataStore.GetAlbums(id);
});
</script>
<style lang="scss" scoped>
@import "../assets/scss/UserPage.scss";
</style>
