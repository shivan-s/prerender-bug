<script lang="ts">
	import somePic from '#lib/assets/desk-accessories.jpg?enhanced';
	import { m } from '#lib/paraglide/messages.js';
</script>

<h1>This page is prerendered!</h1>

{m.hello_world()}

<enhanced:img src={somePic} alt="Accessories on a desk with number overlaid" />
