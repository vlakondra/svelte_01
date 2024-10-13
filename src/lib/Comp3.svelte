<script>
    export let app_function;
    let coll = [
        { num: 1, arr: ["a", "b"] },
        { num: 2, arr: ["c", "d"] },
        { num: 3, arr: ["e", "f"] },
    ];
    let selected_1;
    let selected_2;
    // console.log(coll[selected_1].arr)
</script>

<div class="wrapper">
    <div>
        <select bind:value={selected_1}>
            <option  selected disabled>Выберите</option>
            {#each coll as item, i}
                <option value={i}>
                    {item.num}
                </option>
            {/each}
        </select>

        <p>{selected_1}</p>
    </div>

    <div>
        <select bind:value={selected_2}>
            <option  selected disabled>Выберите</option>
            {#if selected_1 >= 0}
                {#each coll[selected_1].arr as item, i}
                    <option value={i}>
                        {item}
                    </option>
                {/each}
            {/if}
        </select>

        <p>{selected_2}</p>
    </div>
</div>

<style>

    .wrapper {
        display: flex;
        border: 1px solid silver;
        border-radius: 30px;
        padding: 20px;
    }
    .wrapper >div{
        margin-left: 20px;
    }
</style>

