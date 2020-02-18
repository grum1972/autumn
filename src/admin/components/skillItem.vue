<template lang="pug">
  li.form__row
    input(name="name" type="text" placeholder="HTML").form__row-name
    .form__row-value-wrapper
      input(name="name" type="number" placeholder="50").form__row-value
    .form__buttons
      button(name="add").form__edit-btn
      button(name="remove").form__bin-btn
</template>