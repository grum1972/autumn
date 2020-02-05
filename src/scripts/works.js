import Vue from "vue";

const pictures = {
  template: "#slider-pictures",
  props: ["works","currentWork"]
};

const btns = {
  template: "#slider-btns"
};

const display = {
  template: "#slider-display",
  components: {
    pictures, 
    btns
  },
  props : ["works","currentWork"]
};

const tags = {
  template: "#slider-tags",
  props: ["tags"]
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ')
    }
  }
};



new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },

    handleSlide(direction) {
      console.log(direction);
      switch(direction) {
        case "next" :
          this.currentIndex++;
          break;
        case "prev" :  
        this.currentIndex--;
        break;
      }
    },
    makeDisableBtn(value) {
      const amountWorks = this.works.length - 1;

      if (value === amountWorks) {
        this.currentIndex = amountWorks;
        this.$el.querySelector('.direct-btn--prev').disabled = false;
        this.$el.querySelector('.direct-btn--next').disabled = true;
      } else if (value === 0) {
        this.currentIndex = 0;
        this.$el.querySelector('.direct-btn--prev').disabled = true;
        this.$el.querySelector('.direct-btn--next').disabled = false;
      } else {
        this.$el.querySelector('.direct-btn--prev').disabled = false;
        this.$el.querySelector('.direct-btn--next').disabled = false;
      }
    }
  },
  watch: {
    currentIndex(value) {
      this.makeDisableBtn(value);
    }
  },
  created() {
    const data =require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
    
  }
});