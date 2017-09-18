<template>
<div class="all">
	<div>
		<div class="phone-bg">
	  		<ul class="phone-top">
	  			<li class="phone-big" @click="adress">
	  				<a class="phone-icn">&nbsp;&nbsp;&nbsp;&nbsp;{{currentCity}}</a>
				</li>
				<li class="shop"><a href="#">蛋糕馆</a></li>
				<li class="shop" @click="change"><a href="#">礼品馆</a></li>
				<li class="screen" v-on:click="show=!show" v-show="isshow">
	  				<a class="#">&nbsp;&nbsp;&nbsp;&nbsp;筛选</a>
				</li>
	  		</ul>
	  		<div class="dizhixuanxiang" v-if='showDiag'>
				<div class="city">
					<h3>配送至</h3>
					<span>当前选择城市：</span>{{currentCity}}
				</div>
				<div class="cityxuanxiang">
					<div class="city-in">
						<span>更多城市：</span>
						<ul>
							<li v-for="item in goodList" @click="phoneBg(item.name)">
								{{item.name}}
							</li>
						</ul>
					</div>
				</div>
			</div>
  		</div>
	  	<div class="container" v-if="show" v-on:click="show=!show">
	  		<div class="content">
	  			<div class="shaixuan">筛选</div>
	  			<div class="leibie">
	  				<p>时刻</p>
	  				<ul>
	  					<li>浪漫时刻</li>
	  					<li>浪漫时刻</li>
	  					<li>浪漫时刻</li>
	  					<li>浪漫时刻</li>
	  					<li>浪漫时刻</li>
	  					<li>浪漫时刻</li>
	  				</ul>
	  			</div>
	  			<div class="leibie">
	  				<p>口味</p>
	  				<ul>
	  					<li>奶油口味</li>
	  					<li>奶油口味</li>
	  					<li>奶油口味</li>
	  					<li>奶油口味</li>
	  					<li>奶油口味</li>
	  					<li>奶油口味</li>
	  					<li>奶油口味</li>
	  				</ul>
	  			</div>
	  			<div class="queding">
	  				<a href="#">重置</a>
	  				<a href="#">确定</a>
	  			</div>
	  		</div>
	  	</div>
	</div>
  	
 </div>
 
  	
</template>


<script type="text/javascript">
export default {
	  name: 'shouye',
	  data () {
		  	return{
 			showDiag:false,
	  		currentCity:'上海',
	  		 goodList:[
		    	{id:"sh",name:"上海"},
		    	{id:"bj",name:"北京"},
		    	{id:"gz",name:"广州"},
		    	{id:"nj",name:"南京"},
		    	{id:"cd",name:"成都"},
		    	{id:"sz",name:"深圳"},
		    	{id:"cq",name:"重庆"},
		    	{id:"hj",name:"杭州"},
		    	{id:"sz",name:"苏州"},
		    	{id:"tj",name:"天津"},
		    	{id:"nb",name:"宁波"},
		    	{id:"wx",name:"无锡"},
		    	{id:"sx",name:"绍兴"},
		    	{id:"jx",name:"嘉兴"}
		    ],
		    show:false,
		    isshow:true
		   // bottomNav: 'recents'

	  	}
  		},
  		methods:{
  			adress(){
  				this.showDiag = true;
  			},
  			phoneBg(index){
  				this.currentCity = index; 
  				this.showDiag = false;

  			},
  			change(){
  				this.isshow=!this.isshow;
  			}
  		}
	  
	}
</script>

<style scoped>
*{
	margin:0;
	padding: 0;
}
.all{
	width: 100%;
}
.phone-bg{
	width: 100%;
	height: 42px;
	position: relative;
}
.phone-bg .phone-top li{
	display: inline-block;
	line-height: 42px;
	text-align: center;
	width: 23%;
	color: #a38d6b;
	font-size: 11px;
}

