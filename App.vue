<template>
  <div id="app">
    <app-header></app-header>
<!-- <addblog></addblog> -->
<!-- <showblog></showblog> -->
    <router-view/>
  </div>
</template>

<script>
import addblog from './components/addblog'
import showblog from './components/showBlog'
import header from './components/header'
export default {
  name: 'App',
  components:{
    addblog,
    showblog,
    'app-header':header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  border: 1px solid #cccccc;
  background-color: rgba(0, 0, 0, 0.2)
}
li{list-style: none;display: inline;padding-left:20px }
</style>
