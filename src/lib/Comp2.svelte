<script>
    import { tarr } from "./store.js";
  let { app_function } = $props();

    let s = $state(0);
    /**
     * @param {number} n  - текущий элемент массива
     */
    function ff(n) {
        if (n % 2 == 0) {
            s += n;
        }
        return n % 2 == 0;
    }
</script>

<div class="wrapper">
    <h1>Component 2</h1>
    <div class="nums">
        {[...$tarr.filter(ff)].join("+")}
        =
        {$tarr.filter((x) => x % 2 == 0).reduce((acc, curr) => acc + curr, 0)}
        {s}
  
    </div>
    <div>
        <button onclick={() => app_function("Сообщение от Comp2")}
            >Кнопка 2</button
        >
    </div>
</div>

<style>
    button {
        width: 100px;
        height: 50px;
        background-color: blue;
        color: azure;
    }
    .nums {
        display: flex;
    }
    .wrapper {
        border: 1px solid silver;
        border-radius: 30px;
        padding: 30px;
    }
</style>
