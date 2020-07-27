<template>
  <div id="app">
    <main>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">
          
          Welcome
          {{ $store.state.token }}
          <br><br>
          <a href="/login" v-if="state.token == 'undefined'"><button>Login</button></a><br><br>
          <a href="/logout" v-if="state.token !== 'undefined'"><button>Logout</button></a>
        
        </div></el-col>
      </el-row>
    </main>
  </div>

</template>




<script>

const state = {
    token: localStorage.getItem('user-token') || '',
    status: ''
}
export default { 
  name: 'home',
  data(){
      return {
          state
      }
  }
}
</script>




<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }


</style>