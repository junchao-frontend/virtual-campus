<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    init () {
      AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function (PathSimplifier, $) {
        if (!PathSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
          return
        }
        var pathSimplifierIns = new PathSimplifier({
          zIndex: 100,
          // autoSetFitView:false,
          map: map, // 所属的地图实例
          getPath: function (pathData, pathIndex) {
            return pathData.path
          },
          renderOptions: {
            renderAllPointsIfNumberBelow: 100 // 绘制路线节点，如不需要可设置为-1
          }
        })
        window.pathSimplifierIns = pathSimplifierIns
        // 设置数据
        pathSimplifierIns.setData([{
          name: '路线0',
          path: [
            [114.748403, 36.704386],
            [114.705101, 36.705367],
            [114.694143, 36.714763],
            [114.697433, 36.725668],
            [114.701532, 36.725547]
          ]
        }])
        // 对第一条线路（即索引 0）创建一个巡航器
        var navg1 = pathSimplifierIns.createPathNavigator(0, {
          loop: true, // 循环播放
          speed: 1000000 // 巡航速度，单位千米/小时
        })
        navg1.start()
      })
    }
  }
}
</script>

<style scoped>
</style>
