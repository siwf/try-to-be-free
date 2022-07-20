## BFC:块级作用域上下文

概述：BFC是一个独立的布局环境，bfc里面的元素与外面互不影响，相当于是个盒子



BFC的布局规则：

- `垂直方向上的距离由margin决定，在同一个bfc里面的两个相邻块的margin会坍陷`（*margin是最大值*）

- `开启了BFC的块和浮动元素不会重叠，会挨着浮动元素显示`

- `bfc是一个独立的容器，bfc里面的子元素根外面的子元素互不影响`

- `计算bfc高度的时候，浮动的子元素也参与运算`（*浮动不清除，撑不开父元素*）

  

如何开启BFC:

- `根元素（html）`
- `浮动的元素`
- `定位的元素（absolute、fixed）`
- `display: inline-block/flex/table-cell/inline/flex`
- `overflow除了visiable的值`


