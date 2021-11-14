<template>
  <div class="container">
        <div class="back_add">
            <div class="threeImg">
                <div class="Containt">
                    <div class="iconleft"  @click="zuohua">
                        <i class="el-icon-arrow-left"></i>
                    </div>
                    <ul :style="{'left':calleft + 'px'}"  @mouseover="stopmove()" @mouseout="move()">
                        <li v-for="(item,index) in superurl" :key="index">
                            <img @click="test" :src="item.img"/>
                        </li>
                    </ul>
                    <div class="iconright" @click="youhua">
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      superurl: [
        {
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F711%2F101913115130%2F131019115130-5-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639377301&t=3dd172260e89e79c82b127b158067299'
        },
        {
          img: require('../../assets/2.jpg')
        },
        {
          img: require('../../assets/3.jpg')
        },
        {
          img: require('../../assets/4.jpg')
        },
        {
          img: require('../../assets/5.jpg')
        },
        {
          img: require('../../assets/6.jpg')
        },
        {
          img: require('../../assets/7.jpg')
        },
        {
          img: require('../../assets/8.jpeg')
        },
        {
          img: require('../../assets/9.jpg')
        },
        {
          img: require('../../assets/10.jpg')
        },
        {
          img: require('../../assets/11.jpg')
        },
        {
          img: require('../../assets/12.jpg')
        },
        {
          img: require('../../assets/13.jpg')
        },
        {
          img: require('../../assets/14.jpg')
        }
      ],
      calleft: 0,
      timer: ''
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.move()
  },
  methods: {
    move () {
      this.timer = setInterval(this.starmove, 2500)
    },
    // 开始移动
    starmove () {
      this.calleft -= 340
      if (this.calleft < -3060) {
        this.calleft = 0
      }
    },
    // 鼠标悬停时停止移动
    stopmove () {
      console.log('11')
      clearInterval(this.timer)
    },
    zuohua () {
      this.calleft -= 340
      if (this.calleft < -3060) {
        this.calleft = 0
      }
    },
    // 点击按钮右移
    youhua () {
      this.calleft += 340
      if (this.calleft > 0) {
        this.calleft = -3060
      }
    },
    test (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.back_add {
  position: fixed;
  bottom: 50px;
  left: 15px;
  /* background-color: #ededed; */
}
.threeImg {
    height: 160px;
    background-color: rgba(87, 85, 85, 0.2);
    min-width: 1720px;
}
.threeImg .Containt ul {
    transition: all .4s ease;
    list-style-type: none;
    margin: 0 auto;
    width: 5000px;
    position: absolute;
    left: 0px;
    cursor: pointer;
    height: 100%
}
.threeImg .Containt ul li {
    width: 6%;
    margin-right: 40px;
    margin-top: 10px;
    float: left;
}
.threeImg .Containt ul li img {
    height: 128px;
    width: 100%;
}
.Containt {
    position: relative;
    width: 1720px;
    height: 160px;
    overflow: hidden;
    margin: 0 auto;
}
.iconleft {
    cursor: pointer;
    left: 40%;
    position: absolute;
    width: 16px;
    height: 17px;
    bottom: 2px;
    z-index: 99999;
    /* padding-top: 48px; */
    /* background-color: #ddd; */
    vertical-align: middle;
}
.iconright {
    cursor: pointer;
    /* position: fixed; */
    right: 39%;
    bottom: 2px;
    /* background-color: #ddd; */
    position: absolute;
    width: 16px;
    height: 17px;
    z-index: 99999;
    /* padding-top: 48px; */
    vertical-align: middle;
}
</style>
