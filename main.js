// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vueresource from 'vue-resource'
import VueAxios from 'vue-axios'
import axios from 'axios'
import $ from 'jquery'

// Vue.use(Vueresource)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

//自定义属性

Vue.directive('changColor',{
  bind(el,binding,vnode){
    el.style.color = "#"+Math.random().toString(16).slice(2,8)
  }
})


Vue.directive('width',{
  bind(el,binding,vnode){
    if(binding.value =='wide'){
      el.style.width = '560px'
    }
    if(binding.value =='narrow'){
      el.style.width = '260px'
    }
    // if(binding.arg = 'bgcolor'){
    //   el.style.background = '#454545'
    //   el.style.padding = '20px'
    // }
  }
})


Vue.filter('upperdata',function(v){
  return v.toUpperCase();
})


Vue.filter('sppler',function(v){
  return v.slice(0,100)+"...."
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
