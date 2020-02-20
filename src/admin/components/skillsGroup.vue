<template lang="pug">
  .div1
    
    .form__title 
      
      input(name="name" value="1212" v-model="editedCategory.category").about__form-title
      .form__buttons
        button(name="add").form__add-btn
        button(name="remove" @click.prevent="delCurrentCategory").form__remove-btn
    .form-slicer
    //- pre {{editedCategory.id}}
    ul.form__content.form__content--about
      skillItem(v-for='skill in skills' :key='skill.id' :skill='skill')
      //- skillItem
    form(@submit.prevent="addNewSkill").form__controls
      
      input(name="name" type="text" placeholder="Новый навык" v-model="skill.title").form__controls-name
      .form__controls-value-wrapper
        input(name="name" type="number" placeholder="100" min="0" max="100" v-model="skill.percent").form__controls-value
      button(type="submit").form__controls-btn
      //- pre {{skill}}
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      editedCategory: {...this.category},
      skill: {
        title:"",
        percent:"",
        category:this.category.id
      }
    }
  },  
  props: {
    category: {
      type: Object,
      default: ()=>{},
      required:"true"
  },
  skills: Array
  },
  methods: {
    ...mapActions('skills',['addSkill']),
    ...mapActions('categories',['delCategory']),
    async addNewSkill() {
        try {
          await this.addSkill(this.skill);
          this.skill.title="";
          this.skill.percent=0;
        } catch (error) {
          alert(error.message);
        }
      },
    async delCurrentCategory() {
        try {
          await this.delCategory(this.editedCategory.id);
        } catch (error) {
          alert(error.message);
        }
      }
  },

 components: {
	  skillItem: () => import('./skillItem')}, 
}
</script>