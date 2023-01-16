<template>
  <div id="app">
    <div class="wrapper">
      <TheHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Poppins", "Noto Sans KR", sans-serif;
  scroll-behavior: smooth;
  box-sizing: border-box;
  margin: 0;
  color: #fff;
}

.wrapper {
  background-image: linear-gradient(rgba(0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./assets/back.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  /* z-index: 99; */
}
</style>
