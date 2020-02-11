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
    justify-content: space-between;
    /* border: 1px solid #000; */

  }

  .header {
    background-image: linear-gradient(to right, #3e3e59, #454573);
    padding: 18px 0;
    
    &-menu {
      padding: 30px 0;

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

        &:before {
          content: "";
          margin-left: 25px;
        }

        &:after {
          content: "";
          margin-right: 25px;
        }

        &:hover {
          color: #383bcf;
          border-bottom: 3px solid #383bcf;
        }
      }

      &__link {}
    }

    &-info {
      display: flex;
    }

    &__title{
      opacity: 0.5;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      line-height: 2.43;
      text-align: left;
      margin: auto 0;
      /* padding-top: 5px; */
    }
    
    &-btn {
      opacity: 0.7;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      line-height: 1.5;
      text-align: left;
      margin: auto 0;
      
      &:hover {
        text-decoration: underline;
      }
     }
  }

  .user-info {
    display: flex;
    align-items: center;
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
      line-height: 1.89;
      letter-spacing: normal;
      text-align: left;
      margin-right: 25px;
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

  .about {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    padding: 60px;
    
    background-color: #f7f9fe;

    &__info {
      display: flex;
      align-items: center;
      padding-bottom: 60px;
    }
    &__section {
      display: flex;
      align-items: stretch;
      flex-wrap: wrap;
      /* flex-direction: row; */
      margin-left: -30px;
      /* border: 2px solid blue; */

    }
    &__form-title {
      border: 0;
      width: 60%;
      padding: 5px 0;
      flex: .6;
      border-bottom: 1px solid #000;
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
    
  }
  .review-edit {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    padding: 60px;
    background-color: #f7f9fe;
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
    padding: 60px;
    
    &__list {
      
      
      display: flex;
      flex-wrap: wrap;
      margin-left: -30px;
      /* justify-content: space-between; */
      
    }
    
    &__item{
      width: calc(100% / 3 - 30px);
      margin-left: 30px;
      padding: 20px;
      margin-bottom: 30px;
      box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
      &--add{
       
        background-image: linear-gradient(to right, #006aed, #3f35cb);
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

      &-btn {
        
        width: 100px;
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

        &:before {
        
          width: 150px;
          height: 150px;
          border: 2px solid #fff;
          border-radius: 50%;
          content:"";
          margin-bottom: 20px;
          
        
        }
        &:after {
          position: absolute;
          margin-top: 60px; 
          
          font-size: 72px;
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
  background-color: #f4f4f4;
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
  color:#414c63;
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
  color: #383bcf;
  margin-bottom: 20px;
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
    /* border: 2px solid purple; */
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
      /* border: 1px solid #000; */

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
    }
    &__content {
      min-height: 200px;
      /* border: 1px solid green; */

      &--about {
        
      }
      &--work {
        
       width: 50%; 
       
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
    &__load {
      width: 50%;
      
      padding: 0 10px;
      margin-right: 20px;
      
      
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
        background: none;
        &--edit {
          border-bottom: 1px solid #000;
        }
        
        
      }
      &-value{

        border:none;
        width: 45px;
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
         width: 12%;
        &--edit {
          border-bottom: 1px solid #000;  
        }         
         /* border: 2px solid red;  */
        &:after {
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
        border-bottom: 1px solid #1f232d;
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
        
      }
      &-btn{
        /* border: 1px solid red; */
        font-size: 30px;
        font-weight: 600;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #383bcf;
        background: none;
        margin-right: -25px;

        &:before {
          width: 100%;
          height: 100%;
          padding: 1px 11px;
          content: "+";
          font-size: 30px;
          margin-right: 15px;
          color: #fff;
          border-radius: 50%;
          background-image: linear-gradient(to right, #006aed, #3f35cb);

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
  }
  .add__btn {
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    line-height: 2.12;
    letter-spacing: normal;
    text-align: left;
    color: #383bcf;
    background: none;
    &:before {
      width: 100%;
      height: 100%;
      padding: 1px 6px;
      content: "+";
      font-size: 15px;
      margin-right: 15px;
      color:#fff;
      border-radius: 50%;
      background-image: linear-gradient(to right, #006aed, #3f35cb);

    }
  }
  .broad {
    &--half {
      width: calc(50% - 30px);
    }
    &--full {
      margin-left: 0;
    }
  }
//Отзывы
.form__review {
  
  width: 100%;
  margin-right: 200px;
  
}
.form__content--review {
  margin-top: 50px;
  display: flex;
  
}
.form__review-row {
   width: 100%;
   margin-bottom: 30px;
    
}
.form__review-row--one {
   display: flex;
   width: 100%;
  
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
  color: #383bcf;
  
  
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

.form__input {
  width: 100%;
  border: none;
  background: none;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
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
  border-color: rgba (65,76,99,.2)
}
.save__btn {
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 50px;
  padding: 24px 40px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
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

<template lang="pug">
  .wrapper  
    header.header
      .container
        .header-info
          .user-info
            .user-info__photo
              img(src="../images/content/user.jpg").user-info__photo-img
            .user-info__name Котов Олег
          .header__title Панель администрирования
        a.header-btn Выйти
    nav.header-menu
      .container
        ul.header-menu__list
          li.header-menu__item
            a(href="#").header-menu__link Обо мне
          li.header-menu__item
            a(href="#").header-menu__link Работы
          li.header-menu__item
            a(href="#").header-menu__link Отзывы
    main.content 
      .container.about
        .about__info
          h2.section__title Блок "Обо мне"
          a(href="#").add__btn Добавить группу
        .about__section
          form.form.about__form.broad--half
            .form__title 
              input(name="name" value="Название новой группы" disabled="true").about__form-title
              .form__buttons
                button(name="add").form__add-btn
                button(name="remove").form__remove-btn
            .form-slicer
            .form__content
            .form__controls
              input(name="name" type="text" placeholder="Новый навык").form__controls-name
              .form__controls-value-wrapper
                input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
              button(href="").form__controls-btn
            
          form.form.about__form.broad--half
            .form__title 
              input(name="name" value="Workflow").about__form-title
              .form__buttons
                button(name="add").form__add-btn
                button(name="remove").form__remove-btn
            .form-slicer
            .form__content.form__content--about
              .form__row
                input(name="name" type="text" placeholder="HTML").form__row-name
                .form__row-value-wrapper
                  input(name="name" type="number" placeholder="50").form__row-value
                .form__buttons
                  button(name="add").form__edit-btn
                  button(name="remove").form__bin-btn
              .form__row
                  input(name="name" type="text" placeholder="HTML").form__row-name
                  .form__row-value-wrapper
                    input(name="name" type="number" placeholder="50").form__row-value
                  .form__buttons
                    button(name="add").form__edit-btn
                    button(name="remove").form__bin-btn
            .form__controls
              input(name="name" type="text" placeholder="Новый навык").form__controls-name
              .form__controls-value-wrapper
                input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
              button(href="").form__controls-btn
          form.form.about__form.broad--half
            .form__title.form__title--edit
              input(name="name" value="Frontend").about__form-title
              .form__buttons
                button(name="add").form__edit-btn
            .form-slicer
            .form__content.form__content--about
              .form__row
                input(name="name" type="text" placeholder="HTML").form__row-name.form__row-name--edit
                .form__row-value-wrapper.form__row-value-wrapper--edit
                  input(name="name" type="number" placeholder="50" min="0" max="100").form__row-value
                .form__buttons
                  button(name="add").form__add-btn
                  button(name="remove").form__remove-btn
              .form__row
                  input(name="name" type="text" placeholder="HTML").form__row-name
                  .form__row-value-wrapper
                    input(name="name" type="number" placeholder="50" min="0" max="100").form__row-value
                  .form__buttons
                    button(name="add").form__edit-btn
                    button(name="remove").form__bin-btn
            .form__controls
              input(name="name" type="text" placeholder="Новый навык").form__controls-name
              .form__controls-value-wrapper
                input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
              button(href="").form__controls-btn
      //- Работы

      .container.review-edit
        .review-edit__info
          h2.section__title Блок "Работы"
        .review-edit__section
          .form.broad--full
            .form__title 
              input(name="name" value="Редактирование работы").review-edit__form-title
            .form-slicer
            .form__wrapper.form__wrapper--work
              .form__load
                .form__load-content
                  .form__load-text Перетащите или загрузите для загрузки изображения
                  button(type="submit" value="Сохранить").save__btn.save__btn--load Загрузить
              form(action).form__content.form__content--work
                .form__review  
                  .form__review-row
                    label.form__label
                      .form__label-title
                        span Название
                      input.form__input(type="text" placeholder="Дизайн сайта для авто салона Porsche" name="name")
                    label.form__label
                      .form__label-title
                        span Ссылка
                      input.form__input(type="text" placeholder="https://www.porsche-pulkovo.ru" name="link")
                  .form__review-row
                    label.form__label-message
                      .form__label-title
                        span Описание
                      textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей" rows="5" name="comment").form__textarea
                  .form__review-row
                    label.form__label
                      .form__label-title
                        span Добавление тэга
                      input.form__input(type="text" placeholder="Jquery, Vue.js, HTML5" name="name")                      
                  .form__review-row
                    .work__tags
                      ul.tags
                        li.tags__item 
                          button.tags__btn HTML
                        li.tags__item 
                          button.tags__btn CSS
                        li.tags__item 
                          button.tags__btn Javascript
      
                  .form__review-row.form__review-row--btn
                    button(type="reset" value="Отмена").reset__btn.form__user-photo-btn Отмена
                    button(type="submit" value="Сохранить").save__btn Сохранить

        .review__section
          ul.review__list
            li.review__item.review__item--add
              .review__content
                .review__add
                  button.review__add-btn Добавить работу
            li.review__item.review__item--work
              .work__preview
                img(src="../images/content/1.jpg")
                .work__preview-tags
                  ul.preview-tags__list
                    li.preview-tags__item HTML
                    li.preview-tags__item CSS
                    li.preview-tags__item Javascript    
                    li.preview-tags__item Javascript 
                    li.preview-tags__item Javascript 
              .work__content
                .work__title Сайт школы образования
                .work__text 
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .work__link  http://loftschool.ru
                .work__controls
                  button.review__btn.review__btn--edit Править
                  button.review__btn.review__btn--remove Удалить
            li.review__item.review__item--work
              .work__preview
                img(src="../images/content/2.jpg")
              .work__content
                .work__title Сайт школы образования
                .work__text 
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .work__link  http://loftschool.ru
                .work__controls
                  button.review__btn.review__btn--edit Править
                  button.review__btn.review__btn--remove Удалить
            li.review__item.review__item--work
              .work__preview
                img(src="../images/content/3.jpg")
              .work__content
                .work__title Сайт школы образования
                .work__text 
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .work__link  http://loftschool.ru
                .work__controls
                  button.review__btn.review__btn--edit Править
                  button.review__btn.review__btn--remove Удалить
 

      
              
      //- Отзывы
      .container.review-edit
        .review-edit__info
          h2.section__title Блок "Отзывы"
        .review-edit__section
          .form.broad--full
            .form__title 
              input(name="name" value="Новый отзыв").review-edit__form-title
            .form-slicer
            .form__wrapper
              form(action).form__content.form__content--review
                .form__user
                  .form__user-photo
 
                  button.form__user-photo-btn Добавить фото
                .form__review  
                  .form__review-row.form__review-row--one
                    label.form__label
                      .form__label-title
                        span Имя автора
                      input.form__input(type="text" placeholder="Ковальчук Дмитрий" name="name")
                    label.form__label
                      .form__label-title
                        span Титул автора
                      input.form__input(type="text" placeholder="Основатель LoftSchool" name="occup")
                  .form__review-row
                    label.form__label-message
                      .form__label-title
                        span Отзыв
                      textarea(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!" rows="5" name="comment").form__textarea
                  .form__review-row.form__review-row--btn
                    button(type="reset" value="Отмена").reset__btn.form__user-photo-btn Отмена
                    button(type="submit" value="Сохранить").save__btn Сохранить
      
      
        
        
        .review__section
          ul.review__list
            li.review__item.review__item--add
              .review__content
                .review__add
                  button.review__add-btn Добавить отзыв
            li.review__item
              .review__content
                .user-info.user-info--review
                  .user-info__photo
                    img(src="../images/content/sv.jpg").user-info__photo-img
                  .user-info__desc
                    .user-info__name.user-info__name--review Владимир Сабанцев
                    .user-info__occup Преподаватель
                .review__slicer
                .review__text 
                  p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .review__controls
                  button.review__btn.review__btn--edit Править
                  button.review__btn.review__btn--remove Удалить
            li.review__item
              .review__content
                .user-info.user-info--review
                  .user-info__photo
                    img(src="../images/content/dk.jpg").user-info__photo-img
                  .user-info__desc
                    .user-info__name.user-info__name--review Ковальчук Дмитрий
                    .user-info__occup Основатель Loftschool
                .review__slicer
                .review__text 
                  p Этот код выдержит любые иasdasdsad sadasdasd asdads спытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .review__controls
                  button.review__btn.review__btn--edit Править
                  button.review__btn.review__btn--remove Удалить
            li.review__item
              .review__content
                .user-info.user-info--review
                  .user-info__photo
                    img(src="../images/content/dk.jpg").user-info__photo-img
                  .user-info__desc
                    .user-info__name.user-info__name--review Ковальчук Дмитрий
                    .user-info__occup Основатель Loftschool
                .review__slicer
                .review__text 
                  p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишadsdsadds sadasd sadas dasd sa dsasdsad sadком старых браузерах
                .review__controls
                  button.review__btn.review__btn--edit Править
                  button.review__btn.review__btn--remove Удалить


</template>