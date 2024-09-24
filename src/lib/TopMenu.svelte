<script>
    let menu_items = ["Пункт 1", "Пункт 2", "Пункт 3"];
    export let SelectComp; //ссылка на функцию, переключащую компоненты; находится в App
    let active = 0; //индекс активного пункта меню
</script>

<div class="menu-items">
    {#each menu_items as item, i}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class:active={active == i}
            on:click={() => {
                SelectComp(i);
                active = i;
            }}
        >
            {i}-{item}
        </div>
    {/each}
</div>

<style>
    .menu-items {
        display: flex;
        justify-content: space-between;
    }
    .active {
        border-bottom: 2px solid yellowgreen;
    }

    .menu-items > div {
        padding: 10px 20px; 
        cursor: pointer; 
    }
    .menu-items > div:hover {
        background-color: #f0f0f0; 
        color: rgb(37, 35, 35);
    }
</style>
