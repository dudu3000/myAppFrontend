<template>
  <div id="home">
    <main>
        {{ login.token }}
      
    </main>
  </div>





  
</template>




<script>
const login = {token: ''}
export default { 
  name: 'home',
  el: '#home',
  data(){
      return {
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