<template>
    <div class="solids" :style="{height:clientHeight}" :class="{'solids-left':count%2!=0,'solids-right':count%2==0}">
      <h2>笔记列表</h2>
      <!--<el-tree-->
        <!--class="filter-tree"-->
        <!--:data="data2"-->
        <!--:props="defaultProps"-->
        <!--:default-expand-all="false"-->
        <!--ref="tree2">-->
      <!--</el-tree>-->
      <div>
        <div class="btn-group btn-group-justified" role="group">
          <!-- All Notes button -->
          <div class="btn-group but-list" role="group">
            <button type="button" class="btn btn-default"
                    @click="show = 'all'"
                    :class="{active: show === 'all'}">
              数据列表
            </button>
            <button type="button" class="btn btn-default"
                    @click="show = 'favorites'"
                    :class="{active: show === 'favorites'}">
              我的收藏
            </button>
          </div>
          <!-- Favorites Button -->

        </div>
      </div>
      <ul class="nots-list">
        <li v-for="note in filteredNotes"
           class="list-group-item" href="#"
           :class="{active: activeNote === note}"
           @click="updateActiveNote(note)">

            {{note.text.trim().substring(0, 30)}}

        </li>
      </ul>
      <div style="float: left;width: 100%">
        <el-button size="small" type="primary" @click="addNote">添加</el-button>
        <el-button size="small" type="warning" @click="toggleFavorite">收藏</el-button>
        <el-button size="small" type="danger" @click="deleteNote" >删除</el-button>
      </div>
    </div>
</template>

<script>
  //import {addNote,deleteNote,toggleFavorite} from "../../store/actions";//利用actions 调用mutations 中的方法 坑死人
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        clientHeight:'',
        show:'all',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    computed:{
      count(){
        return this.$store.state.solidsNumber;
      },
      ...mapGetters([
        'notes', 'activeNote'
      ]),
      filteredNotes () {
        if (this.show === 'all') {
          return this.notes
        } else if (this.show === 'favorites') {
          return this.notes.filter(note => note.favorite)
        }
      }
    },
    mounted() {
      // 动态设置背景图的高度为浏览器可视区域高度

      // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
      this.clientHeight = `${document.documentElement.clientHeight-60}px`;
      // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
      const that = this;
      window.onresize = function temp() {
        that.clientHeight = `${document.documentElement.clientHeight-60}px`;
      };
    },
    methods:{
      ...mapActions([
        'addNote',
        'deleteNote',
        'toggleFavorite',
        'updateActiveNote'
      ])
    }
  };
</script>


<style scoped >
.solids{
  background-color: #F5F5F5;
  width: 320px;
  height: 100%;
  position: relative;
  text-align: center;
}
  .solids-left{
     left: -320px;
    width: 0px;
    transition: all 0.4s ease-out;
  }
  .solids-right{
    left: 0px;
    width: 320px;
    transition: all 0.4s ease-out;
  }
  .but-list{
    width: 80%;
    float: left;
    padding: 10px 10%;

  }
 .but-list button:first-child{
   border-radius: 4px 0px 0px 4px;
 }
  .btn-default{
    float: left;
    background: #fff;
    border: none;
    width: 120px;
    height: 36px;margin: 0px;
    border-radius: 0px 4px 4px 0px;
  }
  .but-list .active{
    background: #ccc;
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
  }
  .nots-list{
    float: left;
    width: 100%;
    padding: 0px;
    margin: 0px;
    margin: 10px 0px;
    background: #fff;
  }
  .nots-list li{
    float: left;
    padding: 8px 10%;
    width: 80%;
    cursor: pointer;
    text-align: left;
  }
  .nots-list li:hover{
     background: #409EFF;
    color: #fff;
   }
  .nots-list .active{
    background: #409EFF;
    color: #fff;
  }
</style>
