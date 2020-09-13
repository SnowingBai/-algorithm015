## 递归、分治、回溯
#### 递归（Recursion）
* 基础概念  
循环，通过函数体来进行的循环
```
public void recur(init level, init param) {
    // terminator
    if (level > MAX_LEVEL) {
        // precess result
        return
    }
    
    // process current logic
    process(level, param)
    
    // drill down
    recur(level: level + 1, newParam)
    
    // restore current status
}
```

* 注意点：
抵制人肉递归  
寻找最近最简子问题  
数学归纳思维  

#### 分治（Divide & Conquer）
* 本质
寻找重复性 --> 分解问题 --> 组合每个子问题的结果

#### 回溯
* 基本概念  
采用试错思想，尝试分布去解决一个问题，不能得到有效解答结果时，将取消上一步或上几步的计算，再尝试其他可能分步方法
*[最坏情况：时间复杂度指数级]*
