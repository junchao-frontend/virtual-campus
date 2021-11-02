<template>
    <div id="container">
      <div class="radios-wrap " :class="direction === 'left'?'fold':''">
        <div class="control-icon" @click="changeDirection()">
          <i :class="`el-icon-d-arrow-${direction}`"></i>
        </div>
        <el-radio-group v-model="radio">
            <el-radio id="radio1" :label="1">标签</el-radio>
            <el-radio id="radio2" :label="2">宿舍</el-radio>
            <el-radio id="radio3" :label="3">学院</el-radio>
            <el-radio id="radio4" :label="4">超市</el-radio>
            <el-radio id="radio5" :label="5">教室</el-radio>
            <el-radio id="radio6" :label="6">行政</el-radio>
            <el-radio id="radio7" :label="7">食堂</el-radio>
            <el-radio id="radio8" :label="8">体育</el-radio>
          </el-radio-group>
    </div>
    </div>
</template>

<script>
import AMap from 'AMap'
import { amap } from './label.js'
export default {
  components: {},
  data () {
    return {
      map: null,
      imageLayer: null,
      // infoWindows: [],
      markers: [],
      radio: 3,
      infoWindow: '',
      direction: 'right'
    }
  },
  computed: {
  },
  created () {},
  mounted () {
    // console.log(amap)
    this.initMap()
  },
  methods: {
    changeDirection () {
      if (this.direction === 'right') {
        this.direction = 'left'
      } else {
        this.direction = 'right'
      }
    },
    initMap () {
      // 插入自定义学校图层
      this.imageLayer = new AMap.ImageLayer({
        url: 'http://81.68.73.55/group1/M00/00/34/rBEAA2F7qfWABW2JAGdJS_oe5RU086.jpg',
        bounds: new AMap.Bounds(
          // [114.584546, 36.64932],
          // [114.607666, 36.660785]
          [114.588403, 36.649755], // 左下角
          [114.908403, 36.780195] // 右上角
        )
        // zooms: [5, 10]
      })
      // 初始化地图
      this.map = new AMap.Map('container', {
        center: [114.748403, 36.714965],
        // center: [114.59698, 36.653994],
        resizeEnable: true, // 是否监控地图容器尺寸变化
        // mapStyle: 'amap://styles/normal',
        zoom: 14,
        zooms: [12.8, 16],
        showLabel: false,
        layers: [
          new AMap.TileLayer(),
          this.imageLayer
        ]
      })
      // 添加点标记
      this.addMarker()
      // 点击地图关闭信息窗体
      // this.map.on('click', this.markerClose)

      // -------------------
      // 获取当前鼠标点击坐标
      // this.map.on('click', (e) => {
      //   console.log(e)
      //   // this.lngMain = e.lnglat.getLng()
      //   // this.latMain = e.lnglat.getLat()
      // })
    },
    // markerClose () {
    //   if (this.infoWindow !== '') {
    //     this.infoWindow.close()
    //   }
    //   this.infoWindow = ''
    // },
    addMarker () {
      var pointData = amap.threeD.labels.buildingsLabel.data
      // var test = []
      // console.log(pointData)
      AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {
        pointData.forEach(item => {
          var marker = new AMap.Marker({
            map: this.map,
            icon: new AMap.Icon({
              size: new AMap.Size(20, 30),
              image: amap.threeD.labels.buildingsLabel.positionIcon,
              imageSize: new AMap.Size(18, 24)
            }),
            position: item.lnglatCenter // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          })
          this.markers.push(marker)
          // 设置点标记文本内容
          marker.setLabel({
            content: item.name, // 设置文本标注内容
            direction: 'top' // 设置文本标注方位
          })
          // marker.content = item.introduce
          // 鼠标点击marker弹出自定义的信息窗体
          // console.log(pointData)

          // console.log(item.code)
          var infoWindow = new SimpleInfoWindow({
            infoTitle: item.name,
            infoBody: '<p class="my-desc"><strong>这里是内容。</strong> <br/> 高德地图 JavaScript API，是由 JavaScript 语言编写的应用程序接口，' +
                '它能够帮助您在网站或移动端中构建功能丰富、交互性强的地图应用程序</p>' +
                `名称：${item.name}`,
            // 基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
          })
          // 自定义信息窗体
          var markerClick = (e) => {
            infoWindow.open(this.map, e.target.getPosition())
            this.infoWindow = infoWindow
          }
          // eslint-disable-next-line no-use-before-define
          marker.on('click', markerClick)
        // this.infoWindows.push(infoWindow
        })

        // console.log(item)
      })
      // console.log(pointData)
      // marker.setTitle('我是marker的title')
    }
  }
}
</script>
<style lang="scss" scoped>
$radios-map:(
  radio1:(color:lighten(rgb(156,29,34),25%)),
  radio2:(color:lighten(rgb(255,165,0),25%)),
  radio3:(color:lighten(rgb(18,150,219),25%)),
  radio4:(color:lighten(rgb(128,128,0),25%)),
  radio5:(color:lighten(rgb(34,139,34),25%)),
  radio6:(color:lighten(rgb(244,234,42),25%)),
  radio7:(color:lighten(rgb(255,108,181),25%)),
  radio8:(color:lighten(rgb(138,43,226),25%))
);
.radios-wrap{
  padding: 3px;
  box-sizing: border-box;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  width: 80px;
  transition: all 0.5s ease-in-out;
  backdrop-filter: blur(6px);// 毛玻璃
  background-color: rgba(0, 0, 0,0.5);
  z-index: 1999;
  position: fixed;
  right: 0;
  bottom: 24px;
  .control-icon{
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0,0.7);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 14px;
    height: 58px;
    position: absolute;
    left: -14px;
    top: calc(50% - 32px);
  }
  .el-radio-group{
    display: flex;
    flex-direction: column;
  }
  /deep/.el-radio__label{
    font-size: 13px;
    color: rgba(255, 255, 255,0.9);
  }
  /deep/.el-radio__input{
    margin-left: 11px;
  }
  /deep/.el-radio{
    margin-top: 8px;
  }
  /deep/.el-radio-group .el-radio__inner{
      width: 14px;
      height: 14px;
      position: relative;
  }
  /deep/.el-radio-group .el-radio__inner::after{
      transition:unset !important;
  }
  /deep/.el-radio-group .el-radio__input.is-checked .el-radio__inner::after{
      z-index: 1;
      content: '';
      width: 3px;
      height: 6px;
      border-radius: 0;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
      transform:rotate(46deg);
      position: absolute;
      top: 2px;
      left: 5px;
      background-color: rgba(255, 255, 255, 0);
      transition:unset;
  }
  @each $id,$item in $radios-map{
    /deep/.el-radio-group ##{$id} .el-radio__input.is-checked .el-radio__inner{
      background-color: darken(map-get($item, 'color' ),35%);
      z-index: -1;
      border: 0;
    }
    /deep/.el-radio-group ##{$id} .el-radio__input .el-radio__inner{
        background-color: map-get($item, 'color' );
        z-index: -1;
        border: 0;
    }
  }
}
.fold{
  right: -80px;
}
</style>
<style lang='less' scoped>
#container{
  width: 100%;
  height: 100%;
}
/deep/ .amap-marker-label {
    text-shadow:
     1px 1px 1px #ffffff,
     1px 1px 1px #ffffff,
     1px 1px 1px #ffffff,
     1px 1px 1px #ffffff,
     -1px -1px 1px #ffffff,
     -1px -1px 1px #ffffff,
     -1px -1px 1px #ffffff,
     -1px -1px 1px #ffffff;
    // 0 0 20px #fff,
    // 0 0 30px #fff,
    // 0 0 40px #00a67c,
    // 0 0 70px #00a67c,
    // 0 0 80px #00a67c,
    // 0 0 100px #00a67c,
    // 0 0 150px #00a67c;
    // 0 0 1px #fff,
    // 0 0 2px #fff,
    // 0 0 3px #fff,
    // 0 0 4px #00a67c,
    // 0 0 7px #00a67c,
    // 0 0 5px #00a67c,
    // 0 0 5px #00a67c,
    // 0 0 5px #00a67c;
    color:rgb(157, 33, 37);
    // position: absolute;
    font-weight: 1000;
    border:unset;
    background-color: rgba(255, 255, 255, 0.2);
    white-space: nowrap;
    cursor: default;
    font-size: 13px;
}
// 信息窗体标题
/deep/ .amap-ui-smp-ifwn-info-title{
  text-align: center;
  color: white;
  height: 25px;
  border-bottom: 1px solid rgba(0, 0, 0,0.5);
  background-color: rgb(156, 29, 34);
}
// 信息窗体
/deep/ .amap-ui-smp-ifwn-content-body{
  border: 0;
  padding: 0;
}
 .content-window-card {
            position: relative;
            box-shadow: none;
            bottom: 0;
            left: 0;
            width: auto;
            padding: 0;
        }

  .content-window-card p {
      height: 2rem;
  }

  .custom-info {
      border: solid 1px silver;
  }

  div.info-top {
      position: relative;
      background: none repeat scroll 0 0 #F9F9F9;
      border-bottom: 1px solid #CCC;
      border-radius: 5px 5px 0 0;
  }

  div.info-top div {
      display: inline-block;
      color: #333333;
      font-size: 14px;
      font-weight: bold;
      line-height: 31px;
      padding: 0 10px;
  }

  div.info-top img {
      position: absolute;
      top: 10px;
      right: 10px;
      transition-duration: 0.25s;
  }

  div.info-top img:hover {
      box-shadow: 0px 0px 5px #000;
  }

  div.info-middle {
      font-size: 12px;
      padding: 10px 6px;
      line-height: 20px;
  }

  div.info-bottom {
      height: 0px;
      width: 100%;
      clear: both;
      text-align: center;
  }

  div.info-bottom img {
      position: relative;
      z-index: 104;
  }

  span {
      margin-left: 5px;
      font-size: 11px;
  }

  .info-middle img {
      float: left;
      margin-right: 6px;
  }
</style>
