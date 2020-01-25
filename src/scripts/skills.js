import Vue from "vue";

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
  
  created() {
    const  data =require("../data/skills.json");
    this.skills = data;
  }

})