.phone-bg .phone-top .phone-big .phone-icn{
	background:url(../assets/ico-location-new.png) left center no-repeat;
	background-size: 9px 13px;
}
.phone-bg .phone-top .screen a{
	background:url(../assets/ico-sieve-new.png) left center no-repeat;
	background-size: 9px 13px;
}
/*定位*/
.phone-bg .dizhixuanxiang{
	width: 70%;
	height: 230px;
	position: fixed;
	top: 15%;
	left: 15%;
	border-radius: 10px;
	background: #fff;
	overflow: hidden;
}
.phone-bg .dizhixuanxiang .city{
	width: 90%;
	height: 60px;
	background: #fff;
	margin:0 auto;
}
.phone-bg .dizhixuanxiang .city h3{
	height: 33px;
	font-size: 15px;
	text-align: center;
	color: #4a4a4a;
	padding: 5px 0 12px;
	font-weight: 400;
}
.phone-bg .dizhixuanxiang .city span{
	font-size: 14px;
	color: #9b9b9b;
}
.phone-bg .dizhixuanxiang .cityxuanxiang{
	width: 100%;
	height: 100%;
	margin:0 auto;
	background: #f5f5f5 url(../assets/bg-cities.png)no-repeat;
	background-size: 271px auto;
}
.phone-bg .dizhixuanxiang .cityxuanxiang .city-in{
	width: 90%;
	margin:20px auto;
}
.phone-bg .dizhixuanxiang .cityxuanxiang .city-in span{
	font-size: 14px;
	color: #9b9b9b;
	margin-top: 20px;
}
.phone-bg  .dizhixuanxiang .cityxuanxiang .city-in li{
	cursor: pointer;
	list-style: none;
	float: left;
	width: 25%;
	height: 31px;
	font-size: 14px;
	color: #515151;
	padding: 5px 0px;
	text-align: center;
}

.all .list{
	width: 85%;
	height: 100%;
	position: absolute;
	top: 0px;
	right: 0px;
	z-index: 300;
	background: white;
}
.all .screen{
	height: 42px;
	line-height: 42px;
	padding-left: 10px;
	font-size: 14px;
    color: #a38d6b;
}
a{
	color: #a38d6b;
}
.all .list .font{
	line-height: 40px;
	height: 40px;  
	width: 100%;
	padding-left: 15px;
    font-size: 14px;
    color: #6a6969;
}
.all .list .font a{
	margin-left: 1px;
	text-decoration: none;
	width: 30%;
	color: #a1a1a1;
	padding:0px 10px;
	border: 1px solid #eee;
}
.all .list .button{
	width: 100%;
	height: 40px;
	background: red;
	position: absolute;
	bottom: 0px;
}
.all .list .button a{
	display: inline-block;
	width: 49%;
	line-height: 40px;
	text-align: center;
	font-size: 14px;
    color: #a38d6b;
	text-decoration: none;

}
.all .list .button .queding{
	background-color: #e66119;
	color: white;
}
.container{
	width:100%;
	background: rgba(0, 0, 0, .2);
	position: relative;
	top: -40px;
	left: 0px;
	
}
.container .content{
	width: 85%;
	background: white;
	position: relative;
	top: 0px;
	right: -15%;
}
.container .content .shaixuan{
	padding: 9px 15px;
	font-size: 14px;
    color: #a38d6b;
    border-bottom:1px solid #a38d6b;
}
.container .content .leibie{
	padding: 0px 20px;
	margin-top: 20px;
}
.container .content .leibie p{
	font-size: 14px;
    color: #6a6969;
}
.container .content .leibie li{
	display: inline-block;
	text-align: center;
	width: 30%;
	padding: 5px;
	border: 1px solid  #a1a1a1;
	margin-top: 5px;
	color: #a1a1a1;
	font-size: 12px;
}
.container .content .queding{
	width: 100%;
	height: 40px;
	
    border: 1px solid #d1c6af;
    margin-top: 316px;
}
.container .content .queding a{
	line-height: 40px;
	width: 49%;
	display: inline-block;
	text-align: center;
}
.container .content .queding a:last-of-type{
	font-size: 14px;
    background-color: #e66119;
    color: white;
}

</style>