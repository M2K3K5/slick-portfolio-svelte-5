<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer class="mt-auto w-full border-t border-border px-3 py-4 md:px-4 md:py-6">
	<div class="mx-auto max-w-[1200px]">
		<div
			class="flex flex-col items-center gap-2 text-center md:flex-row md:justify-center md:gap-4"
		>
			<div class="flex flex-wrap items-center justify-center gap-2 md:gap-3">
				<a
					href={`${base}/contact`}
					class="whitespace-nowrap text-sm text-secondary-foreground transition-colors hover:text-accent-foreground md:text-[0.85rem]"
				>
					Contact
				</a>
				<span class="text-xs text-muted-foreground md:text-[0.75rem]">•</span>
				<a
					href={`${base}/privacy`}
					class="whitespace-nowrap text-sm text-secondary-foreground transition-colors hover:text-accent-foreground md:text-[0.85rem]"
				>
					Privacy Policy
				</a>
			</div>
		</div>
	</div>
</footer>
