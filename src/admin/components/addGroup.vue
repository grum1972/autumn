<template lang="pug">

  div
    .form__title 
      input(name="name" value="Название новой группы" v-model='title').about__form-title
      .form__buttons
        button(type="submit" name="add").form__add-btn
        button(name="remove" @click="addGroup").form__remove-btn
    .form-slicer
    .form__content
    .form__controls()
      input(name="name" type="text" placeholder="Новый навык" disabled="disabled").form__controls-name
      .form__controls-value-wrapper
        input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
      button(type="submit").form__controls-btn
</template>
<script>
</script>
<style lang="postcss">

</style>