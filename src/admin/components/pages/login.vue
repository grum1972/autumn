<template lang="pug">
  .auth
    .auth__wrapper
      form(@submit.prevent="login").auth-form 
        span.auth-form__title Авторизация
        label.auth-form__label-user
          .auth-form__label-title
            span Логин
          input.auth-form__input(type="text" placeholder="Login" name="login" v-model='user.name')
        label.auth-form__label-key
          .auth-form__label-title
            span Пароль
          input.auth-form__input(type="password" placeholder="Password" name="pass" v-model="user.password")  
        button(type="submit" value="Отправить").auth-form__btn Отправить
      pre {{user}}  
</template>
<script>
import $axios from '../../requests';
import {mapActions} from 'vuex';
export default {
  
  data: () => ({
    user: {
      name: '',
      password: ''
    }
  }),

  methods: {
        ...mapActions('user',['setUser']),
    async login() {
     try {
       const response = await $axios.post('/login',this.user);
       
       const token = response.data.token;
       localStorage.setItem('token',token);
       $axios.defaults.headers['Authorization'] =  `Bearer ${token}`;
       
      console.log('222');
      
      this.$router.replace('/');
       
     } catch (error) {
       console.log(error);
       
     }

    }
  }
}
</script>