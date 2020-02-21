<template lang="pug">
  .div1
    
    .form__title 
      
      input(name="name" value="1212" v-model="editedCategory.category" :disabled="!editForm" ).about__form-title
      .form__buttons(v-if='editForm')
        button(name="add" @click.prevent="updateCurrentCategory").form__add-btn
        button(name="remove" @click.prevent="editCurrentCategory").form__remove-btn
      .form__buttons(v-else)
        button(name="add" @click.prevent="editCurrentCategory").form__edit-btn
        button(name="remove" @click.prevent="delCurrentCategory").form__bin-btn  
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
      editForm: false,
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
    ...mapActions('categories',['delCategory','updateCategory']),
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
      },
    async updateCurrentCategory() {
        try {
          await this.updateCategory(this.editedCategory);
          this.editForm = !this.editForm;
        } catch (error) {
          alert(error.message);
        }
      }  ,

    async editCurrentCategory() {
        try {
          if(this.editForm) {
            this.editedCategory = {...this.category};
          } ;        
          this.editForm = !this.editForm;
          
        } catch (error) {
          alert(error.message);
        }
      }  
  },

 components: {
	  skillItem: () => import('./skillItem')}, 
}
</script>