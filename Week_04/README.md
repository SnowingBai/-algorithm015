## DFS、BFS、贪心算法、二分查找
#### DFS、BFS
* 遍历  
*[设定题目：在树（图/状态集）中寻找特定节点]*  
解题（搜索--遍历）：
    * 每个节点都要访问一次
    * 每个节点仅仅要访问一次
    * 对于节点的访问顺序不同，分为：
        —— 深度优先 depth first search  
        —— 广度优先 breadth first search  

        
* template：  
``` javascript
// DFS（递归写法）
const visited = new Set()
const dfs = node => {
    if (visited.has(node)) return
    
    visited.add(node)
    dfs(node.left)
    dfs(node.right)
}
```

``` python
# DFS（非递归写法）
def DFS(self, tree):
    if tree.root is None
        return []
    
    visited, stack = [], [tree.root]
    
    while stack:
        node = stack.pop()
        visited.add(node)
        
        process(node)
        
        nodes = generate_related_node(node)
        stack.push(nodes)
    
    # other process work
    ...
```

``` javascript
// BFS
const bfs = (root) => {
    let result = [], queue = [root]
    while (queue.length > 0) {
        let level = [], n = queue.length
        for (let i = 0; i < n; i++) {
            let node = queue.pop()
            level.push(node.val)
            
            if (node.left) {
                queue.unshift(node.left)
            }
            
            if (node.right) {
                queue.unshift(node.right)
            }
        }
        
        result.push(level)
    }
    return result
}
```

#### 贪心算法（Greedy）
* 概念  
在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果全局最好或最优的算法  

* 与其他类似算法区别  
    * 贪心：当下做局部最优判断，不能回退
    * 回溯：能够回退
    * 动态规划：最优判断 + 回退
* 总结  
    * 贪心算法是一种在每一步选择最优，可以解决一些优化问题，eg: 图中最小生成树，求哈夫曼编码等
    * 对工程和生活中的问题，贪心算法一般不能得到所求答案
    * 一旦一个问题可以通过贪心算法来解决，则贪心算法一般是解决这个问题的最优方法。
    * 常用语辅助算法或对结果要求不特别精确的场景中


#### 二分查找
* 前提条件  
    * 目标函数单调性（单调递增或单调递减）
    * 存在上下边界（bounded）
    * 能够通过索引访问（index accessible）

* template：  
```python
left, right = 0, len(array) - 1
while left <= right:
    mid = (left + right) / 2
    if array[mid] == target:
        # find the target !!
        break or return result
    elif array[mid] < target
        left = mid + 1
    else
        right = mid - 1
```
