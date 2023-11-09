<template>
    <div class="app-container">
        <nav-bar class="nav-bar" />
        <div class="main-container">
            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import navBar from "./components/navBar.vue";
</script>

<style lang="scss" scoped>
.app-container {
    display: flex;
    align-items: center;
    width: 100%;

}

.nav-bar {
    background-color: red;
    width: 30%;

}

.main-container {
    text-align: left;

}
</style>
