<script lang="ts">
	// TODO: move to reusable component lib
	import { onDestroy } from 'svelte';

	export let immediate = false;
	export let callback: () => void = noop;
	export let interval = 1000;
	export let cleanUp: () => void = noop;

	onInterval(callback, interval);

	function onInterval(callback: () => void, milliseconds: number) {
		if (immediate) {
			callback();
		}
		const interval = setInterval(callback, milliseconds);

		onDestroy(() => {
			cleanUp();
			clearInterval(interval);
		});
	}

	function noop() {}
</script>
