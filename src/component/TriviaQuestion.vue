<script setup>
defineProps({
  question: [],
});
</script>

<template>
  <h1>{{ question }}</h1>
</template>

<style scoped>
h1 {
  margin-top: 10px;
  font-family: sans-serif;
}
</style>
