<template>
  <div>
    <div class="titleBlc">
      <h1 >Список пользователей</h1>
      <div class="titleBlcP">
        <p>
        Все данные предоставлены одним из самых известных API сервисов
        <a href="https://jsonplaceholder.typicode.com/"
        style="color: aliceblue;"
        >{JSON}Placeholder</a>
      </p>
      </div>
    </div>
        <div v-if="showLoad">
          <LoadList />
        </div>
        <div v-else>
          <router-link
            style="text-decoration: none"
            v-for="user in dataStore.arrUsers"
            :key="user.id"
            :to="{ name: 'user.profile', params: { id: user.id } }"
          >
            <user-router-item :user="user" />
          </router-link>
        </div>
      </div>
</template>

<script setup>
import LoadList from "../components/UI/LoadList.vue";
import UserRouterItem from "../components/UserRouterItem.vue";
import { onMounted } from "vue";
import { useDataStore } from "../store/DataStore";
const dataStore = useDataStore();
import { ref } from "vue";

const showLoad = ref(true);

onMounted(() => {
  setTimeout(() => {
    dataStore.GetUsers();
    showLoad.value = false;
  }, 1500);
});
</script>

<style scoped lang="scss">
@import "../assets/scss/ListPage.scss";
</style>
