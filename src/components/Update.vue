<template>
  <div>
    <h2>Update Page</h2>

    <label>Name</label><br/>
    <input type="text" v-model="selectedRow.name"/><br/>
    <label>City</label><br/>
    <input type="text" v-model="selectedRow.city"/><br/>
    <label>Country</label><br/>
    <input type="text" v-model="selectedRow.country"/><br/><br/>
    <button @click="update" type="submit">Update</button>
  </div>
</template>

<script>
export default {
  name: 'Update',
  data(){
    return{
      tableData: [],
      selectedRow: {
        name: '',
        city: '',
        country: ''
      },
      rowIndex: ''
    }
  },
  methods: {
    update(){
      this.tableData.splice(this.rowIndex, 1, this.selectedRow)
      this.$router.push({name: "Home", params: { selectedRow: this.selectedRow, index: this.rowIndex, tableData: this.tableData }})
    }
  },
  created() {
    this.rowIndex = this.$route.params.index
    this.selectedRow = this.$route.params.selectedRow
    this.tableData = this.$route.params.tableData

    console.log(this.tableData)
  }
}
</script>

<style scoped>

</style>