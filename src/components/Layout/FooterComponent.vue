<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    name: 'FooterComponent',
    setup() {
        return {
        };
    },
});

</script>

<template>
    <div class="container footer">
        <div class="row">
            <div class="col-2">
                <div class="row">
                    <img src="@/assets/icons/mdi-settings.svg" alt="Settings Icon" class="footer-icons">
                </div>
                <div class="row">
                    <p class="p-0 m-0">Instellingen</p>
                </div>
            </div>
            <div class="col-2">
                <div class="row">
                    <img src="@/assets/icons/mdi-empty-message.svg" alt="Empty Messages Icon" class="footer-icons">
                </div>
                <div class="row">
                    <p class="p-0 m-0 lh-1">Mijn meldingen</p>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <router-link to="/dashboard">
                    <div class="footer-add-button">
                        <p class="fs-1">+</p>
                    </div>
                </router-link>
                
            </div>
            <div class="col-2">
                <div class="row">
                    <img src="@/assets/icons/mdi-info.svg" alt="Info Icon" class="footer-icons">
                </div>
                <div class="row">
                    <p class="p-0 m-0 lh-1">Info & Feedback</p>
                </div>
            </div>
                <div class="col-2">
                    <router-link to="/logout">

                    <div class="row">
                        <img src="@/assets/icons/mdi-logout.svg" alt="Logout icon" class="footer-icons">
                    </div>
                    </router-link>

                    <div class="row">
                        <p class="p-0 m-0">Uitloggen</p>
                    </div>
                </div>

        </div>
    </div>
</template>