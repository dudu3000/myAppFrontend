<template>
  <div id="app">
    <main>
      <div class="row">
        <div class="container">
          <div class="jumbotron">
            <h1>Register</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container border rounded-lg bg-light">
          <div class="alert alert-danger" v-if="errorReturn !== null">{{ errorReturn }}</div>
          <div class="alert alert-success" v-if="validReturn !== null">{{ validReturn }}</div>
          <form class="login" @submit.prevent="register">


            <div class="form-group">
              <label for="firstName">First name:</label>
              <input type="text" class="form-control" placeholder="First name" name="firstName" id="firstName" v-model="firstName" required />
            </div>
            
            <div class="form-group">
              <label for="lastName">Last name:</label>
              <input type="text" class="form-control" placeholder="Last name" name="lastName" id="lastName" v-model="lastName" required />
            </div>

            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" placeholder="Username" name="username" id="username" v-model="username" required />
            </div>
            
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" placeholder="Password" name="password" id="password" v-model="password" required />
            </div>
                        
            <div class="form-group">
              <label for="rpassword">Repeat password:</label>
              <input type="password" class="form-control" placeholder="Repeat password" name="rpassword" id="rpassword" v-model="rpassword" required />
            </div>

                                    
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" placeholder="Email" name="email" id="email" v-model="email" required />
            </div>

            <div class="form-group">
                <label for="bday">Birth Day:</label>
                <input type="date" class="form-control" name="bday" id="bday" v-model="bday" required/>
            </div>

            <button type="submit" class="btn btn-md btn-secondary">Login</button>

          </form>
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
  name: 'register',
  data(){
    return {
      validReturn: null,
      errorReturn: null,
      firstName: null,
      lastName: null,
      username: null,
      password: null,
      rpassword: null,
      email: null,
      bday: null,
      axios: require('axios').default,
    }
  },

  methods: {
    register () {
        if(this.password !== this.rpassword){
            this.errorReturn = 'You must insert the same password!';
            return;
        }
        this.axios.post('http://localhost:3000/user', {
          "firstName": this.firstName,
          "lastName": this.lastName,
          "userName": this.username,
          "password": this.password,
          "email": this.email,
          "birthDay": this.bday
        }).then((response) => {
            if(response.status == 201){
                this.validReturn = response.data.text;
                this.errorReturn = null;
            }else{
                this.errorReturn = response.data.text; 
                this.validReturn = null;
            }
          },(error) => {
            this.errorReturn = error.response.text; 
            this.validReturn = null;
            console.log(error);
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