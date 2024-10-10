<script>
    let menu_items = ["Пункт 1", "Пункт 2", "Пункт 3"];
    /**
     * @prop {function} - ссылка на функцию, переключащую компоненты;
     */
    export let SelectComp; //ссылка на функцию, переключащую компоненты; находится в App
    let active_idx = 0; //индекс активного пункта меню -> переделан на props

    /**
     *@prop {number} - id выбранного пункта
     */
    export let act_idx; // = 0;
</script>

<div class="menu-items">
    {#each menu_items as item, i}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class:active={act_idx == i}
            on:click={() => {
                SelectComp(i);
                //active_idx = i;
            }}
        >
            {i}-{item}
        </div>
    {/each}
</div>

<style>
    /* https://codepen.io/Gogh/pen/eYpjbKp */
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
