export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state,data) => (state.categories = data),
    ADD_CATEGORY: (state,category) =>state.categories.push(category),
    // ADD_SKILL: (state,skill)=>state.categories[]
  },
  actions: {
    async addCategory({commit}, title) {
      try {

        const {data} = await this.$axios.post('/categories', { title});
        commit('ADD_CATEGORY',data);

      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({commit}) {
      try {
        const {data} = await this.$axios.get("/categories/287");
        // console.log(data);
        commit('SET_CATEGORIES',data);
        
      } catch (error) {}
    },
    async addSkill({commit},skill) {
      try {
        const {data} = await this.$axios.post('/skills', {skill});
        // commit('ADD_SKILL',data);
      } catch (error) {
        
      }
    }
  }
}