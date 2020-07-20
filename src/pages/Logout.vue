<template>
  <div id="logout">
    <main>
    </main>
  </div>

</template>




<script>
localStorage.setItem('user-token', 'undefined');
window.location.href = '/';
</script>




<style>
</style>