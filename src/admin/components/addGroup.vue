<template lang="pug">

  div
    .form__title 
      input(name="name" placeholder="Название новой группы" v-model="title" autocomplete="off").about__form-title
      .form__buttons
        button(type="button" name="add" @click.prevent="addNewCategory").form__add-btn
        button(type="button" name="remove" @click.prevent="$emit('toggleAddForm')").form__remove-btn
    .form-slicer
    .form__content
    .form__controls()
      input(name="name" type="text" placeholder="Новый навык" disabled="disabled").form__controls-name
      .form__controls-value-wrapper
        input(name="name" type="number" placeholder="0" min="0" max="100" disabled="disabled").form__controls-value
      button(type="button" disabled="disabled").form__controls-btn
</template>
<script>
  import {mapActions} from 'vuex';
  export default {
    data() {
      return {
        title: ""
      }
    },
    methods: {
      ...mapActions('categories', ['addCategory']),
      async addNewCategory() {
        try {
          await this.addCategory(this.title);
          this.title="";
          this.$emit('toggleAddForm');
        } catch (error) {
          alert(error.message);
        }
      }
    }
  }
</script>

<style lang="postcss">
  .form__controls-btn {
    &:disabled {
      opacity: .3;
    }
    
  }
  .form__controls-name {
    &:disabled:hover {
      border-bottom: 1px solid #000;
    }
  }
</style>