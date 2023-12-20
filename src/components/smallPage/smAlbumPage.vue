<template>
    <div v-for="album in dataStore.arrPhotos">
        <CarouselPhoto :album="album"/>
    </div>
</template>
<script setup>
import { useDataStore } from "../../store/DataStore";
import CarouselPhoto from "../CarouselPhoto.vue";

const dataStore = useDataStore()

</script>