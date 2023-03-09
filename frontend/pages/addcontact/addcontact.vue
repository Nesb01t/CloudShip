<template>
	<view class="cointer">
		<u-search :showAction="true" actionText="搜索" :animation="true" shape="square" placeholder="请输入学号" style="margin-top:15px;" v-model="studynumber"></u-search>
<view class="addcontact">
	<u-cell-group v-if="haveregist" >
		<u-cell icon="setting-fill" :title="name" style="width: 85%;">
		</u-cell>
		<u-button type="primary" text="添加"  size='normal' style="width: 15%;"></u-button>
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
			haveregist: true,
			studentinfo: []
		};
	},

	methods: {
		SarchUser() {
			uni.request({
				url: '',
				method: 'POST',
				data: {
					studynumber: this.studynumber
				},
				success: e => {
					console.log(e);
				}
			});
		},
		GetuserInfo() {
			uni.request({
				url: '',
				method: 'GET',
				success: e => {
					console.log(e);
					if (e.statusCode == 200) {
						this.haveregist = 'true';
						this.studentinfo = e.data.studentinfo;
					} else this.haveregist = 'false';
				}
			});
		},

		Addstudent() {}
	}
};
</script>

<style>
		
	.addcontact{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>
