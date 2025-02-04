<template>
  <div>
    <h1>Components examples</h1>
  </div>
  <base-button variant="primary" label="Click me" :disabled="true"/>

  <component :is="cbutton" label="Inyectado" variant="success" @click="handleClick"/>
</template>

<script setup lang="ts">
import { inject,  } from 'vue';


const cbutton= inject('CustomButton');
const handleClick=()=>{
  console.log('click');
}
</script>

<style>

</style>
