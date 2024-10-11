<script>
    /**
     * функция, переключающая компоненты
     */
    export let app_function;
    // export let parr
    // let arr = parr//[1, 2, 3, 4, 5];
    import { tarr } from "./store.js";

    function addItem() {
        if ($tarr.length == 0) {
            $tarr = [...$tarr, 0];
        } else {
            $tarr = [...$tarr, Math.max(...$tarr) + 1];
        }
    }
    
    const removeItem = () => {
        $tarr.splice(0, 1);
        $tarr = [...$tarr];
        console.log($tarr);
    };
    let flt = 0.1;
    const filterby = (idx) => {
        flt = idx;
    };
</script>

<div class="wrapper">
    <h1>Массивы и циклы</h1>

    <div>
        {#each $tarr.filter((el) => el != flt) as item, i (Math.floor(Math.random() * 100000))}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={() => filterby(item)}>
                {item}-{i}-{Math.floor(Math.random() * 100000)}
            </div>
        {:else}
            Массив пуст
        {/each}
    </div>

    <div>
        <button on:click={addItem}>Добавить</button>
    </div>
    <div>
        <button disabled={$tarr.length == 0} on:click={removeItem}
            >Удалить</button
        >
    </div>
    <div>
        <button on:click={() => app_function("Сообщение от Comp1")}
            >Кнопка 1</button
        >
    </div>
</div>

<style>
    button {
        width: 100px;
        height: 50px;
        background-color: red;
        color: azure;
    }
    .wrapper {
        border: 1px solid silver;
        border-radius: 30px;
        padding: 30px;
    }
</style>
