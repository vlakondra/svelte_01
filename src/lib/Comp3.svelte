<script>
    import departData from "./store.js";
    import Progbar from "./progbar.svelte";

    let { app_function } = $props();

    let selected_1 = $state();
    let selected_2 = $state();

    const onDepSelected = (e) => {
        selected_2 = "bla"; //Установим преп-ля в placeholder
    };

    const data = departData();
    console.log($data);
</script>

<div class="wrapper">
    <Progbar />

    {#if $data}
        <div>
            <select bind:value={selected_1} onchange={(v) => onDepSelected(v)}>
                <option selected disabled>Выберите кафедру</option>
                {#each $data.Departs as item, i}
                    <option value={item.Depart_ID}>
                        {item.DepartName}
                    </option>
                {/each}
            </select>
        </div>

        <div>
            <select bind:value={selected_2}>
                <option value="bla" selected disabled
                    >Выберите преподавателя</option
                >
                {#each $data.Teachers.filter((t) => t.Depart_ID == selected_1) as item, i}
                    <option value={item.Emp_ID}>
                        {item.FIO}
                    </option>
                {/each}
            </select>
        </div>
    {/if}
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        border: 1px solid silver;
        border-radius: 30px;
        padding: 20px;
    }
    .wrapper > div {
        margin-left: 20px;
    }
</style>
