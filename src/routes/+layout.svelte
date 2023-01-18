<script>
	import '../app.css';

	const TITLE = 'Timematter';
	const DESC = 'Timematter - Pomodoro with Lofi music';
	const IMAGE = '/images/og.png';
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESC} />

	<meta itemProp="image" content={IMAGE} />
	<meta property="og:logo" content="/images/og.png" />
	<meta property="og:title" content={DESC} />
	<meta property="og:description" content={DESC} />
	<meta property="og:image" content={IMAGE} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="http://futantan.com/" />
	<meta name="twitter:creator" content="@EclipsePrayer" />
	<meta name="twitter:title" content={DESC} />
	<meta name="twitter:description" content={DESC} />
	<meta name="twitter:image" content={IMAGE} />
</svelte:head>

<slot />
