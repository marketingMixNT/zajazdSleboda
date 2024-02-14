<template>
    <transition name="fade" mode="out-in" appear>
        <div>
            
            <NavBar/>
            <slot></slot>

            <footer></footer>
        </div>
    </transition>
</template>

<script setup>

import NavBar from '@/Pages/Shared/Navigation/NavBar.vue'

</script>



<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 3s;
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}
</style>
