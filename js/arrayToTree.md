```js
  const arr = [
        {
          id: 1,
          name: "部门A",
          parentId: 0,
        },
        {
          id: 2,
          name: "部门B",
          parentId: 1,
        },
        {
          id: 3,
          name: "部门C",
          parentId: 1,
        },
        {
          id: 4,
          name: "部门D",
          parentId: 2,
        },
        {
          id: 5,
          name: "部门E",
          parentId: 2,
        },
        {
          id: 6,
          name: "部门F",
          parentId: 3,
        },
      ];
      function convert(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          const cur = arr[i];
          findParent(newArr, cur);
        }
        return newArr;
      }

      function findParent(array, cur) {
        //  console.log(array)
        if (cur.parentId === 0) {
          array.push({
            id: cur.id,
            name: cur.name,
            children: [],
          });
          return array;
        }
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          if (element.id === cur.parentId) {
            delete cur.parentId;
            cur.children = []
            element.children  = element.children.concat(cur);
            return
          }
          if (element.children && element.children.length) {
            findParent(element.children, cur);
          }
        }
      }
      console.log(convert(arr))
```

```js
function arrToTree(array) {
        const map = new Map();
        let root = null;

        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          const { id, name, parentId } = element;
          const treeNode = { id, name, children: []}
          map.set(id, treeNode);

          let parentNode = map.get(parentId);
          if (parentNode) {
            parentNode.children.push(treeNode)
          } else {
            root = treeNode;
          }
        }
        console.log(map)
        return root;
      }
      console.log(arrToTree(arr))
```

