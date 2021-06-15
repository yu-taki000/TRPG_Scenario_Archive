<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="nav">
    <router-link to="/upload">
      投稿
    </router-link> |
    <router-link to="/senario">
      探す
    </router-link> |
    <router-link to="/login">
      自分の情報
    </router-link>
    <!-- 追加 -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
