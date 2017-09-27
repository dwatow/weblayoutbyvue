<template>
<div id="forms">
  <p>name: {{forms.name}}</p>
  <p>email: {{forms.email}}</p>
  <p>phone_number: {{forms.phone_number}}</p>
  <p v-if="forms.gender">gender: {{forms.gender}}</p>
  <form>
    <input v-model="forms.name" type="text" placeholder="Your Name"@blur="vailname"><span v-if="forms.nameerror">名字有人和你一樣!!</span>
    <input v-model="forms.email" type="email" placeholder="Your Email" @blur="fuck"><span v-if="forms.emailerror">信箱格式錯了唷!!</span>
    <input v-model="forms.phone_number" type="number" placeholder="Your Phone Number"@blur="vailphone"><span v-if="forms.phoneerror">電話格式錯囉</span>
    <select v-model="forms.gender">
     <option disabled value="">what is your gender</option >
     <option v-for="item in forms.genderoption" v-bind:value="item.key">{{item.key}}</option >
     <!-- <option value="female">female</option>
     <option value="male">male</option> -->
   </select>
   <input type="submit" value="Submit to me" :value="vailpass" :disabled="vailpass">
 </form>
</div>
</template>

<script>
export default {
  name: 'forms',
  data () {
    return {
      forms: {
        name: '',
        email: '',
        phone_number: '',
        gender: '',
        genderoption: [
          {key: 'male', value: '男'},
          {key: 'female', value: '女'}
        ],
        emailerror: false,
        nameerror: false,
        phoneerror: false
      }
    }
  },
  computed: {
    vailpass: function () {
      const isEmpty = this.forms.phone_number === '' || this.forms.email === '' || this.forms.name === ''
      return this.forms.phoneerror || this.forms.nameerror || this.forms.emailerror || isEmpty
    }
  },
  methods: {
    vailphone: function () {
      // console.log('vailphone')
      this.forms.phoneerror = this.forms.phone_number.length > '0938383838'.length
    },
    vailname: function () {
      // console.log('vailname')
      this.forms.nameerror = this.forms.name.match(/chris/)
    },
    fuck: function () {
      this.forms.emailerror = !this.forms.email.match(/@/)
    }
  }
}
</script>

<style>
</style>
