<template>
	<view class="coninter">
		<button @click="GetList()">得到数据</button>
		<view v-for="(item,index) in prilist" :key="index">
			Name:{{item.name}}
			<img :src="item.icon" alt="">
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				prilist:[],
			}
		},
		methods:{
			GetList(){
				uni.request({
					url:'https://www.escook.cn/categories',
					method:"GET",
					success: (e) => {
						console.log(e);
						this.prilist=e.data;
					}
				})
			}
		},
		onLoad() {
			this.Getlist();
		}
	}
</script>
