import { query } from '$app/server';

export const getCount = query.live(async function* () {
	let count = 0;
	while (true) {
		count += 1;
		yield { count };
		await new Promise((_) => setTimeout(_, 1000));
	}
});
