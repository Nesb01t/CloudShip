<template>
	<view class="content">
		<view class="contact">
			<p>联系人:</p><input type="text" placeholder="联系人">
		</view>
		<text>{{textValue}}</text>
		<button @click="ChangeVlaue()">修改text里的值</button>
		<view v-for="(value,name,index) in Object" :key="index">
			 {{ index }}. {{ name }}: {{ value }}
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				textValue:'3456',
				Object:{
						name:'Anker',
						Phone:'17857987320',
						Class:'数字媒体技术211',
				}
				
			};
		},
		methods: {
		  ChangeVlaue(){
			  this.textValue='8、9、10'
		  }
		},
	
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.contact{
		display: flex;
	}
</style>
