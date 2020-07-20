<template>
  <div id="App">
    <main>
      <div class="errorMessage" v-if="errorReturn !== null">{{ errorReturn }}</div>
      <div class="validMessage" v-if="validReturn !== null">{{ validReturn }}</div>
      <div class="labels">Username: </div>

      <input 
      type="text" 
      placeholder="Username" 
      id="username" 
      v-model="username" 
      /><br><br>


      <div class="labels">Password: </div>

      <input 
      type="password" 
      placeholder="Password" 
      id="password" 
      v-model="password" 
      @keypress="login" 
      /><br>
      
      <br>
      <br>
      <br>
      <br>
      <br>
      <div>{{ token }}</div>
    </main>
  </div>





  
</template>




<script>

export default { 
  name: 'App',
  el: '#app',
  data(){
    return {
      validReturn: null,
      errorReturn: null,
      token: null,
      username: null,
      password: null,
      axios: require('axios').default,
    }
  },

  methods: {
    login (e) {

      if(e.key == "Enter"){
        this.axios.post('http://localhost:3000/user/login', {
          "userName": this.username,
          "password": this.password,
          "minutes": 10
        }).then((response) => {
          this.validReturn = response.data.text; 
          this.token = response.data.token;
          this.errorReturn = null
          }, 
        (error) => {
          this.errorReturn = 'Failed to login. Incorrect username or password!(' + error + ')'; 
          this.validReturn = null;
        });
      }

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

input{
  border-radius: 10px;
  width: 200px;
  height: 30px;
  font-size: 20px;
  border: 1px solid #000000;
  padding: 5px;
  box-shadow: 5px 5px 10px #000000;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.labels{
  font-size: 35px;
  font-family: Bodoni MT Black;
  text-shadow: 5px 5px 10px #000000;
}

.errorMessage{
  border: 1px solid #ff0000;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffddbb;
  font-size: 20px;
  font-weight: bold;
  color: #ff0000;
  text-shadow: 1px 1px 0px #ff0000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: 5px 5px 10px #000000;
  margin-bottom: 30px;
}

.validMessage{
  border: 1px solid #00ff00;
  padding: 10px;
  border-radius: 10px;
  background-color: #a2fdb9;
  font-size: 20px;
  font-weight: bold;
  color: #078838;
  text-shadow: 1px 1px 0px #078838;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: 5px 5px 10px #000000;
  margin-bottom: 30px;
}


</style>