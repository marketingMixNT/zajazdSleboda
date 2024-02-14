<template>
    <nav class="bg-primary-400 fixed left-0 top-0 right-0 z-50">
        <div
            class="flex justify-between items-center max-w-screen-xl mx-auto py-4 sm:py-10 px-4 md:px-12 2xl:px-0"
        >
            <!--LEFT SIDE-->
            <div class="box ">
                <div>
                    <HamburgerBtn @click="showModal = !showModal"/>
                </div>
                <a href="#" class="text-sm mb-1 hidden lg:inline-block duration-300 tel"
                    >+48 123 456 789</a
                >
            </div>
            <!--CENTER-->
            <Link href="/" class="absolute left-1/2 transform -translate-x-1/2 ">
            <img
                src="/assets/logo/logo--dark.png"
                alt="logo Śleboda Zajazd"
                class=" w-16 sm:w-28 "
            />
        </Link>
            <!--RIGHT SIDE-->
            <div class="box ">
            
                <LanguagesSwitcher/>
                <PrimaryButton class="hidden sm:inline-block"><a href="#"  >Rezerwuj</a></PrimaryButton>
            </div>
        </div>

        <teleport to="body">
            <Menu :showModal="showModal" />
        </teleport>
    </nav>

   

</template>

<script setup>
import HamburgerBtn from "@/Components/Navigation/HamburgerBtn.vue";
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";
import LanguagesSwitcher from '@/Components/Navigation/LanguagesSwitcher.vue'

import Menu from "./Menu.vue"
import { ref, onMounted, watch } from "vue";

const showModal = ref(false);

const body = document.querySelector("body");

onMounted(() => {
    watch(showModal, (newValue) => {
        if (newValue) {
            body.classList.add("overflow-y-hidden");
        } else {
            body.classList.remove("overflow-y-hidden");
        }
    });
});

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};



</script>

<style lang="scss" scoped>


.box {
    @apply flex justify-center items-center gap-12;
}

.tel
{
    position:relative;
    
    &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
    
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
        @apply bg-secondary-400
      }

      &:hover {
        color: #95a5a6;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
</style>
