<template lang="pug">
  .container.review-edit
    .review-edit__info
      h2.section__title Блок "Работы"
      //- pre {{works}}
    .review-edit__section(v-if='addForm')
      addWork(
        :mode='mode',
        @closeAddForm='closeAddForm'
        )
      
    .review__section
      ul.review__list
        li.review__item.review__item--add
          .review__content
            .review__add
              button(@click.prevent="toggleAddForm('new')").review__add-btn Добавить работу
        workItem(v-for='work in works' :key='work.id'
          :work='work'
          @editUserWork="toggleAddForm('edit')",
        )

</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  data(){
    return {
      addForm:false,
      mode: ""
      
      }
  },
  components : {
    workItem: () => import('../workItem'),
    addWork: () => import('../addWork')
  },
  computed: {
    ...mapState('works',{
      works: state => state.works
    })
    
  },
  
  methods: {
    ...mapActions('works', ['fetchWorks']),
      toggleAddForm(mode){
        this.addForm = true;
        this.mode = mode;
      },
      closeAddForm(){
        this.addForm = false;
      }
  },
  async created(){
    try {
      await this.fetchWorks(); 
      console.log(this.works);
       
    } catch (error) {
      console.log(error);
      
    }
  }
}
</script>
<style lang="postcss">
  @import "../../../styles/mixins.pcss";
  @import "normalize.css";
  @import "../../../styles/layout/base.pcss";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');





</style>



