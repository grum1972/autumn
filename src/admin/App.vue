<style lang="postcss">
  
</style>
<template lang="pug">
  .wrapper  
    header.header
      .container
        .header-info
          .user-info
            .user-info__photo
            .user-info__name
          .header__title Панель администрирования
        a.header-btn Выйти
    nav.header__menu
      .container
        ul.header-menu__list
          li.header-menu__item
            a.header-menu__link Обо мне
          li.header-menu__item
            a.header-menu__link Работы
          li.header-menu__item
            a.header-menu__link Отзывы
    main.content 
      .container.about
        .about__info
          h2.section__title Блок "Обо мне"
          button.add__btn Добавить группу
        .about__section
          form.form.about__form
            .form__title 
              input(name="name" value="Название новой группы").about__form-title
              .form__buttons
                button(name="add").form__add-btn
                button(name="remove").form__remove-btn
              br.form-slicer
              .form__content
              .form__controls
                input(name="name" type="text" placeholder="" disabled).form__controls-name
                .form__controls-value
                  input(name="name" type="value" placeholder="" disabled).form__controls-value
                button(disabled="true").form__controls-btn
          form.form.about__form
            .form__title 
              input(name="name" value="Frontend").about__form-title
              .form__buttons
                button(name="edit").form__pencil-btn
              br.form-slicer
              .form__content.form__content--about
                .form__row
                  input(name="name" type="text" placeholder="HTML").form__row-name
                  .form__row-value
                    input(name="name" type="value" placeholder="50").form__row-value
                  .form__buttons
                    button(name="add").form__edit-btn
                    button(name="remove").form__bin-btn
              .form__controls
                input(name="name" type="text" placeholder="Новый навык").form__controls-name
                .form__controls-value
                  input(name="name" type="value" placeholder="100").form__controls-value
                button(href="").form__controls-btn
      .container.works
        .works__info
          h2.section__title Блок "Работы"
          button.add__btn Добавить группу
        .works__section
          form.form.works__form
            .form__title 
              input(name="name" value="Название новой группы").works__form-title
              .form__buttons
                button(name="add").form__add-btn
                button(name="remove").form__remove-btn
              br.form-slicer
              .form__content
              .form__controls
                input(name="name" type="text" placeholder="" disabled).form__controls-name
                .form__controls-value
                  input(name="name" type="value" placeholder="" disabled).form__controls-value
                button(disabled="true").form__controls-btn
          form.form.works__form
            .form__title 
              input(name="name" value="Frontend").works__form-title
              .form__buttons
                button(name="edit").form__pencil-btn
              br.form-slicer
              .form__content.form__content--works
                .form__row
                  input(name="name" type="text" placeholder="HTML").form__row-name
                  .form__row-value
                    input(name="name" type="value" placeholder="50").form__row-value
                  .form__buttons
                    button(name="add").form__edit-btn
                    button(name="remove").form__bin-btn
              .form__controls
                input(name="name" type="text" placeholder="Новый навык").form__controls-name
                .form__controls-value
                  input(name="name" type="value" placeholder="100").form__controls-value
                button(href="").form__controls-btn

          

</template>