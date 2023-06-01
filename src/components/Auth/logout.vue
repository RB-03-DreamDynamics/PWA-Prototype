<script>
export default {
    name: "logout"
}

if(localStorage.getItem('token') != null){
    localStorage.removeItem('token');
    window.location.href = "/login";
}
</script>
<template>
  <div>
      <p>logging out...</p>
  </div>
</template>