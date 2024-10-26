<script>
    let { messagefrom } = $props();
</script>

<h2 class="message">
    {#if messagefrom}
        {messagefrom}
    {/if}
</h2>

<style>
    .message {
        letter-spacing: 3px;
    }
</style>
