<script>
    export let app_function;
    // export let parr
    // let arr = parr//[1, 2, 3, 4, 5];
    import { tarr } from "./store.js";

    function addItem() {
        // $tarr = [...$tarr, $tarr.push(Math.max(...$tarr) + 1)];
        $tarr = [...$tarr, Math.max(...$tarr) + 1];
        //console.log($tarr);
    }
    const removeItem = () => {
        $tarr.splice(0, 1);
        $tarr = [...$tarr];
        console.log($tarr);
    };
</script>

<div class="wrapper">
    <h1>Массивы и циклы</h1>

    <div>
        {#each $tarr as item, i (Math.floor(Math.random() * 100000))}
            <div>{item}-{i}-{Math.floor(Math.random() * 100000)}</div>
        {:else}
            Массив пуст
        {/each}
    </div>

    <div>
        <button on:click={addItem}>Добавить</button>
    </div>
    <div>
        <button on:click={removeItem}>Удалить</button>
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
