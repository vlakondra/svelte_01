<script>
  export let app_function;
</script>

<div class="wrapper">
  <div class="card">
    <div class ='header'>
        HEADER
    </div>

    <div class ='content'>
        <p>123</p>
    </div>

    <div class ='footer'>FOOTER</div>
  </div>
</div>

<style>
  .wrapper {
    border: 1px solid silver;
    border-radius: 30px;
    padding: 3px;
    height:400px;

  }
.content{
    border:1px solid rgb(95, 23, 190);
    /* height: -webkit-fill-available; */
    height:100%;
}
  .card {
    display: flex;
    flex-flow: column;
    background:#dde;
    height: 300px;
    justify-content: space-between;
    background:#dde;
    height: 300px;
  }
  .footer{
    background: #8f7c8c;;
  }
  .header{
    background: #8f7c8c;;
  }
</style>
