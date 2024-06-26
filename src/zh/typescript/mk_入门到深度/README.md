---

---
test

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html)

#### 交互演示

::: playground#ts TS 案例

@file index.ts

```ts
const msg = "hello world";

const speak = (msg: string) => console.log(msg);

speak(msg);
```

@setting

```json
{
  "target": "es5"
}
```

:::





## 例子

::: normal-demo Demo 演示

```html
<h1>VuePress Theme Hope</h1>
<p><span id="very">非常</span>强大!</p>
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("非常强大");
});
```

```css
span {
  color: red;
}
```

:::

<!-- --------- -->
::: vue-playground 自定义导入与映射的 Vue 交互演示

@file App.vue

```vue
<script setup>
import { ref } from "vue";
import Comp from "./Comp.vue";

const msg = ref("Hello Playground!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>
```

@file Comp.vue

```vue
<script setup>
import { useBattery } from "@vueuse/core";
import { ref } from "vue";

const { charging, level } = useBattery();
</script>

<template>
  <h1>Battery status</h1>
  <p>Charging: {{ charging }}</p>
  <p>Level: {{ level * 100 }}%</p>
</template>
```

@import

```json
{
  "imports": {
    "@vueuse/core": "https://unpkg.com/@vueuse/core/index.mjs",
    "@vueuse/shared": "https://unpkg.com/@vueuse/shared/index.mjs",
    "vue-demi": "https://unpkg.com/vue-demi/lib/index.mjs"
  }
}
```

@setting

```json
{
  "showCompileOutput": true
}
```

:::
<!-- --------- -->

## 演示
<!-- 注释 -->

`<!-- @include: ./demo.snippet.md -->`:

- <!-- @include: ./demo.snippet.md -->

`<!-- @include: ./demo.snippet.md{9-13} -->`:

<!-- @include: ./demo.snippet.md{9-13} -->

`<!-- @include: ./demo.snippet.md#snippet -->`:

<!-- @include: ./demo.snippet.md#snippet -->



@[code md](./demo.snippet.md)
@[code ts](./1.ts)
@[code md](@src/zh/typescript/mk_入门到深度/demo.snippet.md)



```ts
import MarkdownIt from "markdown-it";
import { include } from "@mdit/plugin-include";

// #region snippet
const mdIt = MarkdownIt().use(include, {
  // your options, currentPath is required
  currentPath: (env) => env.filePath,
});
// #endregion snippet

mdIt.render("<!-- @include: ./path/to/include/file.md -->", {
  filePath: "path/to/current/file.md",
});
```