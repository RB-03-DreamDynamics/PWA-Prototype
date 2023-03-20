<script setup lang="ts">
import {ref} from 'vue'
import axios from "axios";

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
  const baseURL = "http://iprova/api/versions/iprova";

  const config = {
    headers: {
      "Authorization": "Basic" + base64EncodeUnicode("j.t.kirk" + ":" + "set password"),
      "x-api-version": "1",
      "Accept": "application/vnd.example.api+json"
    }
  };
  try {
    const returnvalue = await axios.get(baseURL, config)
    console.log(returnvalue)
    return returnvalue;
  } catch (e) {
    console.error(e);
  }
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