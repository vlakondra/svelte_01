<script>
  import Comp1 from "./lib/Comp1.svelte";
  import Comp2 from "./lib/Comp2.svelte";
  import Comp3 from "./lib/Comp3.svelte";
  import TopMenu from "./lib/TopMenu.svelte";
  import Fa from "svelte-fa";
  import { faCube } from "@fortawesome/free-solid-svg-icons";

  import DetectMessage from "./lib/Detector.svelte";

  //Массив объектов, содержащий ссылки на 3 компонента
  const options = [
    { component: Comp1 },
    { component: Comp2 },
    { component: Comp3 },
  ];

  let selected = $state(options[0]); //компонент по умолчанию
  let active_item = $state(0);

  /**
   * @param {number} idcomp
   */
  function SelectComp(idcomp) {
    //Функция вызывается из верхнего меню и определяет
    //выбранный пользователем компонент
    selected = options[idcomp];
    active_item = idcomp;
  }

  let current_message;

  /**
   * @param {string} mess - текст сообщения
   */
  function SendMessage(mess) {
    //функция вызывается из компонентов Comp1, Comp2 и Comp3
    //Каждый из них формирует свое сообщение, к-е передается
    //через аргумент mess  и определяет переменную current_message.
    //Current_message передается в компонент Detector через prop messagefrom
    current_message = mess;
    clicked = true;
    setTimeout(() => {
      clicked = false;
    }, 200);
  }

  let clicked = false;
let tmp = 100;
let arr=$state([1,2,3])
  let cls = $state(0);
  let obj =$state({a:2,b:3}) 
  let c = obj
  function onclick() {
    tmp+=10
    obj.a+=1
    cls ++;
    arr.push(arr.length+1)
    
  }
</script>

<main>
  <div class="holy-grail">
    <header>
      <nav>
        <TopMenu {SelectComp} act_idx={active_item} />
      </nav>
    </header>

    <div class="container">
      <div class="left-sidebar">
        <h2>Левый сайдбар</h2>
        <div>
          {cls}
          <p>{obj.a}</p>
          <p>{obj.b}</p>
          <p>{arr}</p>
          <p>
          <button {onclick}>click</button>
        </p>
          {JSON.stringify(obj)}  {JSON.stringify(c)}
        </div>
        <p>Здесь может быть реклама, новости или дополнительные пункты меню</p>
        <div>
          <Fa icon={faCube} size="1x" pulse color="blue" />
        </div>
        <div>{#each arr as item, i (i*item)}
          <p>{item}-{item}</p>
        {/each}</div>
      </div>

      <div class="main-content">
        <h1>Основной контент</h1>

        <!-- Динамические компоненты -->
        <selected.component
          app_function={SendMessage}
        />
      </div>
      <div class="right-sidebar">
        <h2>Правый сайдбар</h2>
        <!-- <DetectMessage messagefrom={current_message} /> -->
        Здесь может быть любая дополнительная информация
      </div>
    </div>
    <footer>
      <p>Подвал</p>
    </footer>
  </div>
</main>

<style>
  /* Global styles */
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .holy-grail {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    background-color: #333;
    color: #fff;
    padding: 1em;
    text-align: center;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    flex: 1;
  }

  .left-sidebar {
    flex: 2;
    /* max-width: 250px; */
    margin-right: 20px;
    background-color: #f7f7f7;
    padding: 20px;
  }

  .main-content {
    flex: 3;
    padding: 20px;
  }

  .right-sidebar {
    flex: 1;
    max-width: 250px;
    margin-left: 20px;
    background-color: #f7f7f7;
    padding: 20px;
  }

  footer {
    background-color: #333;
    color: #fff;
    padding: 1em;
    text-align: center;
    height: 50px;
    margin-top: auto;
  }

  /* Медиа-запросы - обеспечение респонсивности */
  @media (max-width: 1200px) {
    .left-sidebar,
    .right-sidebar {
      flex: 0 0 200px;
    }
  }

  @media (max-width: 992px) {
    .left-sidebar,
    .right-sidebar {
      flex: 0 0 150px;
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .left-sidebar,
    .right-sidebar {
      max-width: 100%;
      margin: 20px 0;
    }
    .main-content {
      flex: 1;
    }
  }

  /* Перенесен в TopMenu */
  /* @media (max-width: 480px) {
  header nav ul {
    flex-direction: column;
  }
  header nav li {
    margin-right: 0;
  }
} */
</style>
