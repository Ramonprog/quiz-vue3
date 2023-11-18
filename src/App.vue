<script setup>
import BackgroundComponent from "./component/Background.vue";
import TriviaQuestion from "./component/TriviaQuestion.vue";
import { ref, computed } from "vue";
import TriviaAnswers from "./component/TriviaAnswers.vue";
import TriviaResults from "./component/TriviaResults.vue";

const questions = ref(null);
const currentQuestion = ref(0);
const correctAnswers = ref([]);

const computedQuestion = computed(() => {
  if (questions.value) {
    return questions.value[currentQuestion.value];
  }
  return null;
});

const validateAnswer = (answer) => {
  if (answer === computedQuestion.value.answer) {
    correctAnswers.value.push(answer);
  }

  currentQuestion.value = currentQuestion.value + 1;
};

fetch("https://simple-trivia.up.railway.app")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      questions.value = data;
    } else {
      console.error("Dados da API são nulos ou inválidos.");
    }
  });
</script>

<template>
  <BackgroundComponent>
    <div class="container">
      <div class="mainContent">
        <div>
          <TriviaQuestion
            v-if="computedQuestion"
            :question="computedQuestion"
            @answer="validateAnswer"
          />

          <TriviaResults
            v-else
            :correctAnswersTotal="correctAnswers?.length"
            :questionsTotall="questions?.length"
          />

          <TriviaAnswers :correct-answers="correctAnswers" />
        </div>
      </div>
    </div>
  </BackgroundComponent>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.mainContent {
  width: 800px;
  background-color: #fafafa;
  min-height: 300px;
  border-radius: 8px;
  z-index: 1;
  text-align: center;
  padding: 20px;
}
</style>
