<script setup>
import TriviaButtons from "./TriviaButtons.vue";

defineProps({
  question: Object,
});

const emit = defineEmits(["answer"]);
</script>

<template>
  <h1>{{ question.text }}</h1>

  <div>
    <TriviaButtons
      v-for="option in question.options"
      @click="emit('answer', option)"
    >
      {{ option }}
    </TriviaButtons>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 10px;
  font-family: sans-serif;
  font-size: 2rem;
}

@media (max-width: 700px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
