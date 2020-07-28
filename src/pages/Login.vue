<template>
  <div id="app">
    <main>
      <div class="row">
        <div class="container">
          <div class="jumbotron">
            <h1>Login</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container border rounded-lg bg-light">
          <div class="alert alert-danger" v-if="errorReturn !== null">{{ errorReturn }}</div>
          <div class="alert alert-success" v-if="validReturn !== null">{{ validReturn }}</div>
          <form class="login" @submit.prevent="login">

            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" placeholder="Username" name="username" id="username" v-model="username" required />
            </div>
            
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" placeholder="Password" name="password" id="password" v-model="password" required />
            </div>

            <button type="submit" class="btn btn-md btn-secondary">Login</button>

          </form>
          <div v-if="token !== 'undefined'" style="display: none;">
            {{ $store.dispatch('addToken', token) }}
          </div>
          <br><br><br><br><br>
        </div>
      </div>
    </main>
  </div>

</template>




<script>
if(localStorage.getItem('user-token') !== 'undefined'){
    window.location.href = '/';
}

export default { 
  name: 'login',
  data(){
    return {
      validReturn: null,
      errorReturn: null,
      username: null,
      password: null,
      token: 'undefined',
      axios: require('axios').default,
    }
  },

  methods: {
    login () {
        this.axios.post('http://localhost:3000/user/login', {
          "userName": this.username,
          "password": this.password,
          "minutes": 10
        }).then((response) => {
          this.validReturn = response.data.text;
          this.errorReturn = null;
          localStorage.setItem('user-token', response.data.token);
          this.token = response.data.token;
          window.location.href = '/';
          }, 
        (error) => {
          this.errorReturn = 'Failed to login. Incorrect username or password!(' + error + ')'; 
          this.validReturn = null;
        });
      

    }
  }
}

</script>




<style>

.container{
  padding: 20px;
}


</style>