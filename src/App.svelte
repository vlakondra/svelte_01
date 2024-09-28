<script>
import Comp1 from './lib/Comp1.svelte'
import Comp2 from './lib/Comp2.svelte'
import Comp3 from './lib/Comp3.svelte'
import TopMenu  from './lib/TopMenu.svelte';


import DetectMessage from './lib/Detector.svelte'

//Массив объектов, содержащий ссылки на 3 компонента
const options = [
		{  component: Comp1 },
		{  component: Comp2 },
    {  component: Comp3 },
	];

  let selected = options[0]; //компонент по умолчанию
  let active_item = 0
  
  /**
     * @param {number} idcomp
     */
  function SelectComp(idcomp){
    //Функция вызывается из верхнего меню и определяет
    //выбранный пользователем компонент
     selected = options[idcomp]
     active_item = idcomp
     
  }

  let current_message; 

  function SendMessage(mess){
    //функция вызывается из компонентов Comp1, Comp2 и Comp3
    //Каждый из них формирует свое сообщение, к-е передается
    //через аргумент mess  и определяет переменную current_message.
    //Current_message передается в компонент Detector через prop messagefrom
     current_message = mess
     clicked = true
     setTimeout(() => {
      clicked = false
     }, 200);
  }

let clicked = false;
</script>

<main>
<!-- The Holy Grail page structure -->
<div class="holy-grail">
  
  <header>
    <nav>
      <TopMenu {SelectComp} act_idx={active_item}/>
     </nav>
  </header>

  <div class="container">
    <div class="left-sidebar">
      <!-- Left sidebar content -->
      <h2>Left Sidebar</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="main-content">
      <!-- Main content area -->
      <h1>Main Content</h1>

      <!-- Динамические компоненты -->
      <svelte:component 
         this={selected.component} 
         app_function={SendMessage} 
        />

         <div>
     
      </div>

    </div>
    <div class="right-sidebar">
      <!-- Right sidebar content -->
      <h2>Right Sidebar</h2>
      <DetectMessage messagefrom={current_message}/>
    </div>
  </div>
  <footer>
    <!-- Footer content -->
    <p>&copy; 2023 Holy Grail Page</p>
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

/* header nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

header nav li {
  margin-right: 20px;
}

header nav a {
  color: #fff;
  text-decoration: none;
} */

.container {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  flex: 1;
}

.left-sidebar {
  flex: 1;
  max-width: 250px;
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

/* Responsive styles */
@media (max-width: 1200px) {
  .left-sidebar, .right-sidebar {
    flex: 0 0 200px;
  }
}

@media (max-width: 992px) {
  .left-sidebar, .right-sidebar {
    flex: 0 0 150px;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .left-sidebar, .right-sidebar {
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
