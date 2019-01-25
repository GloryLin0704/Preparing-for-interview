#### 补间动画

`transition`，过渡效果，当元素状态变化时触发

```css
transition: property, time;
transition: width 1s; // 当宽度有变化时，有 1s 的过渡效果
transition: all 1s;	  // 不管什么变化，都有 1s 的过渡效果
transition-timing-function: linear / ease // 过渡效果的速度变化

```



#### 关键帧动画

`animation`，相当于多个补间动画，与元素状态的变化无关

```css
animation: animation，time，timing-function;
animation: run, 1s, linear; // 动画名为 run ，1s 走完，线性过渡
animation-fill-mode: forwards; // 动画结束后保持最后的状态不重置
animation-play-state: paused; // 动画暂停，保留当前进度，开始时可继续

// 定义关键帧动画
@keyframe run {
    0%{
        width: 100px;
    }
    100%{
        width: 800px;
    }
}

```



 #### CSS 动画的实现方式有几种

- transition，补间动画
- animation，关键帧动画



#### 两者的区别

- 过渡动画需要有状态变化
- 关键帧动画则不需要
- 关键帧动画能精确控制动画过程









































































