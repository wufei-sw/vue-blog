<template>
        <div class="add-blog">
<h1>编辑</h1>

        <h1>博客标题</h1>
        <p><input type="text" v-model="blog.titles" class="blog-title"></p>
        <h1>博客内容</h1>
        <p><textarea id="textreas" cols="120" rows="20" v-model="blog.bodys"></textarea></p>
        <h1>博客归属</h1>
        <label>{{blog.types}}</label>
        <input type="checkbox" value="Vue.js" checked="checked">
        <p><select class="blog-select" v-model="blog.autors">
            <option value="wufei">wufei</option>
            <option value="dengwanz">dwz</option>
          </select></p>
        <input type="button" value="保存" class="get" @click.prevent="upteBlog">





  </div>
</template>

<script>
    import axios from 'axios'
  import VueAxios from 'vue-axios'
  export default{
      data(){
       return{
          blog:{},
          oldId:''
       }
      },
      created(){
       this.blog = this.$route.params.blogs[this.$route.params.index]
       this.oldId =this.blog.id
      },
      methods: {
        upteBlog() {
                    axios.post('http://192.168.1.88:5000/vueupeblog', {
                  titles: this.blog.titles,
                  bodys: this.blog.bodys,
                  types: this.blog.types,
                  authors: this.blog.autors,
                  id:this.oldId
                })
                .then(response=>{
                if(response.data){
                  alert("修改成功")
                  this.$router.push({name:'showBlogLink'})
                }
                })
                .catch(function(error) {
                  console.log(error);
                });

        }
      },
  }
</script>

<style scoped="scoped">
  div{text-align: left;padding-left: 80px;padding-bottom: 80px;}
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
