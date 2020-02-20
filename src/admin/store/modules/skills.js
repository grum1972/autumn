export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    GET_SKILLS: (state,data) => (state.skills = data),
    ADD_SKILL: (state,newSkill) => state.skills.push(newSkill),
    REMOVE_SKILL: (state,deletedId) => (state.skills = state.skills.filter(skill => skill.id !== deletedId))
    
  },
  actions: {
    async addSkill ({commit},skill) {
      try {
        const {data} = await this.$axios.post('/skills', skill);
        commit('ADD_SKILL',data);
      } catch (error) {
        
      }
    },
    async fetchSkills({commit}) {
      try {
        const {data} = await this.$axios.get("skills/287");
        // console.log(data);
        commit('GET_SKILLS',data);
        
      } catch (error) {}
    },
    async removeAnySkill ({commit},skillID) {
      try {
        console.log('/skills/'+skillID);
        await this.$axios.delete('/skills/'+ skillID);
        commit('REMOVE_SKILL',skillID);
      } catch (error) {
        
      }
    },
  }
}