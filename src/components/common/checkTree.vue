<template>
	<div id="checkTree">
		<div class="tree-box">
			<div class="zTreeDemoBackground left">
				<ul id="treeDemo" class="ztree"></ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'checkTree',
	  components:{
	    
	  },
	  data:function(){
	  	return{
	  		setting:{
	  			check: {  
                	enable: true,  
                	nocheckInherit: false  
            	},  
            	data: {  
                	simpleData: {  
                    	enable: true  
                	}  
            	} 
	  		},
	  		zNodes:[
			{ id:1,pid:0,name:"大良造菜单",open:true,nocheck:false,
				children: [
					{ id:11,pid:1,name:"当前项目"},
					{ id:12,pid:1,name:"工程管理",open:true,
						children: [
							{ id:121,pid:12,name:"我的工程"},
							{ id:122,pid:12,name:"施工调度"},
							{ id:123,pid:12,name:"项目预算表"},
							{ id:124,pid:12,name:"项目管理"},
							{ id:125,pid:12,name:"改签通知"},
							{ id:126,pid:12,name:"装修日记"},
							{ id:127,pid:12,name:"工匠竞价"},
							{ id:128,pid:12,name:"工程进度图"},
							{ id:129,pid:12,name:"项目列表"},
							{ id:1210,pid:12,name:"采购配送"},
							{ id:1211,pid:12,name:"材料竞价"}
						]
					},
					{ id:13,pid:1,name:"录入管理",open:true,
						children: [
							{ id:131,pid:13,name:"用工录入"},
							{ id:132,pid:13,name:"商家录入"},
							{ id:133,pid:13,name:"客户录入"},
							{ id:134,pid:13,name:"需求上传"},
							{ id:135,pid:13,name:"信息员录入"},
							{ id:136,pid:13,name:"客户列表"},
							{ id:137,pid:13,name:"用工列表"},
							{ id:138,pid:13,name:"商家列表"},
							{ id:139,pid:13,name:"需求列表"},
							{ id:1310,pid:13,name:"信息员列表"},
							{ id:1311,pid:13,name:"VR录入"},
							{ id:1312,pid:13,name:"VR列表"},
							{ id:1313,pid:13,name:"机构录入"},
							{ id:1314,pid:13,name:"机构列表"}
						]
					},
					{ id:14,pid:1,name:"审核管理",open:true,
						children: [
							{ id:141,pid:14,name:"用工审核"},
							{ id:142,pid:14,name:"商家审核"},
							{ id:143,pid:14,name:"信息员审核"},
							{ id:144,pid:14,name:"丈量审核"},
							{ id:145,pid:14,name:"机构审核"}
						]
					},
					{ id:15,pid:1,name:"公司管理",open:true,
						children: [
							{ id:151,pid:15,name:"创建部门"},
							{ id:152,pid:15,name:"创建角色"},
							{ id:153,pid:15,name:"创建员工"},
							{ id:154,pid:15,name:"员工列表"},
							{ id:155,pid:15,name:"权限分配"},
							{ id:156,pid:15,name:"上传公司项目"},
							{ id:157,pid:15,name:"公司项目列表"},
							{ id:158,pid:15,name:"录音监控"},
							{ id:159,pid:15,name:"请示批准"},
							{ id:1510,pid:15,name:"我的公司"},
							{ id:1511,pid:15,name:"工艺标准"},
							{ id:1512,pid:15,name:"装修步骤"},
							{ id:1513,pid:15,name:"设计效果图"},
							{ id:1514,pid:15,name:"工艺流程"},
							{ id:1515,pid:15,name:"公司部门"},
							{ id:1516,pid:15,name:"工程案例上传"},
							{ id:1517,pid:15,name:"我的工程案例"},
							{ id:1518,pid:15,name:"联系人设置"},
							{ id:1519,pid:15,name:"广告设置"}
						]
					},
					{ id:16,pid:1,name:"业务管理",open:true,
						children: [
							{ id:161,pid:16,name:"业务调度"},
							{ id:162,pid:16,name:"客户列表"},
							{ id:163,pid:16,name:"套餐"},
							{ id:164,pid:16,name:"合同范本"},
							{ id:165,pid:16,name:"合同列表"},
							{ id:166,pid:16,name:"需求调度"}
						]
					},
					{ id:17,pid:1,name:"订单管理",open:true,
						children: [
							{ id:171,pid:17,name:"商品订单"},
							{ id:172,pid:17,name:"用工订单"},
							{ id:173,pid:17,name:"我的订单"},
							{ id:174,pid:17,name:"采购订单"},
							{ id:175,pid:17,name:"供应菜单"}
						]
					},
					{ id:18,pid:1,name:"我的功能",open:true,
						children: [
							{ id:181,pid:18,name:"免费设计"},
							{ id:182,pid:18,name:"装修报价"},
							{ id:183,pid:18,name:"问题咨询"},
							{ id:184,pid:18,name:"我的项目"},
							{ id:185,pid:18,name:"家装预算"},
							{ id:186,pid:18,name:"装修阶段"},
							{ id:187,pid:18,name:"商品上传"},
							{ id:188,pid:18,name:"我的商品"},
							{ id:189,pid:18,name:"我的设计案例"},
							{ id:1810,pid:18,name:"设计案例上传"},
							{ id:1811,pid:18,name:"竞价列表"},
							{ id:1812,pid:18,name:"工程案例上传"},
							{ id:1813,pid:18,name:"我的工程案例"},
							{ id:1814,pid:18,name:"需求列表"},
							{ id:1815,pid:18,name:"改签列表"},
							{ id:1816,pid:18,name:"装修日记"},
							{ id:1817,pid:18,name:"项目用工"}
						]
					},
					{ id:19,pid:1,name:"分润管理",open:true,
						children: [
							{ id:191,pid:19,name:"分润列表"}
						]
					},
					{ id:110,pid:1,name:"运营管理",open:true,
						children: [
							{ id:1101,pid:110,name:"代理列表"},
							{ id:1102,pid:110,name:"代售商品"}
						]
					},
				]
			}
			]
		}
	},
	  methods:{
	  	
	  },
	  mounted(){
	  	$.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
	  }
	}
</script>
<style>
	@import '../../../plugins/ztree/zTreeStyle.css';
</style>