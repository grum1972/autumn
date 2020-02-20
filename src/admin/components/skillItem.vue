<template lang="pug">
  li.form__row
    
    input(
      name="name" 
      type="text" 
      placeholder="HTML" 
      v-model="editedSkill.title"
      :disabled="inputDisabled").form__row-name
    .form__row-value-wrapper
      input(
        name="name" 
        type="number" 
        placeholder="50" 
        v-model="editedSkill.percent"
        :disabled="inputDisabled").form__row-value
    .form__buttons(v-if='!inputDisabled')
      button(name="add" @click.prevent='editSkill').form__edit-btn
      button(name="remove" @click.prevent='removeSkill').form__bin-btn
    .form__buttons(v-else)
      button(name="save").form__add-btn
      button(name="remove").form__remove-btn  
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    skill:Object
  },
  data() {
    return {
      editedSkill:{...this.skill},
      inputDisabled: true
    }
  },
  methods: {...mapActions('skills',['removeAnySkill']),
  async removeSkill(){
    try {
      const response = await this.removeAnySkill(this.skill.id);
    } catch (error) {
      
    }
  },
  async editSkill(){
    try {
      // const response = await this.nySkill(this.skill);
    } catch (error) {
      
    }
  }}
}
</script>