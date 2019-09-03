<template>
  <div>
    <form action="" v-if="!blog.wantShow">
      <div class="add-blog">
        <h1>博客标题</h1>
        <p><input type="text" v-model="blog.title" class="blog-title"></p>
        <h1>博客内容</h1>
        <p><textarea id="textreas" cols="120" rows="20" v-model="blog.content"></textarea></p>
        <h1>博客归属</h1>
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.bolgtype">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.bolgtype">
        <label>JAVA</label>
        <input type="checkbox" value="JAVA" v-model="blog.bolgtype">
        <label>PHP</label>
        <input type="checkbox" value="PHP" v-model="blog.bolgtype">
        <p><select class="blog-select" v-model="blog.autor">
            <option value="wufei">wufei</option>
            <option value="dengwanz">dwz</option>
          </select></p>
        <input type="button" value="发表博客" class="get" @click.prevent="showBlog">



      </div>
    </form>

    <hr>
    <div v-if="blog.wantShow">
      <h3>您的博客发布成功</h3>
    </div>
    <h2>博客总览</h2>
    <p>博客标题：{{blog.title}}</p>
    <h4>博客内容：</h4>
    <p>{{blog.content}}</p>
    <p>博客归属：</p>
    <ul>
      <li v-for="c in blog.bolgtype">{{c}}</li>
    </ul>
    <p>博客作者：{{blog.autor}}</p>



  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  export default {
    data() {
      return {
        blog: {
          title: '',
          content: '',
          bolgtype: [],
          autor: '',
          wantShow: false
        }
      }
    },
    methods: {
      showBlog() {
        var _this = this;

        axios.post('http://192.168.1.88:5000/vueresbolg', {
            titles: this.blog.title,
            bodys: this.blog.content,
            types: this.blog.bolgtype,
            authors: this.blog.autor
          })
          .then(response=>{
         if(response.data){
           this.blog.wantShow=true;

         }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style >
  .get {
    width: 180px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #cccccc;
    cursor: pointer;
    margin-top: 20px
  }

  .blog-select {
    width: 80px;
    height: 40px;
  }

  .blog-title {
    width: 380px;
    height: 40px;
  }

  input {
    outline: none
  }

  .add-blog {
    border: 1px solid #cccccc;
    width: 80%;
    margin: 0px auto;
    text-align: left;
    padding-left: 40px;
    line-height: 40px;
    margin-bottom: 80px;
    padding-bottom: 40px
  }
</style>
