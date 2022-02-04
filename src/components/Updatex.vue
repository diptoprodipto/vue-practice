<template>
  <div>
    <h1>UpdateX</h1>
    <label>Name</label><br/>
    <input type="text" /><br/>
    <label>City</label><br/>
    <input type="text" /><br/>
    <label>Country</label><br/>
    <input type="text" /><br/><br/>
    <button type="submit">Update</button>
  </div>
</template>

<script>
// import {mapGetters} from "vuex";

import {mapActions} from "vuex";

export default {
  name: "Updatex",
  computed: {

  },
  methods: {
    ...mapActions([
        'getRowData'
    ])
  },
  created() {
    this.getRowData(this.$route.params.index)
  }
}
</script>

<style scoped>

</style>