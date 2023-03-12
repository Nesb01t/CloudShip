
<template>
	<view >
		
		<u-search inputAlign="center" height="35" shape="square" :showAction="false" :animation="true" style=""></u-search>
		<u-gap height="10" bgColor="#dedede"></u-gap>
		<view class="item-tag">
			<a href="pages/addcontact/addcontact"><u-icon label="添加联系人" size="40" name="man-add-fill" labelSize="13px" style="border-bottom: 1px solid #e6e6e6;"></u-icon></a>
			
			<navigator url=""><u-icon label="删除联系人" size="40" name="man-delete-fill" labelSize="13px" style="border-bottom: 1px solid #e6e6e6;"></u-icon></navigator>
			<navigator url=""><u-icon label="标签" size="40" name="tags" labelSize="13px" style="border-bottom: 1px solid #e6e6e6;"></u-icon></navigator>
			
		</view>
		<u-index-list :index-list="indexList">
			<view v-for="(item, index) in itemArr">
					<u-index-anchor :text="indexList[index]"></u-index-anchor>
					<a href="#">
						<view class="list-cell" v-for="(cell, index) in item">
								<u-avatar style="margin-right: 10px;" shape="square" size='30' id='avatar'></u-avatar>	
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
		font-size: 12px;
		line-height: 26px;
		background-color: #fff;
	}
		
		
	.item-tag u-icon {
		font-size: 14px;
	}
		
	
		
	a{
		text-decoration: none;
	}
	
</style>