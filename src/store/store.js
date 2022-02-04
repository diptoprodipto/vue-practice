import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tableData: [{
            name: 'Dipto',
            city: 'Saint Petersburg',
            country: 'Russia'
        }, {
            name: 'Prodipto',
            city: 'Moscow',
            country: 'Russia'
        }, {
            name: 'Prodipto Dipto',
            city: 'Warsaw',
            country: 'Poland'
        }, {
            name: 'Dipto Prodipto',
            city: 'Vienna',
            country: 'Austria'
        }],
        rowData: {
            name: '',
            city: '',
            country: ''
        }
    },
    getters: {
        getTableData: (state) =>{
            return state.tableData
        }
    },
    mutations: {
        deleteRow: (state, payload) => {
            state.tableData.splice(payload, 1)
        },
        getRowData: (state, payload) =>{
            let data = state.tableData.splice(payload, 1)
            state.rowData.name = data.name
            state.rowData.city = data.city
            state.rowData.country = data.country
        }
    },
    actions: {
        deleteRow: (context, payload) => {
            context.commit('deleteRow', payload)
        },
        getRowData: (context, payload) => {
            context.commit('getRowData', payload)
        }
    }
})