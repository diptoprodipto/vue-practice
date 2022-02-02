<template>
    <el-container class="table" style="padding: 0">
        <h2>This is Table</h2>
        <el-table
        :data="tableData"
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
                label="Operations"
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
                label="Operations"
                width="120">
              <template slot-scope="scope">
                <el-button
                    @click="editRow(scope.$index, scope.row)"
                    type="text"
                    size="small">
                  Edit
                </el-button>
              </template>
            </el-table-column>
        </el-table>

      <el-dialog
          title="Tips"
          :visible.sync="dialogVisible"
          width="30%"
          >
        <div>
          <label>Name</label><br/>
          <input type="text" v-model="name"/><br/>
          <label>City</label><br/>
          <input type="text" v-model="city"/><br/>
          <label>Country</label><br/>
          <input type="text" v-model="country"/>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="updateRow">Confirm</el-button>
        </span>
      </el-dialog>
    </el-container>
</template>

<script>
    export default {
        name: 'Table',
        data() {
          return {
            dialogVisible: false,
            name: "",
            city: "",
            country: "",
            rowIndex: null,
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
            }]
          }
        },
        methods: {
          deleteRow(index){
            this.tableData.splice(index, 1)
          },
          editRow(index, row){
            this.dialogVisible = true
            this.rowIndex = index
            let filteredData = this.tableData.filter(data => data.name === row.name && data.city === row.city && data.country === row.country)
            this.name = filteredData[0].name
            this.city = filteredData[0].city
            this.country = filteredData[0].country
          },
          updateRow(){
            this.tableData.splice(this.rowIndex, 1, {name: this.name, city: this.city, country: this.country})
            this.dialogVisible = false
          }
        }
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