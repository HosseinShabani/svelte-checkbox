<script>
  import Checkbox from "svelte-checkbox";

  let checked = false;
  let size = 3;

  function handleChange({ detail }) {
    console.log("change", detail);
  }
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transition: 0.8s;
  }
  main.darkBg {
    background: rgb(228, 241, 254);
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sizeChanger {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 0.9rem;
  }
  :global(.main__checkbox) {
    margin: 0.3rem;
  }
</style>

<main class:darkBg={checked}>
  <div class="row">
    <Checkbox
      class="main__checkbox"
      size="{size}rem"
      bind:checked
      name="inputName"
      secondaryColor="rgba(1, 50, 67,0.2)"
      primaryColor="rgb(77, 5, 232)" />
    <Checkbox
      class="main__checkbox"
      size="{size}rem"
      checked={true}
      on:change={handleChange} />
  </div>
  <div class="sizeChanger">
    <p>Change Size</p>
    <input type="range" min="1" max="10" bind:value={size} />
  </div>
</main>
