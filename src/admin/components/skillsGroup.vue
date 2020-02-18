<template lang="pug">
  .div1
    
    .form__title 
      input(name="name" value="1212" v-model="editedCategory.category").about__form-title
      .form__buttons
        button(name="add").form__add-btn
        button(name="remove").form__remove-btn
    .form-slicer
    ul.form__content.form__content--about
      skillItem
      skillItem
    form().form__controls
      
      input(name="name" type="text" placeholder="Новый навык").form__controls-name
      .form__controls-value-wrapper
        input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
      button(type="submit").form__controls-btn
</template>

<script>

export default {
    
  props: {
    category: Object
  },
  data() {
    return {
      editedCategory: {...this.category}
    }
  },
 components: {
	  skillItem: () => import('./skillItem')}, 
}
</script>