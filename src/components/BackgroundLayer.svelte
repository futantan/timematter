<div class="main bg-gray-100 dark:bg-black/80" />

<style>
	.main {
		z-index: -1;
		width: 100vw;
		min-height: 100vh;
		position: fixed;
		display: flex;
		justify-content: center;
		padding: 120px 24px 160px 24px;
		pointer-events: none;
	}

	.main:after {
		content: '';
		background-image: url('/images/grid.svg');
		z-index: 1;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		opacity: 0.4;
		filter: invert(1);
	}
</style>
