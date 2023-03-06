<view class="u-demo-block__content">
    <view class="u-avatar-item">
        <u-avatar
                icon="star-filll"
                fontSize="22"
        ></u-avatar>
    </view>
    <view class="u-avatar-item">
        <u-avatar
                icon="star-fill"
                fontSize="22"
        ></u-avatar>
    </view>
</view>
<template>
	<u-search  placeholder="请输入关键字" v-model="keyword"></u-search>
</template>
<view class="btn">
	<button>count+1</button>
	<text>{{count}}</text>
</view>

<script>
	export default {
		data() {
			return {
				keyword: '',
				count:'2'
			};
		},
		methods:{
			Count(){
				
			}
		}
	}
</script>

<style lang="scss">
    .u-demo-block__content {
        @include flex;
        align-items: center;
    }

    .u-avatar-item {
        margin-right: 30px;
    }
</style>