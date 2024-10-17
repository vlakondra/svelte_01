<script>
    import departData from "./store.js";
    import Progbar from "./progbar.svelte";

    export let app_function;

    let selected_1;
    let selected_2;

    const onDepSelected = (e) => {
        selected_2 = "null"; //Установим преп-ля в placeholder
    };

    const data = departData();
    console.log($data);
</script>

<div class="wrapper">
    <Progbar />

    <div>
        <select bind:value={selected_1} on:change={(v) => onDepSelected(v)}>
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
            <option value="null" selected disabled
                >Выберите преподавателя</option
            >
            {#each $data.Teachers.filter((t) => t.Depart_ID == selected_1) as item, i}
                <option value={item.Emp_ID}>
                    {item.FIO}
                </option>
            {/each}
        </select>
    </div>
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
