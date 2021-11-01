<template>
    <div id="container"></div>
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
      infoWindow: null,
      markers: []
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
      // -------------------
      // 获取当前鼠标点击坐标
      // this.map.on('click', (e) => {
      //   console.log(e)
      //   // this.lngMain = e.lnglat.getLng()
      //   // this.latMain = e.lnglat.getLat()
      // })
      // this.map = new AMap.Map('container', {
      //   center: [116.397428, 39.90923],
      //   zoom: 18,
      //   resizeEnable: true// 是否监控地图容器尺寸变化
      // })
    },
    addMarker () {
      // this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) })
      var pointData = amap.threeD.labels.buildingsLabel.data
      // var test = []
      // console.log(pointData)
      pointData.forEach(item => {
        var marker = new AMap.Marker({
          map: this.map,
          icon: new AMap.Icon({
            size: new AMap.Size(25, 34),
            image: 'http://42.193.99.32:9800/school/web_Red_icon.png',
            imageSize: new AMap.Size(24, 32)
          }),
          position: item.lnglatCenter // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        })
        // console.log(amap.threeD.labels.college.positionIcon)
        this.markers.push(marker)
        // 设置点标记文本内容
        marker.setLabel({
        // offset: new AMap.Pixel(2, 1), // 设置文本标注偏移量
          content: item.name, // 设置文本标注内容
          direction: 'top' // 设置文本标注方位
        })
        // console.log(item)
      })
      // console.log(pointData)
      // marker.content = 'wjcwjc'
      // marker.on('click', this.markerClick)
      // marker.emit('click', { target: marker })
      // marker.setTitle('我是marker的title')
    }
    // markerClick (e) {
    //   this.infoWindow.setContent(e.target.content)
    //   this.infoWindow.open(this.map, e.target.getPosition())
    // }
  }
}
</script>

<style lang='less' scoped>
#container{
  width: 100%;
  height: 100%;
}
/deep/ .amap-marker-label {
    color:rgb(157, 33, 37);
    // position: absolute;
    font-weight: 1000;
    border:unset;
    background-color: rgba(255, 255, 255, 0.3);
    white-space: nowrap;
    cursor: default;
    font-size: 16px;
}

</style>
