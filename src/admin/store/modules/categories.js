export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    GET_CATEGORIES: (state,data) => (state.categories = data),
    ADD_CATEGORY: (state,category) =>state.categories.unshift(category),
    DEL_CATEGORY: (state,deletedCatID) => (state.categories = state.categories.filter(category => category.id !== deletedCatID)), 
    UPD_CATEGORY: (state,updateCat) => {
      state.categories = state.categories.map(category => {
        return category.id === updateCat.id ? updateCat : category;
      });
    }  
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
    async fetchCategories({commit,rootGetters}) {
      try {
        const userID = rootGetters['user/userId'];
        console.log(userID);
        const {data} = await this.$axios.get("/categories/287");
        
        commit('GET_CATEGORIES',data);
        
      } catch (error) {
        console.log(error);
        
      }
    },
    async delCategory ({commit},deletedCatID){
      try {
        console.log('/categories/'+deletedCatID);
        await this.$axios.delete('/categories/'+deletedCatID);
        commit('DEL_CATEGORY',deletedCatID);
      } catch (error) {
        
      }
    },
    
    async updateCategory ({commit},updateCat){
      try {
        const title =updateCat.category;
           
        await this.$axios.post('/categories/'+updateCat.id,{title});
        commit('UPD_CATEGORY',updateCat);
      } catch (error) {
        
      }
    }
  }
}