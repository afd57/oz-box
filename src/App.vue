<template>
  <div id="app">
    <preview v-bind:items="wishList"/>
  </div>
</template>

<script>
import Preview from './components/Preview.vue';
import { mapState } from 'vuex';
 
export default {
  name: 'App',
  computed:{
    ...mapState([
      'wishList'
    ])
  },
  components: {
    Preview
  }
}
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
