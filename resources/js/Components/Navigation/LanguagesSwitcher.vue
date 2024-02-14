<template>
    <ul
                    class="justify-center items-center gap-5 list-none text-sm hidden lg:flex"
                >
                    <li><a href="" class="duration-300">PL</a></li>
                    <li><a href="" class="duration-300">ENG</a></li>
                </ul>
</template>

<style lang="scss" scoped>



a 
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