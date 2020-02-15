<template lang="pug">
  .auth
    .auth__wrapper
      form.auth-form 
        span.auth-form__title Авторизация
        label.auth-form__label-user
          .auth-form__label-title
            span Логин
          input.auth-form__input(type="text" placeholder="Login" name="login" v-model='user.name')
        label.auth-form__label-key
          .auth-form__label-title
            span Пароль
          input.auth-form__input(type="password" placeholder="Password" name="pass" v-model="user.pass")  
        button(type="submit" value="Отправить").auth-form__btn Отправить
      pre {{user}}  
</template>
<script>
export default {
  data(){
    return{
      user : {
        name:'',
        pass:''

      }
    }
  }
}
</script>