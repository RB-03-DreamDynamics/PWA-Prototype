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

            <div class="row login-bg px-2 py-5 mx-3 my-5 justify-content-center ">
                <div class="col-10">
                    <div class="row pb-3">
                        <h1 class="text-white text-center fw-bold">Aanmelden</h1>
                        <p class="text-white text-center">Gebruik een van onderstaande manieren om je aan te melden met je organisatieaccount bij Zenya</p>
                    </div>
                    <a href="/login/credentials" class="bg-white shadow-lg rounded row justify-content-evenly p-2 mb-3">
                        <div class="col-2">
                            <img src="../assets/icons/mdi-user.svg" alt="User-icon">
                        </div>
                        <div class="col-7 d-flex align-items-center">
                            <p class="text-black m-0 fw-bold">Gebruikersnaam & Wachtwoord</p>
                        </div>
                    </a>
                    <a href="/login/qr" class="bg-white shadow-lg rounded row justify-content-evenly p-2">
                        <div class="col-2">
                            <img src="../assets/icons/mdi-qrscanner.svg" alt="QR-scanner-icon">
                        </div>
                        <div class="col-7 d-flex align-items-center">
                            <p class="text-black m-0 fw-bold">QR</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="row">
                <img class="background-logo" src="../assets/images/zenya-logo-wit.png" alt="zenya logo">
            </div>
        </div>
    </div>
</template>