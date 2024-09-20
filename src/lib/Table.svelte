<script lang="ts">
    import { Sound } from "svelte-sound";
    import partySound from "@public/sounds/partyTap.mp3";
    import { Confetti } from "svelte-confetti"
    import { michiCounter, robotCounter, succesCases, numbersWin, isStopMainCounter } from '../Store';
    import Cajita from "./Cajita.svelte";
    
    let rpt = false;
    const clickRobotSound = new Sound(partySound);

    function verifyArrays(arr1: number[], arr2: number[]): boolean {
        if (arr1.length !== arr2.length) return false;
        const sortedArr1 = [...arr1].sort();
        const sortedArr2 = [...arr2].sort();
        return sortedArr1.every((value, index) => value === sortedArr2[index]);
    }

    michiCounter.subscribe(value => {
        succesCases.forEach(caseItem => {
            var response = verifyArrays(value, caseItem);
            if(response) { 
                clickRobotSound.play();
                numbersWin.update(() => caseItem);
                rpt = response;
                isStopMainCounter.update(() => true);
            }
        });
    });

    robotCounter.subscribe(value => {
        succesCases.forEach(caseItem => {
            var response = verifyArrays(value, caseItem);
            if(response) { 
                clickRobotSound.play();
                numbersWin.update(() => caseItem);
                rpt = response; 
                isStopMainCounter.update(() => true);
            }
        });
    });

    $: if($numbersWin.length == 0) {
        rpt = false;
    }
    
</script>

{#if rpt}
    <div style="
    position: fixed;
    top: -10px;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
    pointer-events: none;">
    <Confetti x={[-5, 5]} y={[0, 0.1]} delay={[0, 1000]} duration={5000} amount={200} fallDistance="100vh" />
    </div>
{/if}
<main>
    <Cajita id={1}/>
    <Cajita id={2}/>
    <Cajita id={3}/>
    <Cajita id={4}/>
    <Cajita id={5}/>
    <Cajita id={6}/>
    <Cajita id={7}/>
    <Cajita id={8}/>
    <Cajita id={9}/>
</main>

<style>
    main {
        @apply 
        grid grid-cols-3 grid-rows-3 gap-0.5
        w-80 h-80 p-0
        bg-black;
    }
</style>