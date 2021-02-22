<template>
  <div id="app">
    <div class="main-container">
      <header class="main-container__header">
        <router-link
          class="main-container__header_route-link"
          to="/post-preView"
          >Posts List</router-link
        >
        <span>posts: {{ GET_INFINITE_POSTS.length }}</span>
      </header>
      <main class="main-container__сontent">
        <transition name="bounce" mode="out-in">
          <router-view />
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  computed: mapGetters(["GET_INFINITE_POSTS"]),
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(202, 202, 202);
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.main-container {
  display: block;
  overflow: auto;
  height: 100%;
  width: 100%;
  background: $main-bg;

  &__header {
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 15;
    background: $header-bg;
    &_route-link {
      padding: 10px;
      text-decoration: none;
      color: #000;
      font-weight: 700;
      line-height: 50px;
      margin: 10px;
      border-radius: 5px;
      background: rgb(230, 230, 230);
      cursor: pointer;
    }
    span {
      color: #fff;
      padding: 0 10px;
    }
  }
  &__сontent {
    padding-top: 40px;
    width: 90%;
    margin: 10px auto;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
