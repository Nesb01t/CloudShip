<template>
	<view>
		<u--form>
			<!-- 姓名栏 -->
			<u-form-item label="姓名" borderBottom>
				<u--input type="text" disabledColor="#ffffff" placeholder="请输入姓名" v-model="user.name" @change="updateName"></u--input>
			</u-form-item>

			<!-- 性别 -->
			<u-form-item label="性别" borderBottom @click="isSexshow = true">
				<u--input type="text" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none" v-model="user.sex"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<!-- 生日 -->
			<u-form-item label="生日" borderBottom @click="handleBirthdaySelect()">
				<u--input type="text" disabled disabledColor="#ffffff" placeholder="请选择生日" border="none" v-model="user.birthday"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<!-- 联系方式 -->
			<u-form-item label="联系方式" bordeeBottom>
				<u--input type="text" disabledColor="#ffffff" placeholder="请输入手机号" border="none" v-model="user.phone" @change="updatePhone"></u--input>
			</u-form-item>

			<!-- 地址 -->
			<u-form-item label="地址" bordeeBottom>
				<u--input type="text" disabledColor="#ffffff" placeholder="请输入家庭住址" border="none" v-model="user.address" @change="updateAddress"></u--input>
			</u-form-item>

			<!-- 简介 -->
			<u-form-item label="简介" bordeeBottom>
				<u--input type="text" disabledColor="#ffffff" placeholder="简介" border="none" v-model="user.introduction" @change="updateIntroduction"></u--input>
			</u-form-item>
			<!-- 性别遮罩层 -->
			<u-action-sheet :show="isSexshow" :actions="actions" title="请选择性别" @close="isSexshow = false" @select="handlSexSelect"></u-action-sheet>

			<u-button type="primary" text="确定" @click="successRegister"></u-button>
			<u-button type="error" text="重置" @click="reRegister"></u-button>
			<!-- 生日遮罩层 -->
			<u-datetime-picker
				:show="isBirthdayShow"
				mode="date"
				:minDate="minDate"
				:maxDate="maxDate"
				title="请选择生日"
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
			isSexshow: false,
			minDate: null,
			maxDate: null,
			user: {
				name: '',
				sex: '',
				phone: '',
				birthday: '',
				address: '',
				introduction: ''
			},
			actions: [
				{
					name: '男'
				},
				{
					name: '女'
				}
			]
		};
	},
	mounted() {
		this.minDate = 852077000000;
		this.maxDate = Date.parse(new Date());
	},
	methods: {
		updateName(newname) {
			this.user.name = newname;
		},

		handlSexSelect(e) {
			this.user.sex = e.name;
		},

		handleBirthdaySelect() {
			this.isBirthdayShow = true;
		},

		handleBirthdayClose() {
			this.isBirthdayShow = false;
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
			this.user.birthday = oTime;
		},

		setBirthday(ticks) {
			this.formatMsToDate(ticks);
		},

		updatePhone(newphone) {
			this.user.phone = newphone;
		},

		updateAddress(newaddress) {
			this.user.address = newaddress;
		},

		updateIntroduction(newIntroduction) {
			this.user.introduction = newIntroduction;
		},

		successRegister() {
			uni.navigateTo({
				url: '../contact/contact'
			});
		},

		reRegister() {
			(this.user.name = ''), (this.user.sex = ''), (this.user.birthday = '');
			(this.user.phone = ''), (this.user.address = ''), (this.user.introduction = '');
		}
	}
};
</script>

<style></style>
