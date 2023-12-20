<template>
  <div>
    <div class="helloParag">
      <div class="titleParag">
        <h1 class="">ЮзерЛист Апликейшен</h1>
        <p class="titleP">
          До безумия простое приложение для работы со списком пользователей))
        </p>
      </div>
    </div>
    <div class="divBtn">
      <router-link :to="{ name: 'ListPage' }">
      <button class="btn">Тыкни, чтобы начать</button>
    </router-link>
    </div>

  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/HelloPage.scss";
</style>
