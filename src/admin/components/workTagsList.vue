<template lang="pug">
  .work__preview-tags
    ul.preview-tags__list
      li(v-for='(tag,index) in tagsArray' :key='index').preview-tags__item {{tag}}
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
  methods: {
    buildTagsArray(){
      this.tagsArray = (this.tagsString.length === 0) ? [] : this.tagsString.split(',');
    }
  },
  mounted(){
    this.tagsString =this.tags;
    this.buildTagsArray();
  }

};

</script>