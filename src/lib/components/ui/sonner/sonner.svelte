<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
	import { mode } from 'mode-watcher';

	let restProps: SonnerProps = $props();
</script>

<Sonner
	theme={$mode}
	class="toaster group"
	toastOptions={{
		classes: {
			toast:
				'group toast group-[.toaster]:bg-white group-[.toaster]:text-neutral-900 group-[.toaster]:border group-[.toaster]:border-gray-300 group-[.toaster]:shadow-lg',
			description: 'group-[.toast]:text-neutral-600',
			actionButton: 'group-[.toast]:bg-emerald-600 group-[.toast]:text-white',
			cancelButton: 'group-[.toast]:bg-gray-50 group-[.toast]:text-neutral-900'
		}
	}}
	{...restProps}
/>
