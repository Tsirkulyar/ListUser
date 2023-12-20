<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog()">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['showReturn'])

const props = defineProps(['show'])

const hideDialog = () =>{
    emit('showReturn')
} 

</script>
<style>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background-color: #201F1F;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  max-width: 900px;
  padding: 20px;
}
</style>
