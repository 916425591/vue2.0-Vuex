<template>

  <el-header class="header">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <button @click="add"><a class="t-btn"><span class="t-btn-span"></span></a></button>
          <span class="pjt-name">四川交管项目</span>
        </div>
      </el-col>

        <div class="grid-row">
          <el-col style="width: 66px" >
            <button >
            <el-badge :value="3" class="item">
              <i class="fa fa-bell"></i>
            </el-badge>
            </button>
          </el-col>

          <el-col style="width: 100px">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                个人中心<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-badge :value="3" class="item">
                    红烧肉
                  </el-badge>
                </el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </div>

    </el-row>
  </el-header>
</template>

<script>
    //import {add} from "../../store/actions";//利用actions 调用mutations 中的方法重大失误
    import  {mapActions} from 'vuex'
    export default {
        name: "headers",
        data(){
          return{
            msg:"我是你们的头部"
          }
        },
      // computed: mapState(["todos"]),
      computed:{

      },
      mounted(){

      },
      //引入vue的方法
      methods:{
        ...mapActions([
          'add'
        ])
      },
    }
</script>

<style scoped>
.header{
  color: #fff;
  background-color: #409EFF;
  border-color: #409EFF;
  line-height: 60px;
}
button{
  border: none;
  background: transparent;
  color: #fff;
  font-size: 16px;
}
  .t-btn{
    position: absolute;
    top: 28px;
    width: 24px;
    height: 26px;
    cursor: pointer;
  }
.t-btn-span{
  position: absolute;
  left: 0;
  width: 24px;
  height: 4px;
  content: '';
  background: #fff;
}
.t-btn-span:before,.t-btn-span:after{
  position: absolute;
  left: 0;
  width: 24px;
  height: 4px;
  content: '';
  background: #fff;
}
.t-btn-span:before{
  top: 0;
  -webkit-transform: translateY(-7px);
  transform: translateY(-7px);
  -webkit-transition: all .3s;
  transition: all .3s;
}
.t-btn-span:after{
  -webkit-transform: translateY(7px);
  transform: translateY(7px);
  -webkit-transition: all .3s;
  transition: all .3s;
}
  .pjt-name{
    margin-left: 42px;
  }
  .grid-row{
    float: right;
    display: flex;
  }
  .grid-row .el-dropdown{
    color: #fff;
    cursor: pointer;
  }
</style>
