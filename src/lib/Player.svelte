<script lang="ts">
    import {PlayerType} from "../DirectionPalette";
    import { michiCounter, robotCounter } from '../Store';

    export var player: PlayerType = PlayerType.michi;

    var image = player == PlayerType.michi ? '/assets/cat_happy.svg' : '/assets/robot_happy.svg';
</script>

<section 
    class:michi={ player == PlayerType.michi }
    class:robot={ player == PlayerType.robot }
>
    <img src={image} alt="">
    {#if player == PlayerType.michi}
        <i class="counter"> {$michiCounter.length} </i>
    {:else}
        <i class="counter"> {$robotCounter.length} </i>
    {/if}
</section>

<style>
    section {
        @apply z-50
        absolute top-16 sm:top-32
        flex flex-row justify-center items-center gap-5
        w-40 h-28;
    }

    img {
        @apply w-14 h-14;
    }

    .michi {
        @apply left-5 sm:left-1/4;
    }

    .robot {
        @apply right-5 sm:right-1/4;
    }

    .counter {
        @apply 
        w-14 h-14
        flex justify-center items-center
        font-semibold text-2xl
        rounded-full;
    }

    .michi > .counter {
        @apply bg-orange-500;
    }

    .robot > .counter {
        @apply bg-black;
    }
</style>