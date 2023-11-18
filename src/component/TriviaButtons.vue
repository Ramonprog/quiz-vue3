<script setup>
defineProps({
  answers: [String],
});

const emit = defineEmits(["selectedAnswer"]);
</script>

<template>
  <button v-for="answer in answers" @click="emit('selectedAnswer', answer)">
    {{ answer }}
  </button>
</template>

<style scoped>
button {
  all: unset;
  border: 1px solid #181818;
  width: 85%;
  padding: 3px;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  scale: 1.1;
  transition: ease-in-out 0.3s;
}
</style>
