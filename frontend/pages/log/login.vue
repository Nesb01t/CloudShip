<template>
  <u-input
    placeholder="请输入内容"
    border="surround"
    v-model="value"
    @change="change"
  ></u-input>

</template>

<script>
	export default {
      data() {
        return {
          value: ''
        }
      },
      methods: {
        change(e) {
          console.log('change', e);
        }
      }
	}
</script>