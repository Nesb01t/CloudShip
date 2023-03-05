<template>
	<view>
		<div class="btn-group">{{ a }} {{ b.toString(36).toUpperCase() }}</div>
		<u-count-down :timestamp="this.timestamp"></u-count-down>
		<cardB></cardB>
		<cardB></cardB>
	</view>
</template>

<script>
import cardB from './cardB.vue';
export default {
	data() {
		return {
			a: 1,
			b: 10,
			timestamp: 86400
		};
	},
	methods: {
		add() {
			this.a = this.a + 1;
			this.b = this.b + 1;
		}
	},
	components: {
		cardB
	}
};
</script>

<style></style>
