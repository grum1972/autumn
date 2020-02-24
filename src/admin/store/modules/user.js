export default {
  namespaced: true,
  
  state: {
    user: {}
  },
  
  mutations: {
    SET_USER: (state, user) => (state.user = user),
    CLEAR_USER: state => (state.user = {})
  },

  getters: {
      userIsLoggedIn: state => {
        const userObj = state.user;
        const userObjectIsEmpty =
          Object.keys(userObj).length === 0 && userObj.constructor === Object;
  
        return userObjectIsEmpty === false;
      },
      userId: state => {

      return state.user.id
    } 
  },
  
  actions: {
    logout({ commit }) {
      commit("CLEAR_USER");
      localStorage.clear();
    },
    setUser({commit},newUser) {
      try {
       console.log(newUser);
      commit("SET_USER",newUser);
      } catch (error) {
        console.log(error);
        
      }
      
    }
  }
}