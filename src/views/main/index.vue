<template>
  <div id="photosphere" class="photosphere"></div>
</template>

<script>
import { Viewer } from 'photo-sphere-viewer'
export default {
  components: {},
  data () {
    return {
      panoramadata: null,
      img: require('../../assets/南_看图王.jpg')
      // photosphere: 'photosphere'
    }
  },
  computed: {},
  created () {
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.panoramadata = new Viewer({
        container: document.getElementById('photosphere'),
        panorama: this.img,
        size: {
          width: '100%',
          height: '100%'
        }
      })
    }
  }
}
</script>

<style scoped>
.photosphere{
  width: 100%;
  height: 100%;
}
</style>
