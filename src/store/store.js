import Vue from "vue";
import Vuex from "vuex"
import {getField, updateField} from "vuex-map-fields";

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
        },
    },
    getters: {
        getTableData: (state) =>{
            return state.tableData
        },
        getField,
    },
    mutations: {
        updateField,
        deleteRow: (state, payload) => {
            state.tableData.splice(payload, 1)
        },
        getRowData: (state, payload) =>{
            let data = state.tableData.slice(payload, Number(payload)+1)
            state.rowData.name = data[0].name
            state.rowData.city = data[0].city
            state.rowData.country = data[0].country
        },
        updateRowData: (state, payload) => {
            console.log(payload)
            state.tableData.splice(payload, 1, {"name": state.rowData.name, "city": state.rowData.city, "country": state.rowData.country})
            console.log(state.tableData)
            // {"name": state.rowData.name, "city": state.rowData.city, "country": this.state.country}
        }
    },
    actions: {
        deleteRow: (context, payload) => {
            context.commit('deleteRow', payload)
        },
        getRowData: (context, payload) => {
            context.commit('getRowData', payload)
        },
        updateRowData: (context, payload) => {
            context.commit('updateRowData', payload)
        }
    }
})