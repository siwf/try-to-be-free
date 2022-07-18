```js
  setup(props, content) {
    let readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    setInterval(() => {
      readersNumber.value++;
    }, 1000);
    // 在这里定义一个变量放到h函数的变量里面会有问题
    // const number = readersNumber.value;
    // 请注意这里我们需要显式使用 ref 的 value
    const render = () => {
      // 这种写法不响应
     // return h("div", [number, book.title])
      return h("div", [readersNumber.value, book.title]);
    };
    return render;
  },
```

