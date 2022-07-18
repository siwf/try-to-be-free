```js
import { createApp, defineComponent, h, createVNode } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
// import App from "./App.vue";
const App = defineComponent({
  render() {
    return h("div", { id: "root" }, [
      "siwenfeng",
      h("span", { class: "h-span" }),
      createVNode(HelloWorld, { msg: "helloworld" }),
    ]);
  },
});

createApp(App).mount("#app");
```

