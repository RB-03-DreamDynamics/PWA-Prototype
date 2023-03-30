<script lang="ts">
import { defineComponent, reactive } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import Login from './components/Auth/LoginZenya.vue';
const onDecode = (text : any) => {
    console.log(`${text}`)
};

export default defineComponent({
  components: {
    StreamBarcodeReader,
    Login
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
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Login username="" password="" />
    </div>
    <div class="wrapper">
      <a href="/qr">Login with QR code</a>
    </div>
  </header>

  <div>
    <button @click="toggleReader">{{ state.readerEnabled ? 'Disable' : 'Enable' }} Reader</button>
    <div v-if="state.readerEnabled">
      <StreamBarcodeReader @decode="onDecode"/>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
