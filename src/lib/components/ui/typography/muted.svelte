<script lang="ts">
	export let className = '';
</script>

<p {...$$restProps} class={`text-muted-foreground ${className}`}>
	<slot />
</p>
