<template>
<div class="all">
	
	<div class="footbg">
		<mu-paper style="max-width: 100%;height: 54px;">
		    <mu-bottom-nav :value="bottomNav" @change="handleChange">
		      <mu-bottom-nav-item value="movies" title="首页" icon="home"/>
		      <mu-bottom-nav-item value="music" title="蛋糕馆" icon="cake"/>
		      <mu-bottom-nav-item value="books" title="礼品馆" icon="loyalty"/>
		      <mu-bottom-nav-item value="pictures" title="购物车" icon="shopping"/>
		      <mu-bottom-nav-item value="user" title="个人中心" icon="group"/>
		    </mu-bottom-nav>
 		</mu-paper>
	</div>
 </div>
 
  	
</template>


<script type="text/javascript">
export default {
	  name: 'shouye',
	  data () {
		  	return{
 			
		   bottomNav: 'recents'

	  	}
  		},
  		methods:{
  			handleChange (val) {
      			this.bottomNav = val
    		}

  		}
	  
	}
</script>

<style scoped>
*{
	margin:0;
	padding: 0;
}

.footbg{
	position: fixed;
	bottom: 0px;
}
</style>