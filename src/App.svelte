<script lang="ts">
  import "./app.css";
  import MainCounter from './lib/MainCounter.svelte';
  import ColorPalette from './lib/ColorPalette.svelte';
  import {DirectionPalette, PlayerType} from "./DirectionPalette";
  import Player from "./lib/Player.svelte";
  import Table from "./lib/Table.svelte";
  import { mainCounter, numbersWin, defaultMainCount, michiCounter, robotCounter, isPausedMainCounter } from "./Store";
  
  let mainCounterRef: MainCounter;

  function resetGame() {
    mainCounter.update(() => defaultMainCount);
    michiCounter.update(() => []);
    robotCounter.update(() => []);
    numbersWin.update(() => []);
    mainCounterRef.reiniciarContador();
    showResetButton = false;
  }

  var showResetButton = false;

  $: if ($numbersWin.length != 0 || $isPausedMainCounter) {
    showResetButton = true;
  }
</script>

<main>
  <MainCounter bind:this={mainCounterRef}/>
  <!-- <ColorPalette direction={DirectionPalette.left} />
  <ColorPalette direction={DirectionPalette.rigth} /> -->
  <Player player={PlayerType.michi}/>
  <Player player={PlayerType.robot}/>
  <Table/>
  {#if showResetButton}
    <button class="absolute bottom-3 right-1/2 translate-x-1/2 bg-black rounded-md" on:click={resetGame}>
      Reiniciar
    </button>
  {/if}
</main>

<style>
  main {
    @apply
    flex justify-center items-center
    w-screen h-screen
    bg-white;
  }
</style>
