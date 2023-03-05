<template>
	<view class="content">
		<u-avatar :src="src" size="200rpx" shape="circle" style="margin: 0 100rpx;"></u-avatar>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<view class="contact">
			<u--input type="number" placeholderStyle="#909399" placeholder="学号" border="surround" v-model="value1" @change="change"></u--input>
			<u--input type="password" placeholderStyle="#909399" placeholder="密码" border="surround" v-model="value2" @change="change"></u--input>
		</view>
		<view class="btn"><u-button text="登录" size="large" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: '/static/logo.png',
			title: 'Hello，叶俊豪',
			value1: '',
			value2: ''
		};
	},
	onLoad() {},
	methods: {
		change(e) {
			console.log('change', e);
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 250rpx 0;
}
.btn {
	margin: 50rpx 0;
}
.text-area {
	display: flex;
	justify-content: center;
	margin: 40rpx 0;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
