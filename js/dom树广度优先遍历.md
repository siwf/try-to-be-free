```js
  <body>
    <div class="root">
      root
      <div>
        1
        <p>5</p>
        <p>6</p>
      </div>
      <div>2</div>
      <div>3</div>
      <div>
        4
        <p>7</p>
        <p>8</p>
      </div>
    </div>
    <script>
      function printNode(node) {
        if (node instanceof Comment) {
          console.log(node.textContent);
        }
        if (node instanceof Text) {
          console.log(node.textContent?.trim());
        }
        if (node instanceof HTMLElement) {
          console.log(node.tagName.toLowerCase());
        }
      }
      // 利用队列先进先出
      function guangDu(node) {
        const queen = [];
        queen.unshift(node);
        while (queen.length > 0) {
          const cur = queen.pop();
          printNode(cur);
          // 子节点入队
          const childNodes = cur.childNodes;
          // 有子节点就入队
          if (childNodes.length) {
            for (let index = 0; index < childNodes.length; index++) {
              const element = childNodes[index];
              queen.unshift(element)
            }
          }
        }
      }
      guangDu(document.querySelector(".root"));
    </script>
  </body>
```

