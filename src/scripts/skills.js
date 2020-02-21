import Vue from "vue";
import axios from 'axios'

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/",
  // headers: {
  //   "Authorization": `Bearer ${token}`
  // }
});

const skill = {
  template: "#skill",
  props: ["skillName","skillPercent"],
  methods: {
    drawSkill () {
      const circle = this.$refs["color-circle"];
      const percent = (590 / 100) * (100 - this.skillPercent);
      const dashArray = `${590-percent} ${percent}`;
      circle.style.strokeDasharray = dashArray;
    }

  },
  mounted() {
    this.drawSkill();
  }

  
}

const skillGroup = {
  template: "#skill-group",
  components: {
    skill
  },
  props: ["skill"]
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  data () {
    return {
      skills: []
    }
  },
  components: {
    skillGroup
  },
  
  async created() {
    // const  data =require("../data/skills.json");
    const {data} = await this.$axios.get("skills/287");
    this.skills = data;
    
    // const {data} = await this.$axios.get("categories/287");
    // this.skills = data;
  }

})