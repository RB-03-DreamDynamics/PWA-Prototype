<template>
    <div>
        <p>logging out...</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const logout = () => {
    if (localStorage.getItem('token') != null) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
};

onMounted(logout);
</script>
