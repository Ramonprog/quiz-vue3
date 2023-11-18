<script setup>
import BackgroundComponent from "./component/Background.vue";
import TriviaQuestion from "./component/TriviaQuestion.vue";
import { ref } from "vue";
import TriviaButtons from "./component/TriviaButtons.vue";

const question = ref("Quantos dias tem um ano?");

const answers = ref(["value 1", "value 2", "value 3", "value 4"]);

const selectedAnswer = (answer) => {
  console.log(answer);
};
</script>

<template>
  <BackgroundComponent>
    <div class="container">
      <div class="mainContent">
        <TriviaQuestion :question="question" />
        <TriviaButtons :answers="answers" @selectedAnswer="selectedAnswer" />
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
