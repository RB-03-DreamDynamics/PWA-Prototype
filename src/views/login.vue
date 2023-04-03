<script setup lang="ts">
    import Login from '../components/Auth/LoginZenya.vue';
</script>

<template>
    <div class="bg-login">
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-6 logo-bg px-3 py-2">
                    <div class="row">
                        <div class="col-5 d-flex align-items-center">
                            <img src="../assets/images/zenya-capture-logo.png" alt="logo" class="img-fluid" />
                        </div>
                        <div class="col-7 d-flex align-items-center">
                            <div>
                                <p class="logo-text mb-0">Zenya</p>
                            <p class="logo-text zenya-color mb-0">Capture</p>
                            </div>
                        </div>
                    </div>
                    <h1></h1>
                </div>  
            </div>

            <div class="row py-5">
                <div class="col-12">
                    <Login username="" password="" />
                </div>
            </div>

            <div class="row">
                <div class="col-12 py-5">
                    <a href="/login/qr">Login with QR code</a>
                </div>
            </div>

            <div class="row">
                <img class="background-logo" src="../assets/images/zenya-logo-wit.png" alt="zenya logo">
            </div>
        </div>
    </div>
</template>