<script lang="ts">
	import BackgroundLayer from '../components/BackgroundLayer.svelte';
	import CircularProgress from '../components/CircularProgress.svelte';
	import LofiPlayer from '../components/LofiPlayer.svelte';
	import Timer from '../components/Timer.svelte';
	import { timeCountDown } from '../utils/timeCountDown';

	const TWENTY_FIVE_MINUTES = 25 * 60;
	let isTicking = false;
	let countdown = TWENTY_FIVE_MINUTES;

	function handleStart() {
		isTicking = true;
	}

	function handleStop() {
		isTicking = false;
		countdown = TWENTY_FIVE_MINUTES;
	}

	function handleTick() {
		countdown--;
	}
</script>

<svelte:head>
	<title>{isTicking ? `[${timeCountDown(countdown)}]` : 'Timematter'}</title>
</svelte:head>

<BackgroundLayer />

{#if isTicking}
	<LofiPlayer />
	<Timer callback={handleTick} immediate={true} interval={1000} />
{/if}

<div class="w-full min-h-screen flex flex-col items-center justify-center">
	<div class="flex flex-col items-center">
		<div>
			<CircularProgress value={(countdown / TWENTY_FIVE_MINUTES) * 100}>
				<div class="text-5xl font-bold">{timeCountDown(countdown)}</div>
			</CircularProgress>
		</div>
		<button
			on:click={!isTicking ? handleStart : handleStop}
			type="button"
			class="inline-flex items-center rounded-md border border-transparent bg-green-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-green-700"
		>
			{#if !isTicking}
				Start Focus
			{:else}
				End Focus
			{/if}
		</button>
	</div>
</div>
