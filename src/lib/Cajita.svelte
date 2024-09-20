<script lang="ts">
    import { Sound } from "svelte-sound";
    import miauSound from "@public/sounds/miauTap.mp3";
    import robotSound from "@public/sounds/robotTap.mp3";
    import {PlayerType} from "../DirectionPalette";
    import { playerTurn, michiCounter, robotCounter, numbersWin } from '../Store';

    export let id: number;

    const clickMiauSound= new Sound(miauSound);
    const clickRobotSound = new Sound(robotSound);
    
    var image = '';
    var cancelTap = true;
    var isSelected = false;

    function meApretaste() {
        if (cancelTap) {
            cancelTap = false;
            if ( $playerTurn == PlayerType.michi ) {
                clickMiauSound.play();
                image = '/assets/cat_happy.svg';
                michiCounter.update((n) => [...n, id]);
                $playerTurn = PlayerType.robot;
            } else {
                clickRobotSound.play();
                image = '/assets/robot_happy.svg';
                robotCounter.update((n) => [...n, id]);
                $playerTurn = PlayerType.michi;
            }
        }
    }

    $: if ($michiCounter.length == 0 && $robotCounter.length == 0) {
        image = '';
        cancelTap = true;
	}

    $: if($numbersWin.includes(id)) {
        isSelected = true;
    } else {
        isSelected = false;
    }

    $: if($numbersWin.length != 0) {
        cancelTap = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article class:selected={isSelected} on:click={meApretaste}>
    {#if image != ''}
        <img src={image} alt="hola">
    {/if}
</article>

<style>
    article {
        @apply 
        flex justify-center items-center
        bg-white;
    }
    .selected {
        @apply animate-[pulse_0.5s_ease-in-out_infinite];
    }
</style>