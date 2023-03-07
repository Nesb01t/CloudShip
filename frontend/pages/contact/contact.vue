
<template>
	<view class="item-tag">
		<uni-list>
			<uni-list-item title="" note="">123</uni-list-item>
			<uni-list-item title="" note="">456</uni-list-item>
		</uni-list>
		<u-search inputAlign="center" height="70"></u-search>
		
		<u-index-list :index-list="indexList">
			<view v-for="(item, index) in itemArr">
					<u-index-anchor :text="indexList[index]"></u-index-anchor>
					<a href="#">
						<view class="list-cell" v-for="(cell, index) in item">
								<u-avatar style="margin-right: 20px;" shape="square" size='30' id='avatar'></u-avatar>	
									{{cell}}
						</view>
					</a>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
				indexList: ["★","A","B", "C"],
				itemArr: [
					['杨家城','陈明浩','叶俊豪'],
					['列表A1','列表A2','列表A3'],
					['列表B1','列表B2','列表B3'],
					['列表C1','列表C2','列表C3']
				],
				
			}
		},mounted() {
			uni.request({
				url:"",
				success: (e) => {
								}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		border-bottom: 1px solid #ccc;
		padding-right: 7px;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 26px;
		background-color: #fff;
	}
		
	.list-cell img{
		margin-right:20px;
	}
		
	
		
	a{
		text-decoration: none;
	}
		
	#avater{
		margin-right: 20px;
		}
</style>