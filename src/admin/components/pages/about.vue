<template lang="pug">
  .about
    .container.container--about
      .about__info
        h2.section__title Блок "Обо мне"
        a(href="#").add__btn Добавить группу
      .about__section
        form(@submit.prevent="addNewCategory").form.about__form.broad--half
          .form__title 
            input(name="name" value="Название новой группы" v-model='title').about__form-title
            .form__buttons
              button(type="submit" name="add").form__add-btn
              button(name="remove").form__remove-btn
          .form-slicer
          .form__content
          .form__controls
            input(name="name" type="text" placeholder="Новый навык").form__controls-name
            .form__controls-value-wrapper
              input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
            button(type="submit").form__controls-btn
         
        
        form().form.about__form.broad--half(v-for="category in categories" :key="category.id")
          pre {{category.id}}  
          .form__title 
            input(name="name" value="" v-model="category.category").about__form-title
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
          form(@submit.prevent="addNewSkill").form__controls
            pre {{category.id}}
            input(name="name" type="text" placeholder="Новый навык" v-model='skill.title').form__controls-name
            .form__controls-value-wrapper
              input(name="name" type="number" placeholder="100" min="0" max="100" v-model='skill.percent').form__controls-value
            button(type="submit").form__controls-btn
      
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  data: function() {

    return {
      title: "",
      skill: {
        title: "",
        percent: 0,
        category: 0
      }
    }
  },
  computed: {
    ...mapState('categories',{
      categories: state => state.categories
    })
    
  },
  created(){
    this.fetchCategories();
    console.log(this.categories);
  },
  methods: {
    ...mapActions('categories',['addCategory','fetchCategories','addSkill']),
    async addNewCategory() {
      try {
        await this.addCategory(this.title);
      } catch (error) {
        alert(error.message);
      }
    },
    async addNewSkill() {
      try {
        console.log(this.skill);
        
        // await this.addSkill(this.skill);
      } catch (error) {
        alert(error.message);
      }
    }
  }
}
</script>






<style lang="postcss">
  @import "../../../styles/mixins.pcss";
  @import "normalize.css";
  @import "../../../styles/layout/base.pcss";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  
.about {
    /* border: 1px solid yellow; */
    position: relative;
    &:before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;   
    position: fixed;  
    content:"";
    background-image: url('../../../images/content/trainbridge.png');
    background-size: cover;
    background-repeat: no-repeat;
     opacity: 0.5; 
    z-index: -10;
    
    }
     
    
    
    &__info {
      display: flex;
      align-items: center;
      padding-bottom: 60px;
      @include phones {
        flex-direction:column;
        align-items: flex-start;
        padding-bottom: 40px;
      }
      /* border: 2px solid yellow; */
    }
    &__section {
      display: flex;
      align-items: stretch;
      flex-wrap: wrap;
      /* flex-direction: row; */
      margin-left: -30px;
      

    }
    &__form {
      color: #000;
    }
    &__form-title {
      border: 0;
      width: 60%;
      @include tablets {
        
      }
      padding: 5px 0;
      flex: .6;
      @include tablets {
       flex: 1; 
      }
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
</style>