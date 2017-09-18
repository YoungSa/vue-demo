<template>
<div class="all">
    <div class="zhuti">
      <div class="data">
        <div class="image">
          <img src="../assets/lipinguan.jpg" alt="">
        </div>
        <div class="font">
          <div class="miaoshu">
            <i><img src="../assets/ico-audio-tips.png" alt=""></i>
            <span>雪域牛乳芝士蛋糕</span>
            <span class="goods-enname">Le Cheesecake</span>
          </div>
          <div class="jiage">￥198.00</div>
          <div style="clear: both;"></div>
          <p>人气爆款</p>
        </div>
      </div>

      <div class="data">
        <div class="image">
          <img src="../assets/lipinguan.jpg" alt="">
        </div>
        <div class="font">
          <div class="miaoshu">
            <i><img src="../assets/ico-audio-tips.png" alt=""></i>
            <span>雪域牛乳芝士蛋糕</span>
            <span class="goods-enname">Le Cheesecake</span>
          </div>
          <div class="jiage">￥198.00</div>
          <div style="clear: both;"></div>
          <p>人气爆款</p>
        </div>
      </div>
      <div class="data">
        <div class="image">
          <img src="../assets/lipinguan.jpg" alt="">
        </div>
        <div class="font">
          <div class="miaoshu">
            <i><img src="../assets/ico-audio-tips.png" alt=""></i>
            <span>雪域牛乳芝士蛋糕</span>
            <span class="goods-enname">Le Cheesecake</span>
          </div>
          <div class="jiage">￥198.00</div>
          <div style="clear: both;"></div>
          <p>人气爆款</p>
        </div>
      </div>
      <div class="data">
        <div class="image">
          <img src="../assets/lipinguan.jpg" alt="">
        </div>
        <div class="font">
          <div class="miaoshu">
            <i><img src="../assets/ico-audio-tips.png" alt=""></i>
            <span>雪域牛乳芝士蛋糕</span>
            <span class="goods-enname">Le Cheesecake</span>
          </div>
          <div class="jiage">￥198.00</div>
          <div style="clear: both;"></div>
          <p>人气爆款</p>
        </div>
      </div>
      <div class="data">
        <div class="image">
          <img src="../assets/lipinguan.jpg" alt="">
        </div>
        <div class="font">
          <div class="miaoshu">
            <i><img src="../assets/ico-audio-tips.png" alt=""></i>
            <span>雪域牛乳芝士蛋糕</span>
            <span class="goods-enname">Le Cheesecake</span>
          </div>
          <div class="jiage">￥198.00</div>
          <div style="clear: both;"></div>
          <p>人气爆款</p>
        </div>
      </div>
      <div class="data">
        <div class="image">
          <img src="../assets/lipinguan.jpg" alt="">
        </div>
        <div class="font">
          <div class="miaoshu">
            <i><img src="../assets/ico-audio-tips.png" alt=""></i>
            <span>雪域牛乳芝士蛋糕</span>
            <span class="goods-enname">Le Cheesecake</span>
          </div>
          <div class="jiage">￥198.00</div>
          <div style="clear: both;"></div>
          <p>人气爆款</p>
        </div>
      </div>
      <div class="no">——没有更多产品了——</div>
      
    <div class="kongbai"></div>
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
        show:false

      }
      },
      methods:{

        adress(){
          this.showDiag = true;
        },
        phoneBg(index){
          this.currentCity = index; 
          this.showDiag = false;
        }

      }
    
  }
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
}
/*  */
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
.zhuti{
  width: 100%;
  height: 500px;

}
.zhuti .data{
  width: 100%;
}
.zhuti .data img{
  width: 100%;
}
.zhuti .font{
  padding: 0px 10px;

}
.zhuti .font .miaoshu{
  float: left;
}
.zhuti .font .miaoshu span{
      font-size: 12px;
    color: #333;
}
.zhuti .font .miaoshu .goods-enname{
  color: #999;
  font-size: 11px;
}
.zhuti .font .jiage{
  float: right;
  font-size: 12px;
}
.zhuti .font i{
  display: inline-block;
  width: 15px;
  height: 17px;
  vertical-align: middle;
}
.zhuti .font p{
  padding: 2px 4px;
    height: 14px;
    font-size: 10px;
    line-height: 11px;
    color: white;
    background: #ff4001;
    border-radius: 1px;
    display: inline-block;
}
.kongbai{
  height: 56px;
  width: 100%;
  background: white;
}
.zhuti .no{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #999;
}
</style>