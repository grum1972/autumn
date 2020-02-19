<template lang="pug">
  li.form__row
    pre {{editedSkill.id}}
    input(
      name="name" 
      type="text" 
      placeholder="HTML" 
      v-model="editedSkill.title").form__row-name
    .form__row-value-wrapper
      input(
        name="name" 
        type="number" 
        placeholder="50" 
        v-model="editedSkill.percent").form__row-value
    .form__buttons
      button(name="add").form__edit-btn
      button(name="remove" @click.prevent='removeSkill').form__bin-btn
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    skill:Object
  },
  data() {
    return {
      editedSkill:{...this.skill}
    }
  },
  methods: {...mapActions('skills',['removeAnySkill']),
  async removeSkill(){
    try {
      const response = await this.removeAnySkill(this.skill.id);
    } catch (error) {
      
    }
  }}
}
</script>