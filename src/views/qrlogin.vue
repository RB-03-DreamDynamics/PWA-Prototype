<script lang="ts">
    import { defineComponent, reactive } from "vue";
    import { StreamBarcodeReader } from "vue-barcode-reader";

    export default defineComponent({
    components: {
        StreamBarcodeReader,
    },
    setup() {
        const state = reactive({
        readerEnabled: false,
        });

        const toggleReader = () => {
        state.readerEnabled = !state.readerEnabled;
        };

        return {
        state,
        toggleReader,
        onDecode,
        };
    },

    });
    const onDecode = (text : any) => {
        console.log(`${text}`)
    };
</script>

<template>
    <div class="container">
        <div class="row">
            <h1>qr</h1>
        </div>
        <div class="row">
            <div class="col-12">
                <button class="btn btn-primary" @click="toggleReader">{{ state.readerEnabled ? 'Disable' : 'Enable' }} Reader</button>
                <div v-if="state.readerEnabled">
                    <StreamBarcodeReader @decode="onDecode"/>
                </div>
            </div>
            
        </div>
        
        <div>
            
        </div>
    </div>
</template>