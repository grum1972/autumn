<template lang="pug">
  .about
    .container.container--about
      .about__info
        h2.section__title Блок "Обо мне"
        a(href="#").add__btn Добавить группу
      .about__section
        form.form.about__form.broad--half
          .form__title 
            input(name="name" value="Название новой группы" disabled="true").about__form-title
            .form__buttons
              button(name="add").form__add-btn
              button(name="remove").form__remove-btn
          .form-slicer
          .form__content
          .form__controls
            input(name="name" type="text" placeholder="Новый навык").form__controls-name
            .form__controls-value-wrapper
              input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
            button(href="").form__controls-btn
          
        form.form.about__form.broad--half
          .form__title 
            input(name="name" value="Workflow").about__form-title
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
          .form__controls
            input(name="name" type="text" placeholder="Новый навык").form__controls-name
            .form__controls-value-wrapper
              input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
            button(href="").form__controls-btn
        form.form.about__form.broad--half
          .form__title.form__title--edit
            input(name="name" value="Frontend").about__form-title
            .form__buttons
              button(name="add").form__edit-btn
          .form-slicer
          .form__content.form__content--about
            .form__row
              input(name="name" type="text" placeholder="HTML").form__row-name.form__row-name--edit
              .form__row-value-wrapper.form__row-value-wrapper--edit
                input(name="name" type="number" placeholder="50" min="0" max="100").form__row-value
              .form__buttons
                button(name="add").form__add-btn
                button(name="remove").form__remove-btn
            .form__row
                input(name="name" type="text" placeholder="HTML").form__row-name
                .form__row-value-wrapper
                  input(name="name" type="number" placeholder="50" min="0" max="100").form__row-value
                .form__buttons
                  button(name="add").form__edit-btn
                  button(name="remove").form__bin-btn
          .form__controls
            input(name="name" type="text" placeholder="Новый навык").form__controls-name
            .form__controls-value-wrapper
              input(name="name" type="number" placeholder="100" min="0" max="100").form__controls-value
            button(href="").form__controls-btn
      
</template>