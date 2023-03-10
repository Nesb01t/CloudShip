<template>
	<view class="content">
		<u-avatar :src="src" size="200rpx" shape="circle" style="margin: 0 100rpx;"></u-avatar>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<view class="contact">
			<u--input type="number" placeholderStyle="#909399" placeholder="学号" border="surround" v-model="name"></u--input>
			<u--input type="password" placeholderStyle="#909399" placeholder="密码" border="surround" v-model="password"></u--input>
		</view>
		<view class="btn"><u-button @click="getUserInfo" text="登录" size="large" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: '/static/logo.png',
			title: 'Hello，叶俊豪',
			name: '',
			password: ''
		};
	},
	onLoad() {},
	methods: {
		handleLogin() {
			console.log(this.name, this.password);
			this.isServerRunning();
		},
		postLoginMsg() {
			uni.request({
				method: 'POST',
				url: 'http://127.0.0.1:3000/auth/login',
				data: {
					name: this.name,
					password: this.password
				},
				success: e => {
					console.log(e);
				}
			});
		},
		getUserInfo() {
			uni.request({
				method: 'GET',
				url: 'http://127.0.0.1:3000/user/info?name=' + this.name,
				success: e => {
					const obj = e.data;
					console.log(e.statusCode)
					if (e.statusCode == 210) {
						console.log('这个账号还没注册');
					} else {
						console.log(obj.password);
					}
				}
			});
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
