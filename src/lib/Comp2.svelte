<script>
    export let app_function
</script>

<div class='wrapper'>
<h1>
    Component 2
</h1>

<div>
    <button on:click={()=>app_function('Сообщение от Comp2')}>Кнопка 2</button>
</div>
</div>

<style>
    button{
        width: 100px;
        height:50px;
        background-color: blue;
        color:azure
    }
    .wrapper{
        border:1px solid silver;
        border-radius: 30px;
        padding:30px;
    }
</style>