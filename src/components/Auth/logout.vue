<template>
    <div>
        <p>logging out...</p>
    </div>
</template>

<script>
export default {
    name: "logout",
    mounted() {
        this.logout();
    },
    methods: {
        logout() {
            if (localStorage.getItem("token") != null) {
                localStorage.removeItem("token");
                window.location.href = "/login";
            }
        },
    },
};
</script>
