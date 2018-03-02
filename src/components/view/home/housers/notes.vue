<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
  import  {mapGetters,mapActions} from 'vuex'

  export default {
    name: "notes",
    data(){
      return{
        msg:"我是你们的头部"
      }
    },
    // computed: mapState(["todos"]),
    computed:{
      ...mapGetters(['activeNoteText'])
    },
    mounted(){

    },
    //引入vue的方法
    methods:{
      ...mapActions([
        'editNote'
      ])
    },
  }
</script>
<style scoped>
  .form-control{
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    height: 300px;
  }
</style>
