<script lang="ts">
    import { DirectionPalette } from "../DirectionPalette";

    export let direction: DirectionPalette = DirectionPalette.left;
    export let color1 = '';
    export let color2 = '';
    export let color3 = '';
</script>

<section 
    class:left = { direction == DirectionPalette.left } 
    class:right = { direction == DirectionPalette.rigth }
>
    <i class="color1"></i>
    <i class="color2"></i>
    <i class="color3"></i>
</section>

<style>
    section {
        @apply 
        absolute top-1/3
        h-fit w-fit
        flex flex-col gap-3;
    }

    i {
        @apply 
        w-20 h-20
        rounded-full;
    }

    /* LEFT */

    .left {
        @apply left-6;
    }

    .left > .color1 {
        background-color: #F08B8B;
    }

    .left > .color2 {
        background-color: #F2ED64;
    }

    .left > .color3 {
        background-color: #CB77F3;
    }

    /* RIGTH */

    .right {
        @apply right-6;
    }

    .right > .color1 {
        background-color: #8AC574;
    }

    .right > .color2 {
        background-color: #7381FD;
    }

    .right > .color3 {
        background-color: #5CDFD7;
    }
</style>