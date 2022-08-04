## 1.内置模块

```scss
@use 'sass:color';
@use 'sass:string';
```

 Sass 为我们提供了很多内置模块，这其中就包含很多有用的函数，我们使用这些模块也能很好的实现我们的扩展需求。我们可以通过 @use 来加载内置模块，所有的内置模块都以 sass 开头以表示它们属于 Sass 的一部分

```scss
$namespace: 'el' !default;
$common-separator: '-' !default;
$element-separator: '__' !default;
$modifier-separator: '--' !default;
$state-prefix: 'is-' !default;v
```

# 2.scss-!default默认变量

在变量赋值之前， 利用!default为变量指定默认值。

　　也就是说，如果在此之前变量已经赋值，那就不使用默认值，如果没有赋值，则使用默认值。

　　代码实例如下:

```scss
$content: "antzone" !default;
#main {
  content: $content;
}123
```

　　编译为css代码如下:

```scss
#main {
  content: "antzone"; 
}12
```

　　由于在声明默认值之前，并没有变量的赋值，所以就使用默认值。

　　再来看一段代码实例:

```scss
$content:"softwhy.com";
$content: "antzone" !default;
#main {
  content: $content;
}1234
```

　　编译成css代码如下:

```
#main {
  content: "softwhy.com"; 
}12
```

　　由于在默认变量值声明之前，就已经有变量赋值了，所以就不再使用默认值。

　　!default一个重要的作用就是，如果我们引入的他人scss文件中的变量有默认值的设置，那么我们就可以很灵活的来修改这些默认值，只要在这些导入文件之前引入就一个配置scss文件即可,而无需修改他人的scss文件，例如:

```scss
@import "config";
@import "variables";
@import "mixins";12
```

　　只要将重新配置的变量值写入config.scss文件，即可实现修改variables.scss和mixins.scss中默认变量值。

### 3.@use

```scss
// src/_corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}
// style.scss
@use "src/corners" as c;

.button {
  @include c.rounded;
  padding: 5px + c.$radius;
}
```

```scss
// src/_corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}
// style.scss
@use "src/corners" as *;

.button {
  @include rounded;
  padding: 5px + $radius;
}
```

## 4.!global 将局部变量转为全局变量

```scss
@mixin b($block) {
  $B: $namespace + '-' + $block !global;

  .#{$B} {
    @content;
  }
}
```

### 5.插值语句 `#{}`

```scss
.#{$B} {
    @content;
  }
```

