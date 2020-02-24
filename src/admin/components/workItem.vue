<template lang="pug">
  li.review__item.review__item--work
    .work__preview
      
      img(:src='photoUrl')
      workTagsList(
        :tags="work.techs"
      )
    .work__content
      
      .work__title {{work.title}}
      .work__text 
        p {{work.description}}
      a(:href='work.link').work__link {{work.link}}
      .work__controls
        button(type='button' @click.prevent='editUserWork').review__btn.review__btn--edit Править
        button(type='button' @click.prevent='delUserWork').review__btn.review__btn--remove Удалить
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import{getAbsoluteImgPath} from '../helpers/pictures';
export default {
  props: {
    work: Object,
  },
  data() {
    return {
      photoUrl: getAbsoluteImgPath(this.work.photo)
    }
  },
  components: {
    workTagsList: () => import('./workTagsList')
  },
  watch:{
    work(){
      this.photoUrl = getAbsoluteImgPath(this.work.photo);
    }
  },
  methods: {
    ...mapActions('works',['delWork']),
    ...mapMutations('works',['SET_CURRENT_WORK']),
    editUserWork(){
      console.log('5555');
      console.log(this.work.id);
      
      this.SET_CURRENT_WORK(this.work.id);

      this.$emit('editUserWork');
    },
    async delUserWork(){
      try {
        await this.delWork(this.work.id);
      } catch (error) {
        
      }
    }

  }
}
</script>