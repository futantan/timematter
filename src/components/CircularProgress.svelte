<script lang="ts">
	// TODO: move to reuseable component lib
	/**
	 * from 0 to 100
	 */
	export let value: number;

	$: percent = value / 100;

	const VIEW_SIZE = 100;
	const STROKE_WIDTH = 6;
	const PADDING = 4;
	const R = VIEW_SIZE / 2 - STROKE_WIDTH / 2 - PADDING;
	const CIRCUMFERENCE = 2 * Math.PI * R;
</script>

<div class="relative inline-block">
	<svg viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`} class="w-72 h-72">
		<circle
			cx={VIEW_SIZE / 2}
			cy={VIEW_SIZE / 2}
			r={R}
			fill="transparent"
			stroke-width={`${STROKE_WIDTH}px`}
			class="stroke-[#ebebeb]"
		/>
		<circle
			cx={VIEW_SIZE / 2}
			cy={VIEW_SIZE / 2}
			r={R}
			fill="transparent"
			stroke-width={`${STROKE_WIDTH}px`}
			class="stroke-green-500 transition duration-700 ease-in"
			stroke-linecap="round"
			stroke-dashoffset={CIRCUMFERENCE / 4}
			stroke-dasharray={`${CIRCUMFERENCE * percent} ${CIRCUMFERENCE - CIRCUMFERENCE * percent}`}
		/>
	</svg>
	<div class="absolute top-1/2 left-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2">
		<slot />
	</div>
</div>
