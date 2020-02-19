export default {
  namespaced: true,
  mutations: {
    GET_SKILLS: (state,data) => (state.skills = data),
    ADD_SKILL: (state,newSkill) => state.skills = state.skills.push(newSkill)
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
    async removeAnySkill ({commit},skillid) {
      try {
        console.log('/skills/'+skillid);
        const {data} = await this.$axios.delete('/skills/'+ skillid);
        // commit('ADD_SKILL',data);
      } catch (error) {
        
      }
    },
  }
}