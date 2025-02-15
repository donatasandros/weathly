<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<div
	class="z-10 w-full bg-gradient-to-b from-emerald-800 to-emerald-900 px-4 py-16 pb-24 md:rounded-3xl md:p-24 md:pb-48"
>
	<header class="mx-auto max-w-3xl">
		<div class="mb-4 text-center text-4xl font-semibold md:mb-6 md:text-7xl">
			<h1 class="text-white">Stay ahead of the weather.</h1>
		</div>
		<p class="mb-10 text-center text-lg text-emerald-200 md:mb-12 md:text-xl">
			Simple, accurate, and real-time weather updates for any city. Just enter a location and get
			instant forecasts—fast, reliable, and easy to use.
		</p>

		<div class="mx-auto flex max-w-[480px] flex-col items-start gap-1.5">
			<div class="flex w-full justify-center max-md:flex-col md:items-center">
				<Input placeholder="Enter city name" class="h-12 px-3.5 max-md:mb-1.5 md:mr-2" />
				<p class="mb-4 text-sm text-emerald-200 md:hidden">
					Privacy forecast: 100% secure with zero chance of leaks.
				</p>
				<Button class="ring-offset-emerald-800 max-md:w-full">Search</Button>
			</div>
			<p class="text-center text-sm text-emerald-200 max-md:hidden">
				Privacy forecast: 100% secure with zero chance of leaks.
			</p>
		</div>
	</header>
</div>
<div class="-mt-8 px-4 md:-mt-24">
	<div class="mx-auto max-w-[800px] rounded-xl bg-white p-8 shadow-2xl">results</div>
</div>
