<template>
  <div id="app">
    <main>
      <input type="text" id="username" class="textArea text" placeholder="Username">
      <input type="password" id="pw" class="textArea text" placeholder="Password">
    </main>
  </div>
</template>



<script>

export default {
  name: 'App',
  data(){
    return {
      url_base:'localhost:3000/user/login',
      query: '',
      response: ''
    }
  },
  methods: {
    fetchLogin (e) {
      if(e.key == "Enter") {
        fetch(`${this.url_base}`)
      }
    }
  }
}

</script>

<style>
.text{
  width: 50%;
  font-size: 25px;
  border: 2px solid #000000;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.75);
  padding:10px;
  margin-top:25px;
  margin-left: 50px;

}

#username{

  margin-top: 50px;

}


main{
  display: flex;
  align-content: center;
  width:50%;
  flex-direction: column;
}
</style>
