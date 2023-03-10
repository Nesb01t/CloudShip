<template>
	<view>
		<u--form>
			<!-- 姓名栏 -->
			<u-form-item label="姓名" borderBottom>{{ user.name }}</u-form-item>

			<!-- 性别 -->
			<u-form-item label="生日" borderBottom @click="handleBirthdaySelect()">
				<u--input type="text" disabled disabledColor="#ffffff" placeholder="请选择生日" border="none" v-model="user.birthday"></u--input>
			</u-form-item>

			<!-- 遮罩层 -->
			<u-datetime-picker
				:show="isBirthdayShow"
				mode="date"
				:minDate="852077000000"
				:maxDate="1786778555000"
				closeOnClickOverlay
				@close="handleBirthdayClose"
				@cancel="handleBirthdayClose"
				@confirm="handleBirthdayConfirm"
			></u-datetime-picker>
		</u--form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isBirthdayShow: false,
			user: {
				name: '51234',
				birthday: null
			}
		};
	},
	methods: {
		handleBirthdaySelect() {
			this.isBirthdayShow = true;
			
		},

		handleBirthdayClose() {
			this.isBirthdayShow = false;
		},

		getMindate() {
			var date = new Date('1997-01-01');
			return date;
		},

		handleBirthdayConfirm(e) {
			this.setBirthday(e.value);
			this.isBirthdayShow = false;
		},

		addZero(num) {
			if (parseInt(num) < 10) {
				num = '0' + num;
			}
			return num;
		},

		formatMsToDate(ms) {
			var oDate = new Date(ms),
				oYear = oDate.getFullYear(),
				oMonth = oDate.getMonth() + 1,
				oDay = oDate.getDate(),
				oTime = oYear + '-' + this.addZero(oMonth) + '-' + this.addZero(oDay) + ' ';
			var date1 = new Date('1997-01-01');

			console.log(date1.getTime());
			this.user.birthday = oTime;
		},

		setBirthday(ticks) {
			this.formatMsToDate(ticks);
		}
	}
};
</script>

<style></style>
