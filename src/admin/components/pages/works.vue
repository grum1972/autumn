<template lang="pug">
  .container.review-edit
    .review-edit__info
      h2.section__title Блок "Работы"
    .review-edit__section
      .form.broad--full
        .form__title 
          input(name="name" value="Редактирование работы").review-edit__form-title
        .form-slicer
        .form__wrapper.form__wrapper--work
          .form__load
            .form__load-content
              .form__load-text Перетащите или загрузите для загрузки изображения
              button(type="submit" value="Сохранить").save__btn.save__btn--load Загрузить
          .form__edit-content
            img(src="../../../images/content/1.jpg")  
            
            button(type="reset" value="Отмена").edit-content__btn.form__user-photo-btn Изменить превью
          form(action).form__content.form__content--work
            .form__review  
              .form__review-row
                label.form__label
                  .form__label-title
                    span Название
                  input.form__input(type="text" placeholder="Дизайн сайта для авто салона Porsche" name="name")
                label.form__label
                  .form__label-title
                    span Ссылка
                  input.form__input(type="text" placeholder="https://www.porsche-pulkovo.ru" name="link")
              .form__review-row
                label.form__label-message
                  .form__label-title
                    span Описание
                  textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей" rows="5" name="comment").form__textarea
              .form__review-row
                label.form__label
                  .form__label-title
                    span Добавление тэга
                  input.form__input(type="text" placeholder="Jquery, Vue.js, HTML5" name="name")                      
              .form__review-row
                .work__tags
                  ul.tags
                    li.tags__item 
                      button.tags__btn HTML
                    li.tags__item 
                      button.tags__btn CSS
                    li.tags__item 
                      button.tags__btn Javascript
  
              .form__review-row.form__work-row--btn
                button(type="reset" value="Отмена").reset__btn.form__user-photo-btn Отмена
                button(type="submit" value="Сохранить").save__btn Сохранить

    .review__section
      ul.review__list
        li.review__item.review__item--add
          .review__content
            .review__add
              button.review__add-btn Добавить работу
        li.review__item.review__item--work
          .work__preview
            img(src="../../../images/content/1.jpg")
            .work__preview-tags
              ul.preview-tags__list
                li.preview-tags__item HTML
                li.preview-tags__item CSS
                li.preview-tags__item Javascript    
                li.preview-tags__item Javascript 
                li.preview-tags__item Javascript 
          .work__content
            .work__title Сайт школы образования
            .work__text 
              p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .work__link  http://loftschool.ru
            .work__controls
              button.review__btn.review__btn--edit Править
              button.review__btn.review__btn--remove Удалить
        li.review__item.review__item--work
          .work__preview
            img(src="../../../images/content/2.jpg")
          .work__content
            .work__title Сайт школы образования
            .work__text 
              p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .work__link  http://loftschool.ru
            .work__controls
              button.review__btn.review__btn--edit Править
              button.review__btn.review__btn--remove Удалить
        li.review__item.review__item--work
          .work__preview
            img(src="../../../images/content/3.jpg")
          .work__content
            .work__title Сайт школы образования
            .work__text 
              p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .work__link  http://loftschool.ru
            .work__controls
              button.review__btn.review__btn--edit Править
              button.review__btn.review__btn--remove Удалить

</template>