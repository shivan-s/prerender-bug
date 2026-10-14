<script lang="ts">
	import { getCount } from './counter.remote';

	const remote = getCount();
	const { count } = $derived(await remote);
	const connected = $derived(remote.connected);
</script>

<p>{count}</p>

<p>Alive?: {connected}</p>
