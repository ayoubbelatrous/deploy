import Vuex from 'vuex'
import Vue from 'vue'

export default new Vuex.Store(
    {
    
        state:
        {
          
        },
        mutations:
        {
            setToken(state,token)
            {
                
            }
        },
        actions:
        {
            setToken({commit}, token)
            {
                commit('setToken',token)
            }
        },
        modules:
        {

        }
    }
)


