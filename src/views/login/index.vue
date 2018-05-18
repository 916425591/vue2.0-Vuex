<template>
  <div class="landing">
    <div class="login-con">
      <div class="logo-title">
        <h2>XXX交管项目</h2>
      </div>
      <el-form :model="userInfo" status-icon :rules="rules2" ref="userInfo" class="demo-ruleForm logon-form">
        <el-form-item prop="name">
          <i class="fa fa-user logo-i"></i>
          <el-input class="login-input" type="text" v-model="userInfo.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <i class="fa fa-lock logo-i"></i>
          <el-input class="login-input" type="password" v-model="userInfo.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;" class="logo-button login-enlarge" :loading="loading" @click="submitForm('userInfo')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {SHORT_LINK_PREFIX, PROCESS_OK_CODE, FILE_NAME_MAX_LENGTH} from "@/util/config"
  export default {
    name: "landing",
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        userInfo: {
          userName: 'admin',
          password: '123456',
        },
        loading: false,
        rules2: {
          name: [
            {validator: validateName, trigger: 'blur'}
          ],
          pwd: [
            {validator: validatePwd, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            console.log(this.Api)
            this.Api.login('swagger/login', 'post',this.userInfo , true).then(res => {
              if (res.data.code === PROCESS_OK_CODE) {

              }else{
                this.loading = false;
              }
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
  .landing {
    position: absolute;
    height: 100%;
    width: 100%;
    float: left;
    color: #fff;
    /*background:url("../assets/images/logoin.jpg") #000;*/
    background: linear-gradient(45deg, rgb(71, 86, 144) 0px, rgb(9, 14, 33) 100%) center center / cover;
    background: linear-gradient(45deg, #218bc5 0px, #37b1f3 100%) center center/cover;
    background: linear-gradient(45deg, #41b74f 0px, #37b1f3 100%) center/cover;
    background-size: cover;
    background-position: center;
    height: 100%;
    h2 {
      color: #fff;
      font-weight: normal;
    }
    .login-con {
      position: absolute;
      top: 50%;
      margin-top: -180px;
      padding: 18px;
      right: 16%;
      border-radius: 3px;
      width: 290px;
      background: #2f789e;
    }
    .el-select {
      width: 100%;
    }
    .logo-title {
      width: 100%;
      text-align: center;
      img {
        width: 76px;
      }
    }
    .logo-i {
      position: absolute;
      color: #fff;
      z-index: 1;
      font-size: 1rem;
      width: 25px;
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
  }
</style>
