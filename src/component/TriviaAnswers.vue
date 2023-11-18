<script setup>
defineProps({
  correctAnswers: Array
})
</script>

<template>
  <p v-if="correctAnswers.length">
    <span>Respostas certas:</span>
    <ul>
      <li v-for="answer in correctAnswers">- {{ answer }}</li>
    </ul>
  </p>
</template>

<style scoped>
p {
  text-align: left;
}

span {
  font-weight: bold;
}

li{
    list-style: none;
}

span{
    display: block;
    margin-top: 20px;
}
</style>