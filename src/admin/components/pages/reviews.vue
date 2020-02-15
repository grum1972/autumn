<template lang="pug">
  .container.review-edit
    .review-edit__info
      h2.section__title Блок "Отзывы"
    .review-edit__section
      .form.broad--full
        .form__title 
          input(name="name" value="Новый отзыв").review-edit__form-title
        .form-slicer
        .form__wrapper
          form(action).form__content.form__content--review
            .form__user
              .form__user-photo

              button.form__user-photo-btn Добавить фото
            .form__review  
              .form__review-row.form__review-row--one
                label.form__label
                  .form__label-title
                    span Имя автора
                  input.form__input(type="text" placeholder="Ковальчук Дмитрий" name="name")
                label.form__label
                  .form__label-title
                    span Титул автора
                  input.form__input(type="text" placeholder="Основатель LoftSchool" name="occup")
              .form__review-row
                label.form__label-message
                  .form__label-title
                    span Отзыв
                  textarea(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!" rows="5" name="comment").form__textarea
              .form__review-row.form__review-row--btn
                button(type="reset" value="Отмена").reset__btn.form__user-photo-btn Отмена
                button(type="submit" value="Сохранить").save__btn Сохранить


    
    
    .review__section
      ul.review__list
        li.review__item.review__item--add
          .review__content
            .review__add
              button.review__add-btn Добавить отзыв
        li.review__item
          .review__content
            .user-info.user-info--review
              .user-info__photo
                img(src="../../../images/content/sv.jpg").user-info__photo-img
              .user-info__desc
                .user-info__name.user-info__name--review Владимир Сабанцев
                .user-info__occup Преподаватель
            .review__slicer
            .review__text 
              p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .review__controls
              button.review__btn.review__btn--edit Править
              button.review__btn.review__btn--remove Удалить
        li.review__item
          .review__content
            .user-info.user-info--review
              .user-info__photo
                img(src="../../../images/content/dk.jpg").user-info__photo-img
              .user-info__desc
                .user-info__name.user-info__name--review Ковальчук Дмитрий
                .user-info__occup Основатель Loftschool
            .review__slicer
            .review__text 
              p Этот код выдержит любые иasdasdsad sadasdasd asdads спытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .review__controls
              button.review__btn.review__btn--edit Править
              button.review__btn.review__btn--remove Удалить
        li.review__item
          .review__content
            .user-info.user-info--review
              .user-info__photo
                img(src="../../../images/content/dk.jpg").user-info__photo-img
              .user-info__desc
                .user-info__name.user-info__name--review Ковальчук Дмитрий
                .user-info__occup Основатель Loftschool
            .review__slicer
            .review__text 
              p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишadsdsadds sadasd sadas dasd sa dsasdsad sadком старых браузерах
            .review__controls
              button.review__btn.review__btn--edit Править
              button.review__btn.review__btn--remove Удалить


</template>