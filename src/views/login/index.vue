<template>
  <div class="container">
    <div class="card">
      <div class="leftBox" :class="changeOverBox? 'leftBoxChange':''">
        <div class="signUpBox">
          <div class="form-wrap" :class="changeOverBox ? 'changeFormWrap' : '' ">
            <!-- <div class="form-wrap" :class="changeOverBox? '':'changeFromWrap'"> -->
            <el-form
              :model="ruleFormView"
              :rules="rulesView"
              ref="ruleFormsView"
              status-icon
              label-width="80px"
              class="formclass"
            >
            <el-form-item>
              <h2 class="text">可 视 化</h2>
            </el-form-item>
              <el-form-item
                prop="account"
                style="width: 100%; min-width: 200px;"
              >
                <el-input
                  class="inputStyle"
                  placeholder="username"
                  v-model="ruleFormView.account"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item
                prop="password"
                style="width: 100%; min-width: 200px"
              >
                <el-input
                  class="inputStyle"
                  placeholder="password"
                  v-model="ruleFormView.password"
                  type="password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
                <el-form-item class="login">
                  <!-- 设置按钮边框 -->
                  <button id="view" class="btnStyle" @click="submitForm('ruleFormView')">登 录</button>
                </el-form-item>
            </el-form>
          <!-- </div> -->
          </div>
        </div>
      </div>
      <div class="overBox" :class="changeOverBox? 'overBoxChange':''">
        <div class="overBox-wrap"  :class="changeOverBox? 'changeOverBoxWrap':''">
          <div class="signInButton">
            <button id="table" class="btnStyle" @click="changeRole">后 台 登 录</button>
          </div>
          <div class="signUpButton">
            <button id="table" class="btnStyle" @click="changeRole">可 视 化 登 录</button>
          </div>
        </div>
      </div>
      <div class="rightBox" :class="changeOverBox? 'rightBoxChange':''">
        <div class="form">
          <div class="form-wrap" :class="changeOverBox? '':'changeFromWrap'">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForms"
              status-icon
              label-width="80px"
              class="formclass"
            >
            <el-form-item>
              <h2 class="text">后 台 系 统</h2>
            </el-form-item>
              <el-form-item
                prop="account"
                style="width: 100%; min-width: 200px"
              >
                <el-input
                  class="inputStyle"
                  placeholder="username"
                  v-model="ruleForm.account"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item
                prop="password"
                style="width: 100%; min-width: 200px"
              >
                <el-input
                  class="inputStyle"
                  placeholder="password"
                  v-model="ruleForm.password"
                  type="password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
                <el-form-item class="login">
                  <!-- 设置按钮边框 -->
                  <button id="view" class="btnStyle" @click="submitForm('ruleForm')">登 录</button>
                </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      changeOverBox: false,
      loginWay: 'table',
      ruleFormView: {
        accout: '',
        password: ''
      },
      ruleForm: {
        accout: '',
        password: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        accout: [
          { required: true, trigger: 'blur', message: '用户名不能为空' }
        ]
      },
      rulesView: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        accout: [
          { required: true, trigger: 'blur', message: '用户名不能为空' }
        ]
      }
    }
  },
  computed: {},
  methods: {
    changeRole () {
      this.changeOverBox = !this.changeOverBox
      console.log('$event')
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url("../../assets/login/bg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  // 背景不随滚动
  background-attachment: fixed;
  position: relative;
}
.card {
  box-shadow: 0 4px 18px 0 rgba(3, 3, 3,0.35), 0 6px 20px 0 rgba(26, 25, 25,0.35);
  border-radius: 10px;
  width: 1200px;
  height: 700px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
.leftBox{
  transition: width 0.5s ease;
  position: absolute;
  top: 0;
  height: 100%;
  width: 0%;   left: 0;
  background-image: url("../../assets/login/sonbackground.jpg");
  .signUpBox{
    overflow: hidden;
    width: 100%;
    height: 100%;
    .form-wrap{
      transition: transform 0.5s ease;
      width: 600px;
      height: 100%;
      transform: translateX(1200px);
    }
    .changeFormWrap{
    transform: translateX(0px);
    }
  }
}
.leftBoxChange{
  width: 50%;
}
.overBox {
  transition: all 0.5s ease;
  position: absolute;
  top: 0;left: 0;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  background: inherit;// border-radius: 20px;
  overflow: hidden;
  .overBox-wrap{
    transition: all 0.5s ease;
    width: 200%;
    position: absolute;
    left: 0;
    height: 100%;
    .signUpButton{// transform: translateX(600px);// transition: transform 0.5s ease;
      // transition: all 0.5s ease;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 0;
      width: 50%;
    }
    .signInButton{// transform: translateX(-600px);// transition: transform 0.5s ease;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 600px;
      width: 50%;
    }
  }
  .changeOverBoxWrap{
    left: -600px;
  }
}
.overBoxChange{
  left: 50%;
}
.rightBox {
  transition: width 0.5s ease;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background-image: url("../../assets/login/sonbackground.jpg");
  background-size: 600px 150%;
  background-position: top right;
  background-repeat: no-repeat;
  overflow: hidden;
}
.rightBoxChange{
  width: 0;
}
.form {
  backdrop-filter: blur(4px);
  border-radius: 15px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .form-wrap{
    transition: transform 0.5s ease;
    position: absolute;
    width: 600px;
    height: 100%;
    transform: translateX(-1800px);
  }
  .changeFromWrap{
    transform: translateX(0px);
  }
}
.formclass {
  padding: 15% 15% 15% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btnStyle {
  color: white;
  font-size: 18px;
  width: 12rem;
  height: 3rem;
  border-radius: 15px;
  // background: ;
  background: linear-gradient(to right, #e2b7ff 0%, #bc59ff 80%);
  overflow: hidden;
  cursor: pointer;
  border: none;
  position: relative;
}
.btnStyle:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    rgb(158, 22, 221) 10%,
    transparent 10.01%
  );
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.7s, opacity 0.5s;
}
.btnStyle:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}
.text {
  text-shadow: 3px 3px 3px #949292;
  margin-bottom: 5rem;
}
.login {
  margin-top: 3rem;
}
.formclass .el-form-item__content  {
  margin: auto;
}
</style>
