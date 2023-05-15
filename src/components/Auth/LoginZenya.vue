<script setup lang="ts">
import {ref} from 'vue'
import $ from 'jquery'
import DOMPurify from 'dompurify';

const username = ref("")
const password = ref("")

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

  function base64EncodeUnicode(input:string) {
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
  <div class="container">
    <div class="row">
      <div class="col-12 m-0">
        <form class="row">
          <div class="col-12">
            <div class="mb-3 form-floating row">
            <input
              class="form-control"
              type="text"
              v-model="username"
              id="username"
              placeholder=" "
            />
            <label for="username">Gebruikersnaam</label>
          </div>
          <div class="mb-3 form-floating row">
            <input
              class="form-control"
              type="password"
              v-model="password"
              id="password"
              placeholder=" "
            />
            <label for="password">Wachtwoord</label>
          </div>
          <div class="row justify-content-around">
            <button type="button" class="col-10 submit-button" @click="checkAuth">
              <div class="row justify-content-center">
                <div class="col-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 96 960 960" width="24">
                    <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z"/>
                  </svg>
                </div>
                <div class="col-6">
                  <p class="logo-text mb-0">Aanmelden</p>
                </div>
              </div>
            </button>
          </div>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>
