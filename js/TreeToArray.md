利用广度优先遍历 

```js
      const tree = {
        id: 1,
        name: "部门A",
        children: [
          {
            id: 2,
            name: "部门B",
            children: [
              { id: 4, name: "部门D", children: [] },
              { id: 5, name: "部门E", children: [] },
            ],
          },
          {
            id: 3,
            name: "部门C",
            children: [{ id: 6, name: "部门F", children: [] }],
          },
        ],
      };
      function guangDuFirst(tree) {
        let arr = [];
        let newArr = [];

        arr.unshift(tree)

        while(arr.length) {
          const treeItem = arr.pop();
          const { id, name, parentId } = treeItem;
          newArr.push({id, name, parentId : parentId ? parentId : 0 })
          if (treeItem.children && treeItem.children.length ) {
            treeItem.children.forEach(element => {
              element.parentId = id;
              arr.unshift(element)
            });
          }
        }



        return newArr;
      }
      console.log(guangDuFirst(tree))
```

