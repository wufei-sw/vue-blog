<template>
    <div>
 <div class="show-blog">
            <h1>博客总览</h1>

            <input type="text" placeholder="搜索" class="serch" v-model="serch">
        <div class="blog-list" v-for="(blog,key) in flierBolg" v-width:bgcolor="'wide'">
           <router-link :to="'/showblog/'+blog.id"> <h2 v-changColor>{{blog.titles | upperdata}}</h2></router-link>
            <router-link :to="'/showblog/'+blog.id"> <article>{{blog.bodys | sppler}}</article></router-link>
            <article>作者:{{blog.authors}}</article>
            <ul class="blog-dosome">
            <li><button @click="uptblog(key)" v-changColor>编辑</button></li>
               <li><button @click="delblog(blog.id,key)" v-changColor>删除</button></li>
            </ul>
        </div>
     </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
export default {
    name:'showblog',
    data(){
        return{
            blogs:[],
            serch:''
        }
    },
    created(){
        this.$http.get('http://192.168.1.88:5000/vue_blogs')
        .then(data=>{
        this.blogs = eval('('+data.data+')')
        })
    },
    computed:{
        flierBolg:function(){
            return this.blogs.filter((bolg)=>{
                return bolg.titles.toLowerCase().match(this.serch.toLowerCase())
            })
        }
    },
    methods: {
      uptblog(x) {
        this.$router.push({name:'uptaBlogLink',params:{
          blogs:this.blogs,
          index:x
        }})
      },
      delblog(x,y){
if(confirm("确定要删除博客吗？")){
            axios.post('http://192.168.1.88:5000/vuedeleteblog', {
          id:x,
        })
        .then(response=>{
        if(response.data){
          this.blogs.splice(y,1)
        }
        })
}
      }
    },
}
</script>

<style scoped>
.serch{width:90%;height: 40px;}
div{text-align: left}
.blog-list{text-align: left;border: 1px solid #cccccc;margin-bottom: 10px;width: 800px; margin: 20px auto;background-color: blanchedalmond;
padding-left: 20px;padding-bottom: 25px;line-height: 35px;box-shadow: 15px 15px 15px  #00000;}
.show-blog{padding-bottom: 80px;width: 1200px;margin: 0px auto;}
a{color: #666666;}
.blog-dosome li:first-child{padding-right: 42%;}
button{width: 80px;cursor: pointer;border: 1px solid #CCCCCC;height: 38px;border-radius: 8px;color: white;background-color: rgba(0,0,0,0.5);}
</style>
