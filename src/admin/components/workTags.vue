<template lang="pug">
  .form__review
    .form__review-row
      label.form__label
        .form__label-title
          span Добавление тэга
        input(type="text" placeholder="" name="tags" v-model='tagsString' @input='buildTagsArray').form__input                      
    .form__review-row
      .work__tags
        ul.tags
          li(v-for='(tag,index) in tagsArray' :key='index').tags__item 
            button(@click.prevent="removeTag(index)").tags__btn {{tag}}
          //- li.tags__item 
          //-   button.tags__btn CSS23
          //- li.tags__item 
          //-   button.tags__btn Javascript
</template>
<script>
export default {
  props:{
    tags:String
  },
  data(){
    return{
      tagsString: "",
      tagsArray: []
    }
  },

  watch: {
    tags() {
    this.tagsString = this.tags;
    this.buildTagsArray();
  },
    tagsString(){
      this.$emit('defineTagsString',this.tagsString)
    }
  },
  methods: {
    buildTagsArray(){
      this.tagsArray = (this.tagsString.length === 0) ? [] : this.tagsString.split(',');
    },
    removeTag(index) {
      this.tagsArray.splice(index,1);
      this.tagsString = this.tagsArray.join(',');
    }
  },
  mounted(){
    this.tagsString =this.tags;
    this.buildTagsArray();
  }

};
</script>