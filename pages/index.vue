<template>
  <div class="main-title">
    あんしん運転サポートサービス
    <div>
      <img :src="logo()">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name:'Index',
  methods :{
    logo() :string{
      const logoUrl = 'https://haruhikobacket.s3.us-east-2.amazonaws.com/005macrooioi119_TP_V.jpg'
      return logoUrl
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
