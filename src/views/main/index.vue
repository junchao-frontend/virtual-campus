<template>
  <div class="container">
    <div class="box">
      <div class="head">
        <div class="method-icon">
          <i style="font-size:25px;color:white" class="iconfont gaode-icon" />
        </div>
        <div class="method-icon">
          <i style="font-size:25px;color:white" class="iconfont gaode-zixingche" />
        </div>
        <div class="method-icon">
          <i style="font-size:25px;color:white" class="iconfont gaode-fanshe" />
        </div>
      </div>
      <div class="body">
        <div class="start">
          <span style="font-size:14px;color:rgb(255,255,255)">起点</span><el-input v-model="input" placeholder="请选择起点" clearable></el-input>
        </div>
        <div class="end">
          <span style="font-size:14px;color:rgb(255,255,255)">终点</span><el-input v-model="input" placeholder="请选择终点" clearable></el-input>
        </div>
      </div>
      <div class="bottom">
        <el-button class="select-button">走路去</el-button>
      </div>
    </div>
    <button @click="test(pathdata)">+++</button>
  </div>
</template>

<script>
import { getPath } from '../../api/schooldata'
export default {
  components: {},
  data () {
    return {
      input: '1'
      // pathNode:[
      //   startpath:{
      //     position:[114.748403, 36.704386],
      //     url: ''
      //     }
      //           ]
      // pathdata: {
      //   // eslint-disable-next-line comma-spacing
      //   startNode: '114.748403,36.704386',
      //   // eslint-disable-next-line comma-spacing
      //   endNode: '114.701532,36.725547'
      // }
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    test (a) {
      console.log(a)
      getPath(a).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang='less' scoped>
.container{
  width: 100%;
  height: 100%;
}
.box{
  padding: 10px 0;
  // margin-top: 5px;
  width: 300px;
  height: 250px;
  // border: 1px solid red;
  background-color: rgb(61,147,253);
  border-radius: 4px;
  .head{
  display: flex;
  justify-content: space-around;
  height: 35px;
  .method-icon{
  display: flex;
  /* text-align: center; */
  align-items: center;
}
}
.bottom{
  position: relative;
  margin-top: 40px;
  height: 40px;
  .el-button{
    border: none;
    color: white;
    background-color: rgb(85,159,251);
  }
  .select-button{
    position: absolute;
    top: 5px;
    right: 20px;
  }

}
.body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  .start{
  display: flex;
  align-items: center;
  margin-top: 25px;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.23);
  width: 270px;
  height: 30px;
  .el-input{
  width: 200px;
}
  /deep/.el-input__inner{
    color: white;
    background-color: rgba(125, 134, 146,0);
    border: none;
  }
}
.end{
  display: flex;
  align-items: center;
  padding: 4px;
  margin-top: 12px;
  background-color: rgba(0, 0, 0, 0.23);
  width: 270px;
  height: 30px;
  /deep/.el-input__inner{
    color: white;
    background-color: rgba(125, 134, 146,0);
    border: none;
  }
  .el-input{
  width: 200px;
}
}
}
}

</style>
