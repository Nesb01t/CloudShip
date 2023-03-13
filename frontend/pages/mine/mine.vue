<template>
	<view>
		<template>
			<u-cell-group>
				<u-cell title="个人照片">
					<view  slot="value">
						<image :src="UserInfo.picUrl" style="width: 100rpx; height: 100rpx;"></image>
					</view>	
				</u-cell>
				<u-cell  title="个人姓名" :value="UserInfo.name"></u-cell>
				<u-cell  title="学号" :value="UserInfo.number"></u-cell>
				<u-cell  title="班级" :value="UserInfo.class"></u-cell>
				<u-cell  title="电话" :value="UserInfo.states.id"></u-cell>
				<u-cell  title="生日" :value="UserInfo.birthday"></u-cell>
				
			</u-cell-group>
			
		</template>
	</view>
</template>
<script>
	export default{
		data(){
			return{
			UserInfo:{
				picUrl:'../../image/active/contact-1.png',
				name:'Anker',
				states:{
					id: "123123",
				},
				number:"1211020035",
				password:"baidu.123",
				class:"数字媒体技术211",
				birthday:"2002-9-30",
				
				
			}
		}
		},
		methods:{
			getUserInfo(){
				uni.request({
					url:"http://192.168.213.14:3000/user/info?name=goodday",
					method:"GET",
					// data: {
					// 	"name":"goodday",
					// 	"password": "253325325",
					// },
					success: (res) => {
						this.UserInfo=res.data;
						console.log("OOOOOOOOOOOOOOOOOO")
						console.log(res.data);
					},
					fail: (error) => {
						console.log(error)
					}
				})
				
			}
		},
		mounted(){
			this.getUserInfo()
		}
	}
	
</script>
