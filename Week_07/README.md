## 字典树和并查集
#### 字典树（Trie）
* 概念  
又称单词查找树或键树，是一种树形结构。
典型应用是用于统计和排序大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计   
* 优点   
最大限度地减少无谓的字符串比较，查询效率比哈希表高   
* 基本性质   
    * 结点本身不存完整单词   
    * 从根节点到某一节点，路径上经过的字符串连接起来，为该节点对应的字符串   
    * 每个节点的所有子节点路径代表的字符都不相同   
* 核心思想   
    * Trie树的核心思想是空间换时间   
    * 利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的   
* template：  
``` javascript
// DFS（递归写法）
class Trie {
    constructor() {
        this.root = {}
        this.endOfWord = '$'
    }
    
    insert(word) {
        let node = this.root
        for (let ch of word) {
            node[ch] = node[ch] || {}
            node = node[ch]
        }
        node[this.endOfWord] = this.endOfWord
    }
    
    search(word) {
        let node = this.root
        for (let ch of word) {
            if (!node[ch]) return false
            node = node[ch]
        }
        return node[this.endOfWord] === this.endOfWord
    }
    
    startWith(word) {
        let node = this.root
        for (let ch of word) {
            if (!node[ch]) return false
            node = node[ch]
        }
        return true
    }
}

let trie = new Trie()
```

#### 并查集（Disjoint Set）
* 使用场景  
组团配对问题  

* 基本操作  
    * makeSet(s)：建立一个新的并查集，其中包含s个单元集合   
    * unionSet(x, y)：把元素x和元素y所在的集合合并，要求x和y所在的集合不相交，如果相交则不合并   
    * find(x)：找到元素x所在的集合的代表，该操作也可用于判断两个元素是否位于同一个集合，只要将它们各自的代表比较一下就可以了   
* template  
``` javascript
class unionFind {
    constructor(n) {
        this.count = n
        this.parent = new Array(n)
        for (let i = 0; i < n; i++) {
            this.parent[i] = i
        }
    }
    
    find(p) {
        let root = p
        while (parent[root] !== root) {
            root = parent[root]
        }
        
        while (parent[p] !== p) {
            let x = p
            p = this.parent[p]
            this.parent[x] = root
        }
        return root
    }
    
    union(p, q) {
        let rootP = find(p)
        let rootQ = find(q)
        if (rootP === rootQ) return
        this.parent[rootP] === rootQ
        this.count--
    }
}
```


#### 高级搜索
* 主要内容  
剪枝、双向BFS、启发式搜索（A\*）   
* 初级搜索   
    * 朴素搜索   
    * 优化搜索   
        不重复（Fibonacci）、剪枝（生成括号问题）   
    * 搜索方向   
        双向搜索、启发式搜索   
 * 剪枝   
 题目：N皇后、数独   
 * 双向搜索（双向BFS、Two-ended BFS）   
 题目：词语接龙、最小基因变化   
 * 启发式搜索（Heuristic Search (A\*)）   
    * 估价函数（启发式函数h(n)）      
    用来评价哪些节点最有希望是我们要找的节点，h(n)会返回一个非负实数，也可认为是从节点n到目标节点路径的估计成本   
    启发式函数是一种告知搜索方向的方法，它提供了一种明智的方法来猜测哪个邻居节点会导向一个目标   

#### AVL树
*[查询二叉搜索树查询效率只与深度有关，与节点个数无关]*   
* 特性   
    * 平衡二叉搜索树   
    * Balance Factor平衡因子：是其左子树的高度减去其右子树的高度（有时相反），即每个节点存balance factor = {-1, 0, 1}   
    * 4种旋转操作：   
    左旋、右旋、左右旋、右左旋   

#### 红黑树(Red-black Tree)   
一种近乎平衡的二叉树，它能够确保任何一个节点的左右子树的高度差小于两倍，即满足如下条件的二叉搜索树：   
    * 每个节点可能的颜色：红、黑   
    * 根节点黑色   
    * 每个叶节点（NIL节点、空节点）是黑色   
    * 不能有相邻的两个红色节点   
    * 从任一节点到其每个叶子节点的所有路径都包含相同数目的黑色节点
