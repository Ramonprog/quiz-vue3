<script setup>
import BackgroundComponent from "./component/Background.vue";
</script>

<template>
  <BackgroundComponent>
    <div class="container">
      <div class="div">
        <input type="text" />
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
.div {
  width: 200px;
  height: 100px;
  background-color: red;
  z-index: 1;
}
</style>
