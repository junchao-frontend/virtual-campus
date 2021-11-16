<template>
  <div class="main">
    <div id="container"></div>
    <div class="radios-wrap" :class="direction === 'left' ? 'fold' : ''">
      <div class="control-icon" @click="changeDirection()">
        <i :class="`el-icon-d-arrow-${direction}`"></i>
      </div>
      <el-radio-group v-model="radio">
        <el-radio
          v-for="item in labels"
          :key="item.label"
          :label="item.label"
          :id="item.style"
          @change="changeLabel(item.modelLabel)"
          >{{ item.value }}
        </el-radio>
      </el-radio-group>
    </div>
    <div class="pattern">
      <div
        class="leftpattern"
        :class="checkedModel ? 'patternChecked' : ''"
        @click="[changeModel('2D'), (checkedModel = !checkedModel)]"
      >
        2D
      </div>
      <div
        class="rightpattern"
        :class="checkedModel ? '' : 'patternChecked'"
        @click="[changeModel('3D'), (checkedModel = !checkedModel)]"
      >
        3D
      </div>
    </div>
    <div id="photosphere" class="photosphere" v-show="showPhoto">
      <div
        class="close-icon"
        @click="[(showPhoto = !showPhoto), (otherPhoto = !otherPhoto)]"
      >
        <i
          class="el-icon-close"
          style="font-size: 20px; color: rgb(46, 49, 40)"
        />
      </div>
    </div>
    <div class="box" v-show="showNav">
      <div class="nav-icon" @click="colseNav()">
        <i
          class="el-icon-close"
          style="font-size: 18px; color: rgb(237, 248, 255)"
        />
      </div>
      <div class="changeBtn" @click="changePosition(startInfo, endInfo)">
        <i
          class="iconfont gaode-icon_jiaohuan"
          style="font-size: 20px; color: white"
        ></i>
      </div>
      <div class="head">
        <div class="method-icon" @click="changeRransportation('car')">
          <i
            style="font-size: 19px; color: rgb(158, 201, 254)"
            :style="checkedCar"
            class="iconfont gaode-icon"
          />
        </div>
        <div class="method-icon" @click="changeRransportation('bike')">
          <i
            style="font-size: 19px; color: rgb(158, 201, 254)"
            :style="checkedBike"
            class="iconfont gaode-zixingche"
          />
        </div>
        <div class="method-icon" @click="changeRransportation('foot')">
          <i
            style="font-size: 19px; color: rgb(158, 201, 254)"
            :style="checkedFoot"
            class="iconfont gaode-fanshe"
          />
        </div>
      </div>
      <div class="body">
        <div class="start">
          <span
            style="
              font-size: 14px;
              color: rgb(255, 255, 255);
              margin-right: 15px;
              font-size: 13px;
            "
            >起</span
          ><el-input
            v-model="startInfo"
            placeholder="请选择起点"
            clearable
          ></el-input>
        </div>
        <div class="end">
          <span
            style="
              font-size: 14px;
              color: rgb(255, 255, 255);
              margin-right: 15px;
              font-size: 13px;
            "
            >终</span
          ><el-input
            v-model="endInfo"
            placeholder="请选择终点"
            clearable
          ></el-input>
        </div>
      </div>
      <div class="bottom">
        <a class="removePath" @click="removePath">清除路线</a>
        <el-button
          class="select-button"
          size="small"
          @click="toPlace(allPath)"
          >{{ transportation }}</el-button
        >
      </div>
    </div>
    <div class="back_add" v-show="otherPhoto">
      <div class="threeImg">
        <div class="Containt">
          <div class="iconleft" @click="zuohua">
            <i class="el-icon-arrow-left" style="color: rgb(202, 202, 204)"></i>
          </div>
          <ul
            :style="{ left: calleft + 'px' }"
            @mouseover="stopmove()"
            @mouseout="move()"
          >
            <li
              v-for="(item, index) in superurl"
              :key="index"
              @click="changePanorama"
            >
              <img :src="item.img" />
            </li>
          </ul>
          <div class="iconright" @click="youhua">
            <i
              class="el-icon-arrow-right"
              style="color: rgb(202, 202, 204)"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div>
      <svg
        t="1636861105990"
        class="iconLogin"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7864"
        width="55"
        height="55"
        @click="roleLogin"
      >
        <path
          d="M512 512.41718518m-449.42222222 0a449.42222222 449.42222222 0 1 0 898.84444444 0 449.42222222 449.42222222 0 1 0-898.84444444 0Z"
          fill="#888888"
          p-id="7865"
        ></path>
        <path
          d="M566.04444445 469.8642963a109.11288889 109.11288889 0 1 0-108.0888889 0c-89.65688889 4.32355555-161.22311111 78.39288889-161.2231111 168.96a119.92177778 119.92177778 0 0 0 119.808 119.808h190.9191111a119.92177778 119.92177778 0 0 0 119.808-119.808c0-90.56711111-71.68-164.63644445-161.2231111-168.96z"
          fill="#FFFFFF"
          p-id="7866"
        ></path>
      </svg>
      <transition name="fade">
        <div class="dropdown" v-show="showLogin">
          <div class="topdrop">登录之后享受SDL更多贴心服务</div>
          <div class="underdrop">
            <el-button
              type="primary"
              plain
              round
              :loading="loadingLogin"
              class="btnclass"
              @click="onLogin"
              >登 录</el-button
            >
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { Viewer } from 'photo-sphere-viewer'
// eslint-disable-next-line no-unused-vars
import { initData, getPath } from '../../api/schooldata'
import AMap from 'AMap'
export default {
  components: {},
  data () {
    return {
      // 不同导航方式不同图标
      navcar: require('../../assets/map/navcar.png'),
      navbike: require('../../assets/map/navbike.png'),
      navfoot: require('../../assets/map/navfoot.png'),
      middleInfo: '',
      transportation: '开车去', // 导航交通方式
      panoramadata: null,
      isPhoto: false, // 是否展示全景
      showNav: false, // 是否展示导航
      startInfo: '', // 导航起点
      endInfo: '', // 导航终点
      showPhoto: false, // 是否展示全景
      checkedMethod: false,
      middlePath: {
        startNode: '',
        endNode: ''
      },
      allPath: {
        startNode: '',
        endNode: ''
      },
      pathNode: [],
      checkedCar: 'color:white', // 导航图标样式
      checkedBike: '',
      checkedFoot: '',
      checkedModel: false, // 2D 3D颜色转换
      centerDialogVisible: false,
      labels: [
        {
          label: '1',
          value: '标签',
          style: 'radio1',
          modelLabel: '3D-1'
        },
        {
          label: '2',
          value: '宿舍',
          style: 'radio2',
          modelLabel: '3D-2'
        },
        {
          label: '3',
          value: '学院',
          style: 'radio3',
          modelLabel: '3D-3'
        },
        {
          label: '4',
          value: '超市',
          style: 'radio4',
          modelLabel: '3D-4'
        },
        {
          label: '5',
          value: '教室',
          style: 'radio5',
          modelLabel: '3D-5'
        },
        {
          label: '6',
          value: '行政',
          style: 'radio6',
          modelLabel: '3D-6'
        },
        {
          label: '7',
          value: '食堂',
          style: 'radio7',
          modelLabel: '3D-7'
        },
        {
          label: '8',
          value: '体育',
          style: 'radio8',
          modelLabel: '3D-8'
        }
      ],
      map: null,
      imageLayer: null,
      // infoWindows: [],
      markers: [], // 点位集合
      navmarkers: [], // 起点和终点
      radio: '1', // 标签绑定
      infoWindow: '', // 信息窗体
      pathSimplifierIns: null, // 导航路线
      direction: 'right',
      pointsData: [], // 存入接口数据
      mapModel: '3D', // 通过mapmodel判断现在是在2D还是在3D
      superurl: [
        {
          img: 'http://42.193.99.32:9800/school/web_panorama_dong.jpg'
        },
        {
          img: 'http://42.193.99.32:9800/school/web_panorama_nan.jpg'
        },
        {
          img: 'http://42.193.99.32:9800/school/web_panorama_xi.jpg'
        },
        {
          img: 'http://42.193.99.32:9800/school/web_panorama_bei.jpg'
        },
        {
          img: require('../../assets/map/5.jpg')
        },
        {
          img: require('../../assets/map/6.jpg')
        },
        {
          img: require('../../assets/map/7.jpg')
        },
        {
          img: require('../../assets/map/8.jpg')
        },
        {
          img: require('../../assets/map/9.jpg')
        },
        {
          img: require('../../assets/map/10.jpg')
        },
        {
          img: require('../../assets/map/11.jpg')
        },
        {
          img: require('../../assets/map/12.jpg')
        },
        {
          img: require('../../assets/map/13.jpg')
        },
        {
          img: require('../../assets/map/14.jpg')
        }
      ], // 轮播图url
      calleft: 0, // 轮播图动态位置
      timer: '', // 轮播图定时器
      otherPhoto: false, // 是否展示轮播图
      showLogin: false,
      loadingLogin: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.initSchoolData() // 调取服务器接口函数
  },
  methods: {
    // 更换全景照片
    changePanorama (e) {
      // console.log(e.target.currentSrc)
      var panoramaUrl = e.target.currentSrc
      if (this.panoramadata) {
        this.panoramadata.destroy()
        clearInterval(this.timer)
        this.$nextTick(() => {
          this.initPhoto(panoramaUrl)
        })
      }
    },
    // 改变模型函数 2D或3D
    changeModel (a) {
      if (a === '2D') {
        this.map.clearMap()
        this.map.destroy() // 销毁之前地图
        this.initMap(a) // 加载新地图
        this.radio = '1'
        this.mapModel = '2D'
        this.addLabelMarker('2D')
      } else {
        this.map.clearMap()
        this.map.destroy()
        this.initMap(a)
        this.radio = '1'
        this.mapModel = '3D'
        // 添加点标记
        this.addLabelMarker('3D')
      }
    },
    // 改变标签方向
    changeDirection () {
      if (this.direction === 'right') {
        this.direction = 'left'
      } else {
        this.direction = 'right'
      }
    },
    // 切换建筑不同点位
    changeLabel (e) {
      // console.log(e, '--------')
      if (e === '3D-1' && this.mapModel === '3D') {
        this.map.remove(this.markers)
        var newdata = this.pointsData.threeD.labels.buildingsLabel
        this.newpoint(newdata) // 加载新点位函数
      }
      if (e === '3D-1' && this.mapModel === '2D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.twoD.labels.buildingsLabel
        this.newpoint(newdata)
      }
      if (e === '3D-2' && this.mapModel === '3D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.threeD.labels.dormitory
        this.newpoint(newdata)
      }
      if (e === '3D-2' && this.mapModel === '2D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.twoD.labels.dormitory
        this.newpoint(newdata)
      }
      if (e === '3D-3' && this.mapModel === '3D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.threeD.labels.college
        this.newpoint(newdata)
      }
      if (e === '3D-3' && this.mapModel === '2D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.twoD.labels.college
        this.newpoint(newdata)
      }
      if (e === '3D-4' && this.mapModel === '3D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.threeD.labels.supermarket
        this.newpoint(newdata)
      }
      if (e === '3D-4' && this.mapModel === '2D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.twoD.labels.supermarket
        this.newpoint(newdata)
      }
      if (e === '3D-5' && this.mapModel === '3D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.threeD.labels.classroom
        this.newpoint(newdata)
      }
      if (e === '3D-5' && this.mapModel === '2D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.twoD.labels.classroom
        this.newpoint(newdata)
      }
      if (e === '3D-6' && this.mapModel === '3D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.threeD.labels.administration
        this.newpoint(newdata)
      }
      if (e === '3D-6' && this.mapModel === '2D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.twoD.labels.administration
        this.newpoint(newdata)
      }
      if (e === '3D-7' && this.mapModel === '3D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.threeD.labels.restaurant
        this.newpoint(newdata)
      }
      if (e === '3D-7' && this.mapModel === '2D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.twoD.labels.restaurant
        this.newpoint(newdata)
      }
      if (e === '3D-8' && this.mapModel === '3D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.threeD.labels.sports
        this.newpoint(newdata)
      }
      if (e === '3D-8' && this.mapModel === '2D') {
        this.map.remove(this.markers)
        newdata = this.pointsData.twoD.labels.sports
        this.newpoint(newdata)
      }
    },
    // 加载切换标签后的新点位
    newpoint (a) {
      AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {
        a.data.forEach((item) => {
          var marker = new AMap.Marker({
            map: this.map,
            icon: new AMap.Icon({
              size: new AMap.Size(20, 30),
              image: a.positionIcon,
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
          var infoWindow = new SimpleInfoWindow({
            infoTitle: item.name,
            infoBody: `
            <div class="info-warp">
            <img align= 'left' class='infoImage' src="${item.img}">
            <span class="infoText">${item.introduce}</span>
            <div class="infoBottom">
            <div class="small-box" onclick="openNav()">
            <i class="iconfont gaode-jiantou_youshang"></i>
            <span class="smallbox-text">从这</span>
            </div>
            <div class="small-box" onclick="openNav2()">
            <i class="iconfont gaode-jiantou_youxia"></i>
            <span class="smallbox-text">到这</span>
            </div>
            <div class="small-box" onclick="openPSV()">
            <i class="iconfont gaode-quanjing"></i>
            <span class="smallbox-text">全景</span>
            </div>
            <div class="small-box" onclick="See()">
            <i class="iconfont gaode-16"></i>
            <span class="smallbox-text">详情</span>
            </div>
            </div>
            </div>
            `,
            // 基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
          })
          // 自定义信息窗体
          // 自定义信息窗体
          var markerClick = (e) => {
            // console.log(item)
            infoWindow.open(this.map, e.target.getPosition())
            this.infoWindow = infoWindow
            this.middleInfo = item.name
            this.middlePath.startNode = item.lnglatCenter
            this.middlePath.endNode = item.lnglatCenter
          }
          // 打开全景函数
          window.openPSV = () => {
            this.showPhoto = true
            this.$nextTick(() => {
              this.initPhoto()
            })
            this.otherPhoto = true
            this.move()
            // console.log(document.getElementById('photosphere'))
          }
          // 打开导航函数
          window.openNav = () => {
            // console.log(item)
            this.showNav = true
            this.startInfo = this.middleInfo
            this.allPath.startNode = this.middlePath.startNode
            // console.log(document.getElementById('photosphere'))
          }
          window.openNav2 = () => {
            this.showNav = true
            this.endInfo = this.middleInfo
            this.allPath.endNode = this.middlePath.endNode
            // console.log(this.allPath)
            // console.log(document.getElementById('photosphere'))
          }
          // 打开外部链接函数
          window.See = () => {
            window.open('http://xindian.hebeu.edu.cn/', '_blank')
            // console.log(document.getElementById('photosphere'))
          }
          marker.on('click', markerClick)
        })
      })
    },
    initSchoolData () {
      initData().then((res) => {
        // console.log(res)
        this.pointsData = res.data.data
        // 等拿到数据之后再初始化地图
        this.initMap('3D')
        // 添加点标记
        this.addLabelMarker('3D')
        // console.log(this.pointsData)
      })
    },
    // 初始化地图
    initMap (model) {
      // 通过model接受是2D模型还是3D模型
      // 通过判断model 定义不同的bounds和center
      // console.log(this.pointsData.threeD)
      if (model === '3D') {
        var bounds = this.pointsData.threeD.bounds
        var imgUrl = this.pointsData.threeD.url
        var center = this.pointsData.threeD.center
        var holes = this.pointsData.threeD.holes
        var zoom = this.pointsData.threeD.zoom
        var zooms = this.pointsData.threeD.zooms
      } else if (model === '2D') {
        bounds = this.pointsData.twoD.bounds
        imgUrl = this.pointsData.twoD.url
        center = this.pointsData.twoD.center
        holes = this.pointsData.twoD.holes
        zoom = this.pointsData.twoD.zoom
        zooms = this.pointsData.twoD.zooms
      }
      // 插入自定义学校图层
      this.imageLayer = new AMap.ImageLayer({
        url: imgUrl,
        bounds: new AMap.Bounds(
          bounds[0], // 左下角
          bounds[1] // 右上角
        )
        // zooms: [5, 10]
      })
      // 初始化地图
      this.map = new AMap.Map('container', {
        center: center,
        // center: [114.59698, 36.653994],
        resizeEnable: true, // 是否监控地图容器尺寸变化
        // mapStyle: 'amap://styles/normal',
        zoom: zoom,
        zooms: zooms,
        holes: [holes],
        showLabel: false,
        layers: [new AMap.TileLayer(), this.imageLayer]
      })
      // 点击地图关闭信息窗体
      this.map.on('click', this.markerClose)

      // -------------------
      // 获取当前鼠标点击坐标
      this.map.on('click', (e) => {
        console.log(e)
        // this.lngMain = e.lnglat.getLng()
        // this.latMain = e.lnglat.getLat()
      })
    },
    // 点击地图任意一点关闭信息窗体
    markerClose () {
      this.showLogin = false
      if (this.infoWindow !== '') {
        this.infoWindow.close()
      }
      this.infoWindow = ''
    },
    // 关闭导航窗口
    colseNav () {
      this.showNav = !this.showNav
      if (this.pathSimplifierIns) {
        this.pathSimplifierIns.hide()
        this.map.remove(this.navmarkers)
        this.pathSimplifierIns = null
        this.navmarkers = []
      }
      this.startInfo = ''
      this.endInfo = ''
    },
    // 添加初始所有建筑点位
    addLabelMarker (model) {
      if (model === '3D') {
        var pointData = this.pointsData.threeD.labels.buildingsLabel.data
      } else if (model === '2D') {
        pointData = this.pointsData.twoD.labels.buildingsLabel.data
      }
      AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {
        pointData.forEach((item) => {
          var marker = new AMap.Marker({
            map: this.map,
            icon: new AMap.Icon({
              size: new AMap.Size(20, 30),
              image: this.pointsData.threeD.labels.buildingsLabel.positionIcon,
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
          var infoWindow = new SimpleInfoWindow({
            infoTitle: item.name,
            infoBody: `
            <div class="info-warp">
            <img align= 'left' class='infoImage' src="${item.img}">
            <span class="infoText">${item.introduce}</span>
            <div class="infoBottom">
            <div class="small-box" onclick="openNav()">
            <i class="iconfont gaode-jiantou_youshang"></i>
            <span class="smallbox-text">从这</span>
            </div>
            <div class="small-box" onclick="openNav2()">
            <i class="iconfont gaode-jiantou_youxia"></i>
            <span class="smallbox-text">到这</span>
            </div>
            <div class="small-box" onclick="openPSV()">
            <i class="iconfont gaode-quanjing"></i>
            <span class="smallbox-text">全景</span>
            </div>
            <div class="small-box" onclick="See()">
            <i class="iconfont gaode-16"></i>
            <span class="smallbox-text">详情</span>
            </div>
            </div>
            </div>
            `,
            // 基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
          })
          // 自定义信息窗体
          var markerClick = (e) => {
            // console.log(item)
            infoWindow.open(this.map, e.target.getPosition())
            this.infoWindow = infoWindow
            this.middleInfo = item.name
            this.middlePath.startNode = item.lnglatCenter
            this.middlePath.endNode = item.lnglatCenter
          }
          // 打开全景函数
          window.openPSV = () => {
            this.showPhoto = true
            this.$nextTick(() => {
              this.initPhoto()
            })
            this.otherPhoto = true
            this.move()
            // console.log(document.getElementById('photosphere'))
          }
          // 打开导航函数
          window.openNav = () => {
            // console.log(item)
            this.showNav = true
            this.startInfo = this.middleInfo
            this.allPath.startNode = this.middlePath.startNode
            // console.log(document.getElementById('photosphere'))
          }
          window.openNav2 = () => {
            this.showNav = true
            this.endInfo = this.middleInfo
            this.allPath.endNode = this.middlePath.endNode
            // console.log(this.allPath)
            // console.log(document.getElementById('photosphere'))
          }
          // 打开外部链接函数
          window.See = () => {
            window.open('http://xindian.hebeu.edu.cn/', '_blank')
            // console.log(document.getElementById('photosphere'))
          }
          marker.on('click', markerClick)
        })
      })
    },
    // 展示全景函数
    initPhoto (a) {
      // console.log(document.getElementById('photosphere'))
      if (!a) {
        this.panoramadata = new Viewer({
          container: document.getElementById('photosphere'),
          panorama: 'http://42.193.99.32:9800/school/web_panorama_nan.jpg',
          size: {
            width: '100%',
            height: '100%'
          }
        })
      } else {
        this.panoramadata = new Viewer({
          container: document.getElementById('photosphere'),
          panorama: a,
          size: {
            width: '100%',
            height: '100%'
          }
        })
      }
    },
    // 显示导航路线函数
    toPlace (a) {
      // var pathData = a
      // var test = a.join(',')
      var navmethod // 交通方式
      if (this.transportation === '开车去') {
        navmethod = this.navcar
      } else if (this.transportation === '骑车去') {
        navmethod = this.navbike
      } else {
        navmethod = this.navfoot
      }
      if (this.pathSimplifierIns !== null) {
        this.pathSimplifierIns.hide()
      }
      if (this.navmarkers !== []) {
        this.map.remove(this.navmarkers)
      }
      var fullPath = {}
      fullPath.startNode = Object.values(a)[0].join(',')
      fullPath.endNode = Object.values(a)[1].join(',')
      console.log(fullPath)
      getPath(fullPath).then((res) => {
        console.log(res)
        const navData = res.data.data
        var navIcon = [
          {
            position: navData.pathNode[0],
            iconUrl: 'http://42.193.99.32:9800/school/web_start_icon.png'
          },
          {
            position: navData.pathNode[navData.pathNode.length - 1],
            iconUrl: 'http://42.193.99.32:9800/school/web_end_icon.png'
          }
        ]
        // navIcon.push(navData.pathNode[0], navData.pathNode[navData.pathNode.length - 1])
        // console.log(navIcon)
        var pathName = navData.name
        this.pathNode = navData.pathNode
        AMapUI.load(
          ['ui/misc/PathSimplifier', 'lib/$'],
          (PathSimplifier, $) => {
            if (!PathSimplifier.supportCanvas) {
              alert('当前环境不支持 Canvas！')
              return
            }
            var pathSimplifierIns = new PathSimplifier({
              zIndex: 100,
              // autoSetFitView:false,
              map: this.map, // 所属的地图实例
              // 导航路线样式
              renderOptions: {
                // pathTolerance: 2,
                // keyPointTolerance: -1,
                // renderAllPointsIfNumberBelow: 0,
                // 路线样式
                pathLineStyle: {
                  lineWidth: 6,
                  strokeStyle: '#f7b538',
                  // borderWidth: 1,
                  // borderStyle: '#cccccc',
                  dirArrowStyle: true
                },
                // 飞行器样式
                pathNavigatorStyle: {
                  width: 50,
                  height: 65,
                  strokeStyle: null,
                  fillStyle: null,
                  content: PathSimplifier.Render.Canvas.getImageContent(navmethod, onload, onerror),
                  pathLinePassedStyle: {
                    lineWidth: 5,
                    strokeStyle: '#087ec4',
                    // borderWidth: 1,
                    // borderStyle: '#eeeeee',
                    dirArrowStyle: true
                  }
                }
              },
              getPath: function (pathData, pathIndex) {
                return pathData.path
              },
              getHoverTitle: function (pathData, pathIndex, pointIndex) {
                if (pointIndex >= 0) {
                  // point
                  return (
                    pathData.name +
                    '，点：' +
                    pointIndex +
                    '/' +
                    pathData.path.length
                  )
                }

                return pathData.name + '，点数量' + pathData.path.length
              }
              // renderOptions: {
              //   renderAllPointsIfNumberBelow: 100 // 绘制路线节点，如不需要可设置为-1
              // }
            })
            this.pathSimplifierIns = pathSimplifierIns
            // 设置数据
            pathSimplifierIns.setData([
              {
                name: pathName,
                path: this.pathNode
              }
            ])
            // 对第一条线路（即索引 0）创建一个巡航器
            var navg1 = pathSimplifierIns.createPathNavigator(0, {
              loop: false, // 循环播放
              speed: 5500 // 巡航速度，单位千米/小时
            })
            navg1.start()
            // 导航开始，关闭信息窗体
            this.infoWindow.close()
            // 加载起点和终点图标
            navIcon.forEach((item) => {
              // console.log(item)
              var navmarker = new AMap.Marker({
                map: this.map,
                icon: new AMap.Icon({
                  size: new AMap.Size(20, 30),
                  image: item.iconUrl,
                  imageSize: new AMap.Size(18, 24)
                }),
                position: item.position // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
              })
              this.navmarkers.push(navmarker)
            })
          }
        )
      })
      // -----------------------------------
    },
    // 改变导航交通方式
    changeRransportation (a) {
      if (a === 'car') {
        this.transportation = '开车去'
        this.checkedCar = 'color:white'
        this.checkedBike = ''
        this.checkedFoot = ''
      } else if (a === 'bike') {
        this.transportation = '骑车去'
        this.checkedBike = 'color:white'
        this.checkedCar = ''
        this.checkedFoot = ''
      } else {
        this.transportation = '走路去'
        this.checkedFoot = 'color:white'
        this.checkedBike = ''
        this.checkedCar = ''
      }
    },
    // 交换导航起点终点
    changePosition (start, end) {
      // console.log(this.allPath)
      var startPoint = start
      var endPoint = end
      var startPosition = this.allPath.startNode
      var endPosition = this.allPath.endNode
      this.startInfo = endPoint
      this.endInfo = startPoint
      this.allPath.startNode = endPosition
      this.allPath.endNode = startPosition
    },
    // 清除路线
    removePath () {
      // console.log('1')
      this.startInfo = ''
      this.endInfo = ''
      if (this.pathSimplifierIns) {
        this.pathSimplifierIns.hide()
        this.map.remove(this.navmarkers)
      } else {
        this.pathSimplifierIns = null
      }
    },
    // 轮播图
    move () {
      this.timer = setInterval(this.starmove, 3000)
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
    roleLogin () {
      console.log('54656')
      this.showLogin = !this.showLogin
    },
    onLogin () {
      this.loadingLogin = true
      this.$router.push('/login')
      this.loadingLogin = false
    }
  }
}
</script>
<style lang="scss" scoped>
$radios-map: (
  radio1: (
    color: lighten(rgb(156, 29, 34), 25%),
  ),
  radio2: (
    color: lighten(rgb(255, 165, 0), 25%),
  ),
  radio3: (
    color: lighten(rgb(18, 150, 219), 25%),
  ),
  radio4: (
    color: lighten(rgb(128, 128, 0), 25%),
  ),
  radio5: (
    color: lighten(rgb(34, 139, 34), 25%),
  ),
  radio6: (
    color: lighten(rgb(244, 234, 42), 25%),
  ),
  radio7: (
    color: lighten(rgb(255, 108, 181), 25%),
  ),
  radio8: (
    color: lighten(rgb(138, 43, 226), 25%),
  ),
);
.radios-wrap {
  padding: 3px;
  box-sizing: border-box;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  width: 80px;
  transition: all 0.5s ease-in-out;
  backdrop-filter: blur(6px); // 毛玻璃
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1999;
  position: fixed;
  right: 0;
  bottom: 24px;
  .control-icon {
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 14px;
    height: 58px;
    position: absolute;
    left: -14px;
    top: calc(50% - 32px);
  }
  .el-radio-group {
    display: flex;
    flex-direction: column;
  }
  /deep/.el-radio__label {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
  }
  /deep/.el-radio__input {
    margin-left: 11px;
  }
  /deep/.el-radio {
    margin-top: 8px;
  }
  /deep/.el-radio-group .el-radio__inner {
    width: 14px;
    height: 14px;
    position: relative;
  }
  /deep/.el-radio-group .el-radio__inner::after {
    transition: unset !important;
  }
  /deep/.el-radio-group .el-radio__input.is-checked .el-radio__inner::after {
    z-index: 1;
    content: "";
    width: 3px;
    height: 6px;
    border-radius: 0;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(46deg);
    position: absolute;
    top: 2px;
    left: 5px;
    background-color: rgba(255, 255, 255, 0);
    transition: unset;
  }
  @each $id, $item in $radios-map {
    /deep/.el-radio-group ##{$id} .el-radio__input.is-checked .el-radio__inner {
      background-color: darken(map-get($item, "color"), 35%);
      z-index: -1;
      border: 0;
    }
    /deep/.el-radio-group ##{$id} .el-radio__input .el-radio__inner {
      background-color: map-get($item, "color");
      z-index: -1;
      border: 0;
    }
  }
}
.fold {
  right: -80px;
}

.iconLogin {
  position: fixed;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.dropdown {
  position: fixed;
  top: 73px;
  right: 16px;
  width: 150px;
  height: 160px; // 先不设置高度
  // backdrop-filter: blur(4px);
  box-shadow: 0px 0px 5px #000;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .topdrop {
    // width: 100%;
    padding: 10px;
    color: #fff;
    height: 30%;
    background-color: #3385ff;
  }
  .underdrop {
    width: 100%;
    height: 70%;
    background-color: rgb(255, 255, 255);
    position: relative;
    .btnclass {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100px;
      height: 40px;
    }
  }
}
.dropdown::after {
  content: "";
  width: 0px;
  height: 0px;
  border-width: 0 5px 5px; // 上框边距宽是0 下边框宽是10 左右边框都是10px
  border-style: solid;
  border-color: transparent transparent #3385ff;
  top: 68px;
  right: 33px;
  position: fixed;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
<style lang='less' scoped>
@import url("../../style/Rotation.less");
#photosphere {
  z-index: 2000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.box {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 9999;
  // padding: 10px 0;
  // margin-top: 5px;
  width: 300px;
  height: 190px;
  // border: 1px solid red;
  background-color: rgb(61, 147, 253);
  border-radius: 4px;
  .changeBtn {
    cursor: pointer;
    position: absolute;
    top: 41%;
    left: 6px;
  }
  .head {
    // background-color: rgb(156,29,34);
    display: flex;
    justify-content: space-around;
    margin: 3px auto;
    width: 160px;
    height: 40px;
    .method-icon {
      cursor: pointer;
      display: flex;
      /* text-align: center; */
      align-items: center;
    }
  }
  .bottom {
    position: relative;
    // width: 238px;
    // margin: 0 auto;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    margin-top: -9px;
    height: 30px;
    .removePath {
      top: 5px;
      position: absolute;
      left: 31px;
      font-size: 12px;
      color: white;
      cursor: pointer;
    }
    .el-button {
      border: none;
      color: white;
      background-color: rgb(85, 159, 251);
    }
    .select-button {
      position: absolute;
      // top: 5px;
      right: 30px;
    }
  }
  .body {
    // margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
    .start {
      // margin-left: 15px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-top: -20px;
      padding: 4px;
      background-color: rgb(53, 135, 235);
      width: 230px;
      height: 20px;
      .el-input {
        width: 200px;
      }
      /deep/.el-input__inner {
        font-size: 13px;
        color: white;
        background-color: rgba(125, 134, 146, 0);
        border: none;
      }
    }
    .end {
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 4px;
      margin-top: 5px;
      background-color: rgb(53, 135, 235);
      width: 230px;
      height: 20px;
      /deep/.el-input__inner {
        font-size: 13px;
        color: white;
        background-color: rgba(125, 134, 146, 0);
        border: none;
      }
      .el-input {
        width: 200px;
      }
    }
  }
}
.close-icon {
  z-index: 2001;
  position: absolute;
  right: 5px;
  top: 4px;
  cursor: pointer;
  // font-size: 16px ;
}
.nav-icon {
  z-index: 2001;
  position: absolute;
  right: 6px;
  top: 8px;
  cursor: pointer;
  // font-size: 16px ;
}
.main {
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}
/deep/.info-warp {
  padding: 5px;
}
.pattern {
  display: flex;
  z-index: 1999;
  position: fixed;
  top: 20px;
  left: 10px;
  width: 65px;
  height: 30px;
  // background-color: rgb(164,0,0);
  .patternChecked {
    background-color: rgb(199, 66, 66) !important;
  }
  .leftpattern {
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: white;
    width: 30px;
    height: 100%;
    background-color: rgb(164, 0, 0);
  }
  .rightpattern {
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: white;
    margin-left: 3px;
    width: 30px;
    height: 100%;
    background-color: rgb(164, 0, 0);
  }
}
/deep/ .amap-marker-label {
  text-shadow: 1px 1px 1px #ffffff, 1px 1px 1px #ffffff, 1px 1px 1px #ffffff,
    1px 1px 1px #ffffff, -1px -1px 1px #ffffff, -1px -1px 1px #ffffff,
    -1px -1px 1px #ffffff, -1px -1px 1px #ffffff;
  color: rgb(157, 33, 37);
  // position: absolute;
  font-weight: 1000;
  border: unset;
  background-color: rgba(255, 255, 255, 0.2);
  white-space: nowrap;
  cursor: default;
  font-size: 13px;
}
// 信息窗体标题
/deep/ .amap-ui-smp-ifwn-info-title {
  text-align: center;
  color: white;
  height: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  background-color: rgb(156, 29, 34);
}
// 信息窗体
/deep/ .amap-ui-smp-ifwn-content-body {
  border: 0;
  padding: 0;
}
/deep/.el-dialog {
  height: 600px;
  position: fixed;
  // top:5%;
  left: 16%;
  // margin:-200px -400px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  // width:1000px
}
/deep/.infoImage {
  // display: inline;
  margin-right: 4px;
  width: 60px;
  height: 60px;
}
/deep/.infoText {
  font-size: 10px;
}
/deep/.infoBottom {
  display: flex;
  justify-content: space-around;
  margin-top: 7px;
  width: 100%;
}
/deep/.small-box {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 20px;
  width: 46px;
}
/deep/.smallbox-text {
  margin-left: 4px;
  font-size: 13px;
}
/deep/.infoBottom div:hover {
  color: rgba(255, 0, 0, 0.75);
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
  background: none repeat scroll 0 0 #f9f9f9;
  border-bottom: 1px solid #ccc;
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
