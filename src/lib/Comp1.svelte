<script>
    export let app_function;
    let arr = [1, 2, 3, 4, 5];

    function addItem() {
        arr = [...arr, arr.push(Math.max(...arr) + 1)];
        console.log(arr);
    }
    const removeItem = () => {
        arr.splice(0, 1)
        arr=[...arr]
        console.log(arr);
    };
</script>

<div class="wrapper">
    <h1>Массивы и циклы</h1>
  
    <div>
        {#each arr as item,i (Math.floor(Math.random() * 1000))}
            <div>{item}-{i}-{Math.floor(Math.random() * 1000)}</div>
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
