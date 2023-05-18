import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: { 
        contador: 0
    },
    mutations: { 
        decremento: state => state.contador--,
        incremento: state => state.contador++,
        decremento10: (state, num) => state.contador = state.contador - num ,
        incremento10: (state, num) => state.contador = state.contador + num
        
    },
    getters: { 
        contador: state => state.contador
    },
    actions: {
        incremento: ({ commit }) => commit('incremento'),
        decremento: ({ commit }) =>  commit('decremento'),
        decremento10: ({ commit }) => commit('decremento10', 10), 
        incremento10: ({ commit }) => commit('incremento10', 10)
    }
})

 export { store }