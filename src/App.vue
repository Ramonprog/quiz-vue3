<script setup>
import BackgroundComponent from "./component/Background.vue";
import TriviaQuestion from "./component/TriviaQuestion.vue";
import { ref, computed } from "vue";
import TriviaButtons from "./component/TriviaButtons.vue";

const question = ref("Quantos dias tem um ano?");

const answers = ref(["value 1", "value 2", "value 3", "value 4"]);

const selelectedAnswer = ref(null);

const correctAnswer = ref("value 1");

const select = (answer) => {
  selelectedAnswer.value = answer;
};

const informationText = computed(() => {
  if (selelectedAnswer.value == null) {
    return "Escolha uma resposta";
  }

  if (selelectedAnswer.value == correctAnswer.value) {
    return "Deu bom";
  } else {
    return "Deu ruim";
  }
});
</script>

<template>
  <BackgroundComponent>
    <div class="container">
      <div class="mainContent">
        {{ informationText }}
        <div v-if="!selelectedAnswer">
          <TriviaQuestion :question="question" />
          <TriviaButtons :answers="answers" @selectedAnswer="select" />
        </div>
        <div v-else>
          <button @click="selelectedAnswer = null">tentar novamente</button>
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
}
.mainContent {
  width: 700px;
  background-color: #fafafa;
  min-height: 400px;
  border-radius: 8px;
  z-index: 1;
  text-align: center;
}
</style>
