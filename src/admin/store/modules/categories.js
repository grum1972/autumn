export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    GET_CATEGORIES: (state,data) => (state.categories = data),
    ADD_CATEGORY: (state,category) =>state.categories.unshift(category),
    DEL_CATEGORY: (state,deletedCatID) => (state.categories = state.categories.filter(category => category.id !== deletedCatID))  
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
        commit('GET_CATEGORIES',data);
        
      } catch (error) {}
    },
    async delCategory ({commit},deletedCatID){
      try {
        console.log('/categories/'+deletedCatID);
        await this.$axios.delete('/categories/'+deletedCatID);
        commit('DEL_CATEGORY',deletedCatID);
      } catch (error) {
        
      }
    }
  }
}