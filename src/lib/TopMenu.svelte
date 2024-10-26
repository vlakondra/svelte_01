<script>
    let menu_items = ["Пункт 1", "Пункт 2", "Пункт 3"];

    

    let active_idx = 0; //индекс активного пункта меню -> переделан на props

    
    /**
     * @typedef {Object} Props
     * @property {any} SelectComp
     * @property {any} act_idx
     */

    /** @type {Props} */
    let { SelectComp, act_idx } = $props();
</script>

<div class="menu-items">
    {#each menu_items as item, i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div
            class:active={act_idx == i}
            onclick={() => {
                SelectComp(i);
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
        transition: 0.5s all ease-out;
    }

    .menu-items > div {
        padding: 10px 20px;
        cursor: pointer;
    }
    .menu-items > div:hover {
        background-color: #f0f0f0;
        color: rgb(37, 35, 35);
    }

    /* этот медиа-запрос теперь нужно убрать из App */
    @media (max-width: 480px) {
        div.menu-items {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
