<template>
  <div id="app">
    <main>
      <div class="row">
        <div class="container">
          <div class="jumbotron">
            <h1>Home</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container border rounded-lg bg-light">
          Welcome<br>
          <b>Your token: </b>
          {{ state.token }}
        </div>
      </div>
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
.container{
  padding: 20px;
}


</style>