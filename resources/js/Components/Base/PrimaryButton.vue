<template>
    <button
        type="button"
        class="border border-black bg-transparent px-8 py-3 uppercase text-xs duration-300 close hover:text-white"
    >
       <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    href: String,
});
</script>


<style scoped>

.close:hover,
.close:focus {
  box-shadow: 
    inset -5.5em 0 0 0  #333,
    inset 5.5em 0 0 0 #333;  
    
}

</style>