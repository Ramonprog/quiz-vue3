<script setup>
import TriviaButtons from "./TriviaButtons.vue";

defineProps({
  correctAnswersTotal: Number,
  questionsTotal: Number,
});

const reload = () => {
  window.location.reload();
};
</script>

<template>
  <div class="container">
    <p>
      Você acertou {{ correctAnswersTotal }} de {{ questionsTotal }} perguntas!
    </p>

    <TriviaButtons @click="reload">Jogar de novo</TriviaButtons>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  display: flex;
  flex-direction: column;
  max-height: 100px;
}
</style>
