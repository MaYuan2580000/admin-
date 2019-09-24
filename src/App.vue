<template>
  <div id="app">
      <transition>
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
  
    };
  },


};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;

}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  flex-direction: column;
}
</style>
