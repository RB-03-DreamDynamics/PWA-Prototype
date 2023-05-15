<template>
    <div class="container header">
        <div class="row d-flex justify-content-center mt-2">
            <div class="col-auto">
                <img src="@/assets/images/zenya-capture-logo.png" alt="Zenya Capture logo" class="logo-header">
            </div>
            <div class="col-auto d-flex">
                <p class="mb-0 me-1 fw-bold logo-text fs-2">Zenya</p>
                <p class="mb-0 fw-bold zenya-color logo-text fs-2">Capture</p>
            </div>
        </div>
        <div class="row text-center">
            <div class="status-indicator">
                <span :class="{ 'online': isOnline, 'offline': !isOnline }"></span>
                <p v-if="isOnline">Online</p>
                <p v-else>Offline</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  const isOnline = ref(navigator.onLine);

  const updateOnlineStatus = () => {
    isOnline.value = navigator.onLine;
  };

  onMounted(() => {
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  });

  onUnmounted(() => {
    window.removeEventListener('online',  updateOnlineStatus);
    window.removeEventListener('offline', updateOnlineStatus);
  });
</script>

<style scoped>
.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-indicator span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
}

.status-indicator p {
  display: inline-block;
  vertical-align: middle;
  margin: 0;
}

.status-indicator .online {
  background-color: rgb(0, 222, 0);
}

.status-indicator .offline {
  background-color: red;
}
</style>