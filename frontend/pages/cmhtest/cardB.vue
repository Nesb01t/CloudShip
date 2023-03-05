<template>
	<view>
		<u-keyboard ref="uKeyboard" mode="car" :show="show"></u-keyboard>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		}
	}
</script>