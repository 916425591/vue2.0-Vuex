<template>
    <div>
      <el-table
        :data="tableData"
        @row-click="tableClick"
        border
        :row-class-name="tableRowClassName"
        :class-name="tableShow"
        style="width: 100%;background: #000">

        <!--下拉-->
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width=""
          sortable
          :filters="filts"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="">
          <template slot-scope="scope">
            <el-button  @click="handleClick(scope.row,$event)" type="text">查看</el-button>
          </template>
        </el-table-column>
      </el-table>


        <!--弹窗占位置-->
        <el-dialog
          title="提示"
          :visible.sync="centerDialogVisible"
          width="50%"
          >
          <el-form ref="form" :model="form" label-width="80px">

              <el-col :span="12">
                <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="活动区域">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="日期">
                  <!--<el-input v-model="form.date"></el-input>-->
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12"><el-form-item label="省份">
                <el-input v-model="form.province"></el-input>
              </el-form-item>
              </el-col>
              <el-col :span="12"><el-form-item label="市区">
                <el-input v-model="form.city"></el-input>
              </el-form-item>
              </el-col>
              <el-col :span="12"><el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
              </el-col>
                <el-col :span="12"><el-form-item label="邮编">
                  <el-input v-model="form.zip"></el-input>
                </el-form-item>
              </el-col>
          </el-form>

                <el-button right @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" :loading="loading" @click="onSubmit(form)">确 定</el-button>

        </el-dialog>
    <p>{{msg}}<el-button type="primary"  @click="home()">切换节点B页面</el-button></p>
      <el-button type="primary"  @click="clickTree()">ztree</el-button>
      <el-button type="primary"  @click="clickNotes()">跳转笔记页面</el-button>


    </div>

</template>

<script>
    export default {
        name: "hoursers",
        data(){
          return{
            msg:"我只是你们默认页面的A页面",
            tableShow:true,
            tableData: [{
              date: '2016-05-03',
              name: '王老二',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333,
              region: '',
              test:1
            }, {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333,
              region: '',
              test:1
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333,
              region: '',
              test:1
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333,
              region: '',
              test:1
            }],
            filts:[

            ],
            centerDialogVisible:false,
            loading:false,
            form:{
            }
          }
        },
      methods: {
        home() {
          this.$router.push("/view/home/housers/hosersCode");
        },
        clickNotes(){
          this.$router.push("/view/home/housers/notes");
        },
        //查看
        handleClick(row,event) {
          event.cancelBubble = true;
          this.centerDialogVisible=true;
          this.form = { //直接赋值可能是因为elenmet 方法把row进行数据绑定了
            date: row.date,
            name: row.name,
            province:row.province,
            city: row.city,
            address:row.address,
            zip:row.zip,
          };
        },
        //编辑确定
        onSubmit(form) {//导致row会全局引用
          this.loading=true;
          setTimeout(()=>{
            this.loading=false;
            this.centerDialogVisible=false;
            this.$notify({
              title: '成功',
              message: '已经完成修改',
              duration:1000,
              type: 'success'
            });
          },3000)
          console.log(form);
        },
        clickTree(){
          this.tableData.forEach((item)=>{
            if(item.name =="王老二" ){
              item.test+=1;
            }
          })
        },
        //编辑
        editorClick(row,event) {
          event.cancelBubble = true;
        },
        //选中当前行
        tableClick(row, event, column) {
          row.test+=1;
        },
        tableRowClassName({row}) {
          if (row.test%2==0) {
            return 'warning-row';
          } else if (row.test%2!=0) {
            return 'success-row';
          }
          return '';
        },
        tableTd(row){
          if (row.test%2==0) {
            return 'warning-row';
          } else if (row.test%2!=0) {
            return 'success-row';
          }
          return '';
        },
        //把对应的时间戳筛选出来
        filtsData(){
          this.tableData.forEach((item)=>{
            let itemFilts={
              text:item.date,
              value:item.date
            }
            this.filts.push(itemFilts);
          })
        },
        //筛选条件
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        }
      },
      mounted(){
        this.filtsData();
      }
    }
</script>

<style scoped>

</style>
