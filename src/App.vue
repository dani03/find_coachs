<template>
  <the-header />
  <router-view></router-view>
</template>

<script setup>
import TheHeader from '@/components/layouts/TheHeader.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
