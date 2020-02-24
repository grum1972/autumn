import{wrapIntoFormData} from '../../helpers/forms'
export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {}
  },
  mutations: {
    GET_WORKS: (state,data) => (state.works = data),
    ADD_WORK: (state,work) =>state.works.unshift(work),
    DEL_WORK: (state,deletedWorkID) => (state.works = state.works.filter(work => work.id !== deletedWorkID)), 
    UPD_WORK: (state,updateWork) => {
      state.works = state.works.map(work => {
        return work.id === updateWork.id ? updateWork : work;
      });
    },
    SET_CURRENT_WORK: (state,updateWorkID) => {
      state.currentWork = state.works.filter(work => {
        return work.id === updateWorkID;
      })[0];
            
    }  

  },
  actions: {
    async appendWork({commit}, work) {
      const data = wrapIntoFormData(work)
      try {
        const response = await this.$axios.post('/works', data);
        commit('ADD_WORK',response.data);

      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchWorks({commit,rootGetters}) {
      try {
        const userID = rootGetters['user/userId'];
        console.log(userID);
        const {data} = await this.$axios.get("/works/"+userID);
        commit('GET_WORKS',data);
        
      } catch (error) {
        console.log(error);
        
      }
    },
    async delWork ({commit},deletedWorkID){
      try {
        console.log('/works/'+deletedWorkID);
        await this.$axios.delete('/works/'+deletedWorkID);
        commit('DEL_WORK',deletedWorkID);
      } catch (error) {
        
      }
    },
    
    async updWork ({commit},updateWork){
      const data = wrapIntoFormData(updateWork)
      try {
                  
        const response = await this.$axios.post('/works/'+updateWork.id,data);
                
        commit('UPD_WORK',response.data.work);
      } catch (error) {
        
      }
    }
  }
}