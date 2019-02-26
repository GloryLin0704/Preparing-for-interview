哈希的三种模式

1、hash：跟整个项目的构建相关，构建生产的文件 hash 值都是一样的，只要项目里有文件更改，整个项目构建的 hash 值都回更改。

2、chunkhash：根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk ，生成对应的 hash 值。

3、contenthash：由文件内容产生的 hash 值，内容不同产生的 contenthash 值也不一样。
