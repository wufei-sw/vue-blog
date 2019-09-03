<template>
    <div>
    <div class="header">
            <ul>
            <li><router-link :to="{name:'showBlogLink'}">博客</router-link></li>
             <li><router-link :to="{name:'addblogLink'}">我想写博客</router-link></li>

        </ul>
    </div>
    </div>
</template>
<script>
export default {

}
</script>

<style>
.header{width: 1200px;height: 50px;margin: 0px auto;border: 1px solid #cccccc;background-color: rgba(0, 0, 0, 0.8);}
.header ul li{list-style: none;display: inline;float: left;padding-left: 50px}
a{text-decoration: none;color: white}
</style>
