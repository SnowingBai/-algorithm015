## 递归、分治、回溯
#### 递归（Recursion）
* 基础概念  
循环，通过函数体来进行的循环
* template：  
``` javascript
const recursion = (level, params) => {
    // recursion terminator
    if (level > MAX_LEVEL) {
        process_result
        return
    }
    
    // process(level, params)
    
    // drill down
    recursion(level, params)
    
    // clean current level status if needed
}
```

* 注意点：  
抵制人肉递归  
寻找最近最简子问题  
数学归纳思维  

#### 分治（Divide & Conquer）
* 本质  
寻找重复性 --> 分解问题 --> 组合每个子问题的结果
* template：  
```javascript
const devide_conquer = (problem, params) => {
    // recursion terminator
    if (problem == null) {
        precess_result
        return
    }
    
    // process current problem
    subproblems = split_problem(problem, data)
    subresult1 = devide_conquer(subproblem[0], p1)
    subresult2 = devide_conquer(subproblem[1], p1)
    subresult3 = devide_conquer(subproblem[2], p1)
    ...
    
    // merge
    result = process_result(subresult1, subresult2, subresult3, ...)
    
    // revert the current level status
}
```

#### 回溯
* 基本概念  
采用试错思想，尝试分布去解决一个问题，不能得到有效解答结果时，将取消上一步或上几步的计算，再尝试其他可能分步方法  
*[最坏情况：时间复杂度指数级]*
