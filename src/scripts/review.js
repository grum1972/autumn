import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
  el: ".review",
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        // groupCells: 2,
        freeScroll: false,
        contain: true
        // any options from Flickity can be used
      }
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },

    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();
    
    },

    checkArrows() {
        if (this.$refs.flickity.selectedIndex() === 0) {
         this.$el.querySelector('.direct-btn--left').disabled = true;
         this.$el.querySelector('.direct-btn--right').disabled = false;
        } else if (this.$refs.flickity.selectedIndex() === this.$refs.flickity.slides().length-1) {
         this.$el.querySelector('.direct-btn--right').disabled = true;
         this.$el.querySelector('.direct-btn--left').disabled = false;
       } else {
         this.$el.querySelector('.direct-btn--right').disabled = false;
         this.$el.querySelector('.direct-btn--left').disabled = false;
      }
    }
  }
});