<template>
	<view class="cointer">
		<u-search :showAction="true" actionText="搜索" :animation="true" shape="square" placeholder="请输入学号" @search="SearchClick()" @custom="SearchClick()" style="margin-top:15px;" v-model="studynumber"></u-search>
			<view class="addcontact">
	<u-cell-group >
		<u-cell icon="setting-fill" :title="name" style="width: 85%;" v-if="haveregist"></u-cell>
		<view class="Notfonud" style="text-align: center;margin:20px 0px;">
			<u--text text="该用户不存在" align="center" style="" v-if="!haveregist"></u--text>
		</view>
		<u-button type="primary" text="添加"  size='normal' v-if="haveregist" @click="AddContact"></u-button>
	</u-cell-group>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			src: '',
			name: 'Anker',
			studynumber: '',
			haveregist:true,
         	studentinfo: []
		};
	},
	methods: {
		SearchClick(){
			console.log(this.studynumber);
			uni.request({
				url:"",
				method:'POST',
				data:{
				 studynumber:this.studynumber,
				},
				success: (e) => {
					if(e.data===null)
					{
						this.haveregist=false;
					}
					else{
						studentinfo=e.data;
						this.name=studentinfo.name;
					}
				}
			})
		},
		AddContact(){
			
		}
	}
};
</script>

<style>
	
</style>
