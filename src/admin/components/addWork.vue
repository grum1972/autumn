<template lang="pug">
 .form.form.broad--full
  .form__title
    
    h2(v-if="mode === 'edit'").review-edit__form-title Редактирование работы {{mode}}
    h2(v-else).review-edit__form-title Новая работа
  .form-slicer
  .form__wrapper.form__wrapper--work
    .form__load
      label(for='image').form__load-content
        input(name='image' type='file' @change='loadPhoto').form__file
        .form__load-text Перетащите или загрузите для загрузки изображения
        
        //- input(name='image' type='file' @change='loadPhoto').form__file
        button.save__btn.save__btn--load Загрузить
      .form__edit-content(v-if='photoUrl.length !== 0')
        img(:src='photoUrl')
      //- img(src="../../images/content/1.jpg")  
      //- button(type="reset" value="Отмена").edit-content__btn.form__user-photo-btn Изменить превью
    form.form__content.form__content--work
      .form__review  
        .form__review-row
          label.form__label
            .form__label-title
              span Название
            input.form__input(type="text" placeholder="Дизайн сайта для авто салона Porsche" name="name" v-model="work.title")
          label.form__label
            .form__label-title
              span Ссылка
            input.form__input(type="text" placeholder="https://www.porsche-pulkovo.ru" name="link" v-model="work.link")
        .form__review-row
          label.form__label-message
            .form__label-title
              span Описание
            textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей" rows="5" name="comment" v-model='work.description').form__textarea
        workTags(
          :tags='work.techs'
          @defineTagsString="defineTagsString"
        )
        //- pre {{this.work}}
        .form__review-row.form__work-row--btn
          button(type="button" value="Отмена" @click.prevent="$emit('closeAddForm')").reset__btn.form__user-photo-btn Отменить
          button(type="button" value="Сохранить" @click.prevent = "(mode === 'new') ? addUserWork() : editUserWork()").save__btn Сохранить

</template>
<script>
import { mapState, mapActions } from 'vuex';
import{getAbsoluteImgPath} from '../helpers/pictures';
export default {
  props: {
    mode: ""
  },
  data() {
    return {
      photoUrl:"", 
      techsString:"",
      work: {
        id:"",
        title: "",
        techs:"",
        photo:"",
        link:"",
        description:""
        
      },
      tags:""
      
    }
  },
  components: {
     workTags: () => import('./workTags')
  }, 
  computed: {
    ...mapState('works',{currentWork: state => state.currentWork})
  },
  watch: {
    currentWork() {
      if (this.mode==='edit') this.getCurrentWork();
    },
    mode(){
      if (this.mode === 'edit') {this.getCurrentWork();}
      else {
        this.work = {};
        this.work.techs="";
        this.photoUrl='';
      };
    }
  },
  created(){
    if(this.mode === 'edit') this.getCurrentWork();
    
    
  },
  methods : {
    ...mapActions('works',['appendWork','updWork']),
    defineTagsString(value){
      this.work.techs = value;
    },
    loadPhoto(e) {
      const file = e.target.files[0];
      this.work.photo =file;
      this.getPhoto(file);
    },
    getPhoto(file) {
      const reader = new FileReader(file);
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.photoUrl = reader.result;
        }
      } catch (error) {
        
      }
    },
    async addUserWork(){
      try {
        await this.appendWork(this.work);
        this.work={};
        this.$emit('closeAddForm');        
      } catch (error) {
        
      }
    },
    async editUserWork(){
      try {
        console.log('8888');
        await this.updWork(this.work);
        this.work={};
        this.$emit('closeAddForm');        
        
      } catch (error) {
        
      }
    },
    getCurrentWork() {
      
      this.work = {...this.currentWork};
      this.photoUrl = getAbsoluteImgPath(this.work.photo);
      this.work.photo='';
      
    }
  }
}
</script>
<style lang="postcss">
  .tags {
  display: flex;
}
.form {
  color:#000;
}
/* .form__load-content {
  position: relative;
}
.form__file{
  position: absolute;
  top: 0;
  left: -9999px;
} */
</style>