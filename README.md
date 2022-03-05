# svelte-checkbox

A checkbox component for Svelte (Cool animation, Customizable).

### [☑️ Demo](https://svelte-checkbox.surge.sh/)

<a href="https://svelte-checkbox.surge.sh/">
<img src="http://tehranreact.ir/public/svelte-checkbox.gif" alt="demo" />
</a>

## Installation

```bash
yarn add svelte-checkbox
```

## Usage

```html
<script>
  import Checkbox from "svelte-checkbox";

  let checked = false;
</script>

<Checkbox bind:checked></Checkbox>
```

<br />

## Props

| Prop           | Type    | Default | Description              |
| -------------- | ------- | ------- | ------------------------ |
| size           | String  | 3rem    | Component width & height |
| name           | String  | -       | Input name               |
| id             | String  | -       | Component id             |
| labelId        | String  | -       | Input id                 |
| class          | String  | -       | Component class          |
| primaryColor   | String  | #242432 | Primary color            |
| secondaryColor | String  | #d8d8ea | Secondary color          |
| checked        | Boolean | false   | Checked input            |

<br />

## Events

| Event Name | Callback                | Description                  |
| ---------- | ----------------------- | ---------------------------- |
| change     | (event) => event.detail | fires when checked/unchecked |

<br />

```html
<script>
  import Checkbox from "svelte-checkbox";

  function handleChange({ detail }) {
    console.log("checked", detail);
  }
</script>

<Checkbox on:change="{handleChange}" />
```

<br />

## Full Usage

```html
<script>
  import Checkbox from "svelte-checkbox";

  let checked = false;
</script>

<style>
  :global(.main__checkbox) {
    margin: 0.5rem;
  }
</style>

<Checkbox
  class="main__checkbox"
  size="5rem"
  bind:checked
  name="inputName"
  secondaryColor="rgba(1, 50, 67,0.2)"
  primaryColor="rgb(77, 5, 232)"
/>
```

<br />

### [Join Our Telegram Community](https://t.me/svelteGroup)
