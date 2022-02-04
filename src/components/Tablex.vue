<template>
  <el-container class="table" style="padding: 0">
    <h1>TableX</h1>
    <el-table
        :data="getTableData"
        border
        style="width: 50%;">
      <el-table-column
          prop="name"
          label="Name"
          width="180">
      </el-table-column>
      <el-table-column
          prop="city"
          label="City"
          width="180">
      </el-table-column>
      <el-table-column
          prop="country"
          label="Address">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="Delete"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click.native.prevent="deleteRow(scope.$index)"
              type="text"
              size="small">
            Remove
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
          fixed="right"
          label="Update"
          width="120">
        <template slot-scope="scope">

            <router-link :to="'/updatex/'+scope.$index" tag="el-button" >Update</router-link>

        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: "Tablex",
  computed: {
    ...mapGetters([
      'getTableData'
    ])
  },
  methods: {
    ...mapActions([
        'deleteRow'
    ])
  },

}
</script>

<style scoped>
  .table{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>