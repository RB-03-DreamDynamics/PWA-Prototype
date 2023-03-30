<script setup lang="ts">
    import Login from '../components/Auth/LoginZenya.vue';
</script>

<template>
    <div class="bg-login">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Login</h1>
                </div>  
            </div>

            <div class="row">
                <div class="col-12">
                    <Login username="" password="" />
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <a href="/login/qr">Login with QR code</a>
                </div>
            </div>
        </div>
    </div>
</template>