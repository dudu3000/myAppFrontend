<template>
  <div id="home">
    <main>
        Welcome
        <br><br>
        <a href="/login"><button>Login</button></a>
        {{ state.token }}
      
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

main{
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid #aa3333;
  height: 400px;
  width: 70%;
  background-color: #cccc99;
  border-radius: 30px;
  padding: 25px;
}


</style>