<template>
  <div class="landing">
    <div class="login-con">
      <div class="logo-title">
        <img src="../assets/images/logo.png">
        <h2>四川交管项目</h2>
      </div>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm logon-form">
        <el-form-item  prop="pass">
          <i class="fa fa-user logo-i"></i>
          <el-input class="login-input" type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item  prop="checkPass">
          <i class="fa fa-lock logo-i"></i>
          <el-input class="login-input" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <!--<el-form-item label="年龄" prop="age">-->
          <!--<el-input v-model.number="ruleForm2.age"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item >
          <i class="fa fa-users logo-i"></i>
          <el-select class="login-input" v-model="ruleForm2.region" placeholder="请选择类型">
            <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="w-100" :loading="loading" @click="submitForm('ruleForm2')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "landing",
      data() {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          }else {
            callback();
          }
        };
        return {
          ruleForm2: {
            pass: '',
            checkPass: '',
            age: '',
            region:'1'
          },
          loading:false,
          //警
          options:[{
            value:'1',
            label:'接处警台'
          },{
            value:'2',
            label:'值班长台'
          }],
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.loading = true;
              setTimeout(()=>{
                this.loading = false;
                this.$router.push("/vuex/index");
              },3000)

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
.landing{
  position: absolute;
  height: 100%;
  width: 100%;
  float: left;
  color: #fff;
  /*background:url("../assets/images/logoin.jpg") #000;*/
  background: linear-gradient(45deg, rgb(71, 86, 144) 0px, rgb(9, 14, 33) 100%) center center / cover;

  background-size: cover;
  background-position: center;
  height: 100%;
  h2{
    color: #fff;
    font-weight: normal;
  }
  .login-con{
    position: absolute;
    top: 50%;
    margin-top: -280px;
    right: 16%;
  }
  .el-select{
    width: 100%;
  }
  .logon-form{
    padding: 24px 20px 16px 20px;
    background: #222c52;
    border-radius:3px ;
    width: 290px;
  }
  .logo-title{
    width: 100%;
    text-align: center;
    img{
      width: 76px;
    }
  }
  .logo-i{
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
