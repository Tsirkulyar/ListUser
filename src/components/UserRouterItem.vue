<template>
  <div class="mt">
    <div class="generalItem">
        <img
          src="../assets/img/ava.png"
          alt="profile"
          width="50"
          height="50"
          class="img"
        />
        <button class="btn">
          <!-- <slot></slot> -->
          <span>{{ user.name }}</span>
        </button>
        <button @click="dataStore.userFilter(props.user, $event)" class="btn btnRed">
          <span>Delete</span>
        </button>
      </div>
    </div>
</template>
<script setup>
import { useDataStore } from "../store/DataStore";
const dataStore = useDataStore();
const props = defineProps(["user"]);
</script>
<style lang="scss" scoped>
@import "../assets/scss/UserRouterItem.scss";
</style>
