<template>
  <div>
    <h1>UpdateX</h1>
    <label>Name</label><br/>
    <input type="text" v-model="name"/><br/>
    <label>City</label><br/>
    <input type="text" v-model="city" /><br/>
    <label>Country</label><br/>
    <input type="text" v-model="country" /><br/><br/>
    <button @click="goHome" type="submit">Update</button>
  </div>
</template>

<script>
// import {mapGetters} from "vuex";

import {mapActions} from "vuex";
import {mapFields} from "vuex-map-fields"

export default {
  name: "Updatex",
  data(){
    return{
      rowIndex: ''
    }
  },
  computed: {
    ...mapFields([
        'rowData.name',
        'rowData.city',
        'rowData.country'
    ])
  },
  methods: {
    ...mapActions([
        'getRowData',
        'updateRowData'
    ]),
    goHome(){
      // this.tableData.splice(this.rowIndex, 1, {name: this.name, city: this.city, country: this.country})
      this.updateRowData(this.rowIndex)
      this.$router.push('/')
    }
  },
  created() {
    this.getRowData(this.$route.params.index)
    this.rowIndex = this.$route.params.index
  }
}
</script>

<style scoped>

</style>