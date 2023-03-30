<script setup lang="ts">
import {ref} from 'vue'
import $ from 'jquery'
import DOMPurify from 'dompurify';

const username = ref('')
const password = ref('')

const login = () => {
  console.log('login')
}


function base64EncodeUnicode(input: string | number | boolean) {
  return btoa(
    encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
      return String.fromCharCode(parseInt("0x" + p1));
    })
  );
}

async function checkAuth() {
  /*
  This example shows how credential authentication is handled with jQuery.
  Of course you should never expose your apiKey or password in the front end.
  */
  var _userName =  DOMPurify.sanitize(username.value);
  var _password =  DOMPurify.sanitize(password.value);
  console.log(_userName);
  console.log(_password);
// Globally handle all ajax errors
  $(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
    alert(JSON.stringify(jqxhr));
  });

  function base64EncodeUnicode(input) {
    return btoa(
      encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
        return String.fromCharCode(parseInt("0x" + p1));
      })
    );
  }
  console.log(base64EncodeUnicode(_userName + ":" + _password))
// Get the iProva version
  fetch("https://msteams.zenya.work/api/bearer_tokens", {
    method: "POST",
    headers: {
      Authorization: "Basic " + base64EncodeUnicode(_userName + ":" + _password)
    }
  }).then(res => res.json())
    .then(response => {
      console.log(response);
    })
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <p>Username</p>
    <input type="text" v-model="username" />
    <p>Password</p>
    <input type="password" v-model="password" />
    <button @click="checkAuth">Login</button>
  </div>
</template>