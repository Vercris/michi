<script lang="ts">
    import { onMount } from 'svelte';
    import {PlayerType} from '../DirectionPalette';
    import { mainCounter, numbersWin, isStopMainCounter, defaultMainCount, isPausedMainCounter } from '../Store';
    
    var intervalId: NodeJS.Timeout; // Guardaremos aquí el identificador del intervalo
    
    function iniciarContador() {
        intervalId = setInterval(() => {
            if ($mainCounter > 0) {
                mainCounter.update((value) => value - 1);
            } else {
                pausarReanudar();
                numbersWin.update(() => []);
            }
        }, 1000);
    }

    function pausarReanudar() {
        if ($isPausedMainCounter) {
            iniciarContador();
            isPausedMainCounter.update((() => false));
        } else {
            clearInterval(intervalId);
            isPausedMainCounter.update((() => true));
        }
    }

    export function reiniciarContador() {
        clearInterval(intervalId);
        mainCounter.update(() => defaultMainCount);
        isPausedMainCounter.update((() => false));
        iniciarContador();
    }

    onMount(() => {
        iniciarContador(); 
    });

    $: if($isStopMainCounter) {
        pausarReanudar();
    }

</script>

<section>
    <i> { $mainCounter } </i>
</section>

<style>
    section {
        @apply 
        absolute top-5 right-5
        w-16 h-16
        flex justify-center items-center
        rounded-full
        text-black font-semibold text-2xl;
        background-color: #7DCB6B;
    }
</style>
