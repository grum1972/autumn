<template lang="pug">
  .about
    .container.container--about
      .about__info
        h2.section__title Блок "Обо мне"
        button(@click='toggleAddForm' v-if='!addForm').add__btn Добавить группу
      .about__section
        form(v-if='addForm').form.about__form.broad--half
          addGroup(@toggleAddForm="toggleAddForm")
        form.form.about__form.broad--half(v-for="category in categories" :key="category.id") 
          //- pre {{category}}
          skillsGroup(
             :category='category'
             :skills='filterCategorySkills(category.id)'
            )
        
      
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  data(){
    return {
      addForm:false
      }
  },
  components : {
    skillsGroup: () => import('../skillsGroup'),
    addGroup: () => import('../addGroup')
  },
  computed: {
    ...mapState('categories',{
      categories: state => state.categories
    }),
    ...mapState('skills',{
      skills: state => state.skills
    })
    
  },
  
  methods: {
    ...mapActions('categories', ['fetchCategories']),
    ...mapActions('skills',['fetchSkills']),
      filterCategorySkills(catid) {
        
        
        return this.skills.filter(skill => skill.category === catid)
      },
      toggleAddForm(){
        this.addForm = !this.addForm;
      }

    
  },
  async created(){
    try {
      await this.fetchCategories();  
    } catch (error) {
      console.log(error);
      
    }
    try {
      await this.fetchSkills();  
    } catch (error) {
      console.error(error);
      
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
    /* position: relative;
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
    z-index: -10; */
    
    /* } */
     
    
    
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