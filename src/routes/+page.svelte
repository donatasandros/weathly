<script lang="ts">
	import { page } from '$app/state';

	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import {
		ThermometerIcon,
		DropletsIcon,
		WindIcon,
		CloudyIcon,
		CircleGaugeIcon,
		SearchIcon
	} from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { format, formatDistanceStrict } from 'date-fns';

	let { data } = $props();

	$effect(() => {
		if (data.error) {
			toast.error(data.error);
		}
	});
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
			<form class="flex w-full justify-center max-md:flex-col md:items-center">
				<Input
					placeholder="Enter city name"
					name="city"
					required
					class="h-12 px-3.5 max-md:mb-1.5 md:mr-2"
				/>
				<p class="mb-4 text-sm text-emerald-200 md:hidden">
					Privacy forecast: 100% secure with zero chance of leaks.
				</p>
				<Button type="submit" class="ring-offset-emerald-800 max-md:w-full">Search</Button>
			</form>
			<p class="text-center text-sm text-emerald-200 max-md:hidden">
				Privacy forecast: 100% secure with zero chance of leaks.
			</p>
		</div>
	</header>
</div>
{#if data.weather !== undefined}
	<div class="-mt-8 px-4 md:-mt-24">
		<div class="mx-auto max-w-[800px] rounded-xl bg-white p-8 shadow-2xl">
			{#if data.weather}
				<div>
					<h2 class="mb-1 text-2xl font-semibold text-neutral-900">
						{data.weather.city}, {data.weather.country}
					</h2>
					<Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger class="mb-6 cursor-default "
								><p class="text-neutral-600">
									Updated{' '}{formatDistanceStrict(new Date(data.weather.dt * 1000), new Date(), {
										addSuffix: true
									}).toLowerCase()}
								</p></Tooltip.Trigger
							>
							<Tooltip.Content side="bottom">
								<p>
									{format(new Date(data.weather.dt * 1000), 'MMMM d, yyyy h:mm a')}
								</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				</div>
				<div class="flex flex-wrap items-center gap-5">
					<div
						class="flex flex-1 flex-nowrap gap-4 rounded-xl border border-neutral-200 p-5 shadow-sm"
					>
						<div
							class="flex size-10 items-center justify-center rounded-lg border border-neutral-200 shadow-sm"
						>
							<ThermometerIcon class="size-5 text-neutral-700" />
						</div>
						<div class="space-y-2">
							<p class="text-sm font-semibold text-neutral-600">Temperature</p>
							<p class="whitespace-nowrap text-3xl font-semibold text-neutral-900">
								{data.weather.temp}°C
							</p>
						</div>
					</div>
					<div
						class="flex flex-1 flex-nowrap gap-4 rounded-xl border border-neutral-200 p-5 shadow-sm"
					>
						<div
							class="flex size-10 items-center justify-center rounded-lg border border-neutral-200 shadow-sm"
						>
							<DropletsIcon class="size-5 text-neutral-700" />
						</div>
						<div class="space-y-2">
							<p class="text-sm font-semibold text-neutral-600">Humidity</p>
							<p class="whitespace-nowrap text-3xl font-semibold text-neutral-900">
								{data.weather.humidity}%
							</p>
						</div>
					</div>
					<div
						class="flex flex-1 flex-nowrap gap-4 rounded-xl border border-neutral-200 p-5 shadow-sm"
					>
						<div
							class="flex size-10 items-center justify-center rounded-lg border border-neutral-200 shadow-sm"
						>
							<WindIcon class="size-5 text-neutral-700" />
						</div>
						<div class="space-y-2">
							<p class="text-sm font-semibold text-neutral-600">Wind speed</p>
							<p class="whitespace-nowrap text-3xl font-semibold text-neutral-900">
								{data.weather.wind} m/s
							</p>
						</div>
					</div>
					<div
						class="flex flex-1 flex-nowrap gap-4 rounded-xl border border-neutral-200 p-5 shadow-sm"
					>
						<div
							class="flex size-10 items-center justify-center rounded-lg border border-neutral-200 shadow-sm"
						>
							<CloudyIcon class="size-5 text-neutral-700" />
						</div>
						<div class="space-y-2">
							<p class="text-sm font-semibold text-neutral-600">Cloud cover</p>
							<p class="whitespace-nowrap text-3xl font-semibold text-neutral-900">
								{data.weather.clouds}%
							</p>
						</div>
					</div>
					<div
						class="flex flex-1 flex-nowrap gap-4 rounded-xl border border-neutral-200 p-5 shadow-sm"
					>
						<div
							class="flex size-10 items-center justify-center rounded-lg border border-neutral-200 shadow-sm"
						>
							<CircleGaugeIcon class="size-5 text-neutral-700" />
						</div>
						<div class="space-y-2">
							<p class="text-sm font-semibold text-neutral-600">Pressure</p>
							<p class="whitespace-nowrap text-3xl font-semibold text-neutral-900">
								{data.weather.pressure} hPa
							</p>
						</div>
					</div>
					<div
						class="flex flex-1 flex-nowrap gap-4 rounded-xl border border-neutral-200 p-5 shadow-sm"
					>
						<div
							class="flex size-10 items-center justify-center rounded-lg border border-neutral-200 shadow-sm"
						>
							<ThermometerIcon class="size-5 text-neutral-700" />
						</div>
						<div class="space-y-2">
							<p class="text-sm font-semibold text-neutral-600">Feels like</p>
							<p class="whitespace-nowrap text-3xl font-semibold text-neutral-900">
								{data.weather.feels_like}°C
							</p>
						</div>
					</div>
				</div>
			{:else}
				<div class="flex flex-col items-center justify-center gap-4">
					<div
						class="flex size-12 items-center justify-center rounded-[10px] border border-neutral-200 shadow-sm"
					>
						<SearchIcon class="size-6 text-neutral-700" />
					</div>
					<div class="mx-auto max-w-80 text-center">
						<p class="mb-1 font-semibold text-neutral-700">No locations found</p>
						<p class="text-sm text-neutral-600">
							Your search "{page.url.searchParams.get('city')}" did not match any locations. Please
							try again.
						</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
