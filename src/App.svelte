<script>
import Comp1 from './lib/Comp1.svelte'
import Comp2 from './lib/Comp2.svelte'
import Comp3 from './lib/Comp3.svelte'

const options = [
		{  component: Comp1 },
		{  component: Comp2 },
    {  component: Comp3 },
	];

  function SelectComp(idcomp){
     selected=options[idcomp]
  }

  let selected = options[0];

</script>

<main>
<!-- The Holy Grail page structure -->
<div class="holy-grail">
  <header>
    <!-- Header content -->
    <nav>
      <ul>
        <li><a on:click={(c)=>SelectComp(0)} href="#">Menu item 1</a></li>
        <li><a on:click={(c)=>SelectComp(1)} href="#">Menu item 2</a></li>
        <li><a on:click={(c)=>SelectComp(2)} href="#">Menu item 3</a></li>
      </ul>
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
      <svelte:component this={selected.component} />
    </div>
    <div class="right-sidebar">
      <!-- Right sidebar content -->
      <h2>Right Sidebar</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

header nav ul {
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
}

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

@media (max-width: 480px) {
  header nav ul {
    flex-direction: column;
  }
  header nav li {
    margin-right: 0;
  }
}
</style>
