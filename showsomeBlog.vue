<template>
  <div>
    <div class="blog-show" v-for="c in blog">
      <h1>{{c.titles}}</h1>
      <div>{{c.bodys}}</div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      axios.post('http://192.168.1.88:5000/vueblogsome', {
          id: this.id,
        })
        .then(response => {
          this.blog = eval("(" + response.data + ")")
        })
        .catch(function(error) {
          console.log(error);
        });
    }

  }
</script>

<style>
  .blog-show {
    text-align: left;
    border: 1px solid #cccccc;
    padding: 20px;
    width: 1000px;
    margin: 0px auto;
    background-color: salmon;
    padding-bottom: 150px;
  }
</style>
