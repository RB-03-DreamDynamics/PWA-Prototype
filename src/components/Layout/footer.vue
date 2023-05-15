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
                <div class="row"></div>
                <div class="row">
                    <p>Instellingen</p>
                </div>
            </div>
            <div class="col-2">
                <div class="row">

                </div>
                <div class="row">
                    <p>Mijn meldingen</p>
                </div>
            </div>
            <div class="col"></div>
            <div class="col-2">
                <div class="row"></div>
                <div class="row">
                    <p>Info & Feedback</p>
                </div>
            </div>
            <div class="col-2">
                <div class="row"></div>
                <div class="row">
                    <p>Uitloggen</p>
                </div>
            </div>
        </div>
    </div>
</template>