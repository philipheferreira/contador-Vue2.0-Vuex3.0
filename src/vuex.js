import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: { 
        contador: 0
    },
    mutations: { 
        decremento: state => state.contador--,
        incremento: state => state.contador++
    },
    getters: { 
        contador: state => state.contador
    },
    actions: {
        incremento: ({ commit }) => commit('incremento'),
        decremento: ({commit }) =>  commit('decremento')
    }
})

 export { store }