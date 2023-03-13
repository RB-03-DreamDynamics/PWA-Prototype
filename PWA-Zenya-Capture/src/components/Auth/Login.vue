<script setup lang="ts">

import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
    console.log('login')
}

</script>

<template>
    <div>
        <h1>Login</h1>
        <p>Username</p>
        <input type="text" v-model="username" />
        <p>Password</p>
        <input type="password" v-model="password" />
        <button @click="login">Login</button>
    </div>
</template>