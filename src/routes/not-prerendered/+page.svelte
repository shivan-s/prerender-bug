<script lang="ts">
	import somePic from '#lib/assets/desk-accessories.jpg?enhanced';
	import Counter from '#lib/counter/Counter.svelte';
</script>

<h1>This page is <u>not</u> prerendered!</h1>

<enhanced:img src={somePic} alt="Accessories on a desk with number overlaid" />

<Counter />
