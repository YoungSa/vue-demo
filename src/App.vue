<template>
  <div id="app">
    <navComponent></navComponent>
    <!--<hellocomponent></hellocomponent>-->
    <router-view></router-view>
    <footerComponent></footerComponent>
  </div>
</template>

<script>


  import navComponent from "./components/nav.vue"
//  import hellocomponent from './components/Hello.vue'
  import footerComponent from './components/footer.vue'

  
  export default {
  name: 'app',
  data () {

    return{

    }
  },
  components:{
    navComponent,
//    hellocomponent,
    footerComponent
  }
}
</script>

<style>

*{
  margin:0;
  padding:0;
}
#app {
  color:#3e3e3e ;
}

a{
  text-decoration: none;
  color:#3e3e3e;
}
</style>
