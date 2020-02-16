export default {
  namespaced: true,
  actions: {
    async addSkill ({commit},skill) {
      try {
        const {data} = await this.$axios.post('/skills', skill);
        
      } catch (error) {
        
      }
    }
  }
}