
<template lang="pug">
  .wrapper
    template(v-if="$route.meta.public")  
      router-view
    template(v-if="!$route.meta.public")
      header.header
        .container
          .header-content
            
            .user-info__photo
                img(src="../images/content/user.jpg").user-info__photo-img
            .user-info
              .user-info__name Котов Олег
              .header__title Панель администрирования
              a(@click='goExit').header-btn Выйти
      nav.header-menu
        .container
          ul.header-menu__list
            li.header-menu__item
              a(@click='goAbout').header-menu__link Обо мне
            li.header-menu__item
              a(@click='goWorks').header-menu__link Работы
            li.header-menu__item
              a(@click='goReviews').header-menu__link Отзывы
      main.content
        router-view 
</template>

<script>
import login from './components/pages/login';
import works from './components/pages/works.vue';
import about from './components/pages/about.vue';
import reviews from './components/pages/reviews';
import skillsGroup from './components/skillsGroup';
import addGroup from './components/addGroup';
export default {
  name: 'app',
  components: {
    login,
    about,
    works,
    reviews,
    skillsGroup,
    addGroup
  },
  data (){
    return{
    }
  },
  methods: {
    goReviews(){
      this.$router.push('/reviews');
    },
    goAbout(){
      this.$router.push('/');
    },
    goWorks(){
      this.$router.push('/works');
    },
    goExit(){
      this.$router.push('/login');
    }
  }
}
</script>
<style lang="postcss">
  @import "../styles/mixins.pcss";
  @import "normalize.css";
  @import "../styles/layout/base.pcss";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  .wrapper {
    /* display: flex; */

    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
  }

  .container {
    width: 100%;
    display: flex;
    padding: 0 30px;
    @include tablets {
      padding: 0 10px;
    }
    justify-content: space-between;
    

  }
  
  .auth{
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    &__wrapper{
      
      background: #fff;
      /* border: 1px solid green; */
      width: 550px;
      padding: 60px;
      @include phones {
        width: 100%;
        height: 100%;  
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  
  &-form {
      display: flex;
      flex-direction:column;
      align-items: center;
    
    &__label-user {
      width: 100%;
      

      border-bottom: 1px solid #2d3c4e;
      padding-left: 40px;
      margin-bottom: 40px;
      position: relative;

      &:hover {
        border-bottom: 1px solid #ff9a00;
      }

      &:after {
        position: absolute;
        bottom: 10px;
        left: -60px;
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-left: 60px;
        background-image: svg-load("user.svg", fill="#2d3c4e");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: .3;
      }

      &:hover:after {
        background-image: svg-load("user.svg", fill="#ff9a00");
        opacity: 1;
      }

    }
    &__label-key {
      
      width: 100%;
      @include phones {
        margin-right: 0;
        width: 100%;
      }

      border-bottom: 1px solid #2d3c4e;
      padding-left: 40px;
      position: relative;

      &:hover {
        border-bottom: 1px solid #ff9a00;
      }

      &:after {
        position: absolute;
        bottom: 10px;
        left: -60px;
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-left: 60px;
        background-image: svg-load("key.svg", fill="#2d3c4e");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: .3;
      }

      &:hover:after {
        background-image: svg-load("key.svg", fill="#ff9a00");
        opacity: 1;
      }

    }
    &__input {
      
      width: 100%;
      border: none;
      background: none;
      font-size: 18px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.67;
      letter-spacing: normal;
      text-align: left;
      color: #414c63;
    }
    &__input::placeholder {
      font-size: 18px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.67;
      letter-spacing: normal;
      text-align: left;
      color: rgba(65, 76, 99, 0.3);
      /* margin-top: 20px; */
    }

    &__title {
      color: rgba(65, 76, 99, 1);
      font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
    }
    &__label-title {
      color: rgba(65, 76, 99, 0.3);
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.88;
      letter-spacing: normal;
      text-align: left;
    }
    &__btn {
      margin-top: 40px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 30px 120px;
      border-radius: 35px 0 35px 0;

      &:hover {
        background-image: linear-gradient(to right, #ff7f00, #ff9d00);
      }

      background-image: linear-gradient(to right, #f29400, #ea7400);
      color:#fff;

    }
  }
  }
  .header {
    background-image: linear-gradient(to right, #3e3e59, #454573);
    padding: 18px 0;
    
    &-menu {
      
      background: #fff;

      &__list {
        display: flex;
      }

      &__item {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.25;
        letter-spacing: normal;
        text-align: center;
        color: #414c63;
        padding: 25px 0;
        border-bottom: 3px solid transparent;
        
        &:before {
          content: "";
          margin-left: 25px;
        }

        &:after {
          content: "";
          margin-right: 25px;
        }

        &:hover {
          color: #ff9a00;
          border-bottom: 3px solid #ff9a00;
        }
      }

      &__link {}
    }

    &-content {
      display: flex;
      width: 100%;
      align-items: center;
      @include phones {

      }
      /* border: 1px solid #fff; */
    }

    &__title{
      opacity: 0.5;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      line-height: 2.43;
      text-align: left;
      /* margin: auto 0; */
      /* border: 1px solid red; */
      @include phones {
       display: none; 
      }
      /* padding-top: 5px; */
    }
    
    &-btn {
      opacity: 0.7;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      line-height: 1.5;
      text-align: left;
      margin-left: auto;
      @include phones{
      margin-left: 0;
    } 
      /* border: 1px solid red; */
      
      &:hover {
        text-decoration: underline;
      }
     }
  }

  .user-info {
    display: flex;
    align-items: center;
    /* border: 2px solid greenyellow; */
    width: 100%;
    @include phones{
      flex-direction:column;
      align-items: flex-start;
    }
    &--review {
      padding: 10px;
    }
    
    &__photo {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
    }
    &__photo-img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
    &__name{
      font-size: 18px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.42;
      letter-spacing: normal;
      text-align: left;
      margin-right: 25px;
      /* border: 1px solid blue; */
      &--review {
        
        font-weight: bold;
        
        color:#414c63;
  
      }
    }
    &__occup{
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.42;
      letter-spacing: normal;
      text-align: left;
      color: rgba(65, 76, 99, 0.5)
    }
    
    &__desc {

    }
  }
  .content {
     /* background-color: #f7f9fe;  */
    
  }
  .container--about {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    padding: 60px 30px;
    @include tablets {
      padding: 20px 10px;
    }
    /* background-color: #f7f9fe;  */
    
  }  
    
  
  .review-edit {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    padding: 60px 30px;
    /* background-color: #f7f9fe; */
    &__form-title {
      border: 0;
      width: 100%;
      padding: 5px 0;
      color: #414c63;
      background: 0;
      font-size: 18px;
      font-weight: 600;
      &:focus{
        outline: none;
      }
      &:disabled{
        opacity: 0.5;
      }
    }
    &__info {
      margin-bottom: 60px;
    }
  }
  
  .review {
    /* border: 1px solid red; */
    padding: 60px 30px;
    
    &__list {
      
      
      display: flex;
      flex-wrap: wrap;
      margin-left: -30px;
      /* justify-content: space-between; */
      
    }
    
    &__item{
      width: calc(100% / 3 - 30px);
      @include tablets {
        width: calc(50% - 30px);
      }
      @include phones {
        width: calc(100% - 30px);
      }
      margin-left: 30px;
      padding: 20px;
      margin-bottom: 30px;
      box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
      background: #FFF;
      &--add{
        /* @include desktop {
          background: red;
        } */
        background-image: linear-gradient(to right, #f29400, #ea7400);
        &:hover{
            background-image: linear-gradient(to right, #ff7f00, #ff9d00);
        }  
      }
      &--work{
       padding: 0;
        
      }  
    }
    &__content {
      
      height: 100%;
      display: flex;
      flex-direction: column;
      
      
      
    }
    &__slicer{
      margin-top: 20px;
      width: 100%;
      height: 1px;
      opacity: 0.15;
      background-color: #1f232d;
    }
    &__add {
      
      padding: 0 0px;
      display: flex;

      flex-direction: column;
      align-items: center;
      margin: 75px 0 ;
        @include phones {
          margin: 30px 0 ;
        }

      
      

      &-btn {
      
        width: 100px;
        @include phones {
          width: 100%;
        }
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.67;
        letter-spacing: normal;
        text-align: center;
        background: none;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        @include phones {
          flex-direction: row;
          justify-content: flex-start;
        }

        &:before {
          
          width: 150px;
          height: 150px;
          @include phones {
            width: 50px;
          height: 50px;
          }
          border: 2px solid #fff;
          border-radius: 50%;
          content:"";
          margin-bottom: 20px;
          @include phones {
            margin-right: 20px;
            margin-bottom: 0px;
           }
        
        }
        &:after {
          
          position: absolute;
          margin-top: 60px; 
          
          font-size: 72px;
          @include phones {
            margin-top: 0;
            margin-left: 19px;
            font-size: 36px;
          }
          font-weight: 300;
          line-height: .42;
          content:"+";
          
        }
      }
    }
    &__text{
      flex:1; 
      padding: 30px 10px;
      
      font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: rgba(65, 76, 99, 0.7);
    }
    &__controls{
      
      display: flex;
      justify-content: space-between;
      
    }
    &__btn {
      
      font-size: 16px;
      font-weight: 600;
      line-height: 1.88;
      text-align: left;
      color: rgba(65, 76, 99, 0.5);
      background: none;
      &:hover {
        text-decoration: underline;
        color: #ff9a00; 
      }

      display: flex;
      align-items: center;
      &--edit{
      &:after {
        
        content: "";
        width: 16px;
        height: 16px; 
        
        background: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%) no-repeat; 
        margin-left: 20px;
        
        }
      }
      
      &--remove{
        &:after {
        
        content: "";
        width: 14px;
        height: 14px; 
        
        background: svg-load("remove.svg", fill=#c92e2e, width=100%, height=100%) no-repeat; 
        margin-left: 20px;
        
        }
      }
    }
  
  }
  .tags {
  display: flex;
}
.tags__item {
  margin-right: 10px;
}
.tags__btn {
  padding: 10px 15px;
  border-radius: 15px;
  background-color: #ff2f4;
  color: #2f3642;
  display: flex;
      align-items: center;
    &:after {
      
        content: "";
        width: 11px;
        height: 11px; 
        background: svg-load("remove.svg", fill=#414c63, width=100%, height=100%) no-repeat; 
        margin-left: 10px;
  }

  &:last-child {
    margin-right: 0;
  }
}
/* Работы */
  .preview-tags__list {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

  }
  .preview-tags__item {
    margin-left: 8px;
    padding: 8px 18px;
    border-radius: 15px;
    background: #fff;
    color: rgba(40, 51, 64, 0.7);
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 10px;

    
  }
  .work {
     
     &__preview {
       width: 100%;
       
       position: relative;
       &-tags {
         position: absolute;
         
         bottom: 0;
         right: 0;
         padding: 10px;

       }
     }
     &__preview-img {
       width: 100%;
      height: 100%;
      object-fit: cover;
       border: 1px solid blue;
     }
     &__content {
       width: 100%;
       
       padding: 30px 20px;
     }
     &__title {
       padding: 0 10px;
       font-size: 18px;
       font-weight: bold;
       font-stretch: normal;
       font-style: normal;
       line-height: 1.67;
       letter-spacing: normal;
       text-align: left;
       color: #414c63;
       margin-bottom: 25px;
     }

     &__text {
       padding: 0 10px;
       padding-right: 20px;
       font-size: 16px;
       font-weight: 600;
       font-stretch: normal;
       font-style: normal;
       line-height: 1.88;
       letter-spacing: normal;
       text-align: left;
       color: rgba(65, 76, 99, 0.7);
       margin-bottom: 30px;
     }

     &__link {
       padding: 0 10px;
       font-size: 16px;
       font-weight: 600;
       font-stretch: normal;
       font-style: normal;
       line-height: 1.88;
       letter-spacing: normal;
       text-align: left;
       color: #ff9a00;
       margin-bottom: 20px;
       /* &:hover {
         text-decoration: underline;
       } */
       
     }
     &__controls{
      display: flex;
      justify-content: space-between;}
  }
  .form {
    padding: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background: rgba(255,255,255,.9);
    
    &__title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* border: 1px solid green;  */
    }
    &__buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: 60px;
      @include tablets {
        margin-left: 20px;
      }
      

      /* border: 1px solid red; */
    }
    &__add-btn {
      width: 15px;
      height: 15px;      
      background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%) no-repeat;
      margin-right: 20px;
    }
    &__remove-btn {
      width: 14px;
      height: 15px;      
      background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%) no-repeat;
      
    }
    &-slicer {
      margin-top: 15px;
      width: 100%;
      opacity: 0.15;
      border-bottom: 1px solid #1f232d;
      margin-bottom: 30px;
    }
    &__wrapper--work {
      display: flex;
      margin-top: 50px;
      /* border: 1px solid #000; */
      @include tablets {
        flex-direction:column;
        align-items: center;
        /* width: 80%; */
      }
    }
    &__content {
      min-height: 200px;
      /* border: 1px solid green; */

      &--about {
        
      }
      &--work {
        
       width: 50%; 
       @include tablets {
         padding: 20px 100px 0 100px;
         width: 100%; 
       }
       @include phones {
         padding: 0;
         width: 100%; 
       }
      }
    }
    &__load-content {
      
      background: #dee4ed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 65px;
      border: 1px dashed #a1a1a1;
      

    }
    &__edit-content {
      display: none;
      @include tablets {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 110px;
      }
      @include phones {
        padding: 0px;
      }
    }
    &__load {
      
      width: 50%;
      padding: 0 10px;
      margin-right: 20px;
      @include tablets {
        display: none;
      }
      
      &-text {
        margin-top: 10px;
        width: 50%;
        font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.12;
  letter-spacing: normal;
  text-align: center;
  color: rgba(65, 76, 99, 0.5);
  margin-bottom: 30px;
      }
      
    }
    &__row {
      display: flex;
      flex-flow: row nowrap; 
      margin-bottom: 10px; 
      
     
      
      &-name {
        
         width:70%; 
         @include tablets{
         width:60%; 
         }
        /* outline:none; */
        
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        text-align: left;
        color: #414c63;
        margin-right: 20px;
        border: none;
        /* border: 1px solid red; */
        background: none;
        &--edit {
          border-bottom: 1px solid #000;
          &:hover{
          border-bottom: 1px solid #ff9a00;
          } 
        }
        
        
      }
      &-value{

        border:none;
        width: 60%;
        @include tablets{
           width: 50%;
         }
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        text-align: left;
        color: #414c63;
        background: none;
        
      }
      &-value-wrapper {
        
          width: 20%; 
         /* border: 1px solid #000; */
        &--edit {
          border-bottom: 1px solid #000; 
         &:hover{
          border-bottom: 1px solid #ff9a00;
          } 
        }         
         /* border: 2px solid red;  */
        &:after {
          /* border: 1px solid green; */
          font-size: 16px;
          width: 20px;
          height: 20px;
          content: "%";
          color: #414c63;
          text-align: left;
          margin-left: 5px;
          /* color:red; */
          /* border: 2px solid blue; */
        } 
      }
    }
    

    &__pencil-btn{
      width: 15px;
      height: 15px; 
      background: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%) no-repeat;
      margin-right: 30px;
    }
    &__edit-btn{
      width: 14px;
      height: 15px;      
      background: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%) no-repeat;
      
    }
    &__bin-btn{
      width: 15px;
      height: 15px;      
      background: svg-load("trash.svg", fill=#414c63, width=100%, height=100%) no-repeat;
      margin-left: 20px;
    }
    

    &__controls {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      
      
      &-value-wrapper {
        border-bottom: 1px solid #000;
         &:hover{
          border-bottom: 1px solid #ff9a00;
        }
        margin-right: 20px;
        &:after {
          width: 20px;
          content: "%";
          color:#000;
          text-align: center;
          margin-right: 10px;
        }
      }
      &-value {
        width: 70%;
        border:none;  
        background: none;
        padding-left: 10px;
        padding: 15px;
      }

      &-name {
        width: 50%;
        padding-left: 20px;
        margin-right: 20px;
        background: none;
        border:none;  
        border-bottom: 1px solid #000;
        padding: 15px;
         &:hover{
          border-bottom: 1px solid #ff9a00;
        }
        
      }
      &-btn{
        /* border: 2px solid red; */
        font-size: 30px;
        font-weight: 600;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #ff9a00;
        background: none;
        margin-right: -25px;
        &:hover:before{
            background-image: linear-gradient(to right, #ff7f00, #ff9d00);
            
          }  
        &:before {
          width: 100%;
          height: 100%;
          padding: 1px 13px;
          content: "+";
          font-size: 30px;
          margin-right: 15px;
          color: #fff;
          border-radius: 50%;
          background-image: linear-gradient(to right, #f29400, #ea7400);
          
        }
      }
    }
    
    
  }
  .section__title {
    font-size: 21px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: normal;
    text-align: left;
    color: #414c63;
    margin-right: 60px;
    @include phones {
      margin-bottom: 20px;
    }
  }
  .add__btn {
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    line-height: 2.12;
    letter-spacing: normal;
    text-align: left;
    color: #ff9a00;
    &:hover {
      text-decoration: underline;
      
    }
    background: none;
     &:hover:before{
            background-image: linear-gradient(to right, #ff7f00, #ff9d00);
            
          }  
    &:before {
      width: 100%;
      height: 100%;
      padding: 1px 6px;
      content: "+";
      font-size: 15px;
      margin-right: 15px;
      color:#fff;
      border-radius: 50%;
      background-image: linear-gradient(to right,  #f29400, #ea7400);

    }
  }
  .broad {
    &--half {
      width: calc(50% - 30px);
      @include  phones {
        width: 100%;  
      }       
    }
    &--full {
      margin-left: 0;
    }
  }
//Отзывы
.form__review {
  
  width: 100%;
  margin-right: 200px;
  @include tablets {
    margin-right: 0px;
  }
}
.form__content--review {
  margin-top: 50px;
  display: flex;
  @include phones {
    flex-direction:column;
  }
}
.form__review-row {
   width: 100%;
   margin-bottom: 30px;
    
}
.form__review-row--one {
   display: flex;
   width: 100%;
@include phones {
   display: block;
}  
}
.form__work-row--btn {
  display: flex;
  justify-content: flex-end;
  @include tablets{ 
    justify-content: center;  
  }
}
.form__review-row--btn {
  display: flex;
  justify-content: flex-end;
  
}
.form__user {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  &-photo-btn {
    background: none;
    font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.12;
  letter-spacing: normal;
  text-align: center;
  color: #ff9a00;
  &:hover {
    text-decoration: underline;
  }
  
  }
}
.form__user-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #dee4ed;
  position: relative;
  margin-bottom: 25px;
  &:after {
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%,-50%);
    content: "";
    width: 104px;
    height: 132px;
    
    background: svg-load("user_adm.svg", fill=#fff, width=100%, height=100%) no-repeat;
    
    
  }
}
.form__label {
  width: 100%;  
  margin-right: 30px;
  
  
  &:last-child {
    margin-right: 0;
  }
}
.form__label-title {

  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: left;
  color: rgba(65, 76, 99, 0.5);
margin-bottom: 20px;


}
.form__input::placeholder {
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 3;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;
  margin-top: 20px;
  

}
.form__input:hover::placeholder {
  color: #ff9a00;
}

.form__input {
  width: 100%;
  border: none;
  background: none;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
  &:hover {
    border-bottom: 1px solid #ff9a00;
  }
}
.form__textarea:hover::placeholder {
  color: #ff9a00;
}

.form__textarea::placeholder {
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;
}
.form__textarea {

  width: 100%;
  background: none;
  padding: 25px 20px;
  border: solid 1px ;
  border-color: rgba (65,76,99,.2);
  &:hover {
    border-color: #ff9a00;
  }
}
.save__btn {
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 50px;
  padding: 24px 40px;
  border-radius: 30px;
  &:hover{
            background-image: linear-gradient(to right, #ff7f00, #ff9d00);
          }  
  background-image: linear-gradient(to right, #f29400, #ea7400);
  color:#fff;
  
  &--load {
    padding: 20px 40px;
    margin-left: 0;
    
  }
  
}
.reset__btn {
  padding: 0 10px;
}
</style>

