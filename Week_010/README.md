# 算法总结

## 数据结构

### 一维

- 基础

	- 数组 Array, String
	- 链表Linked List

- 高级

	- 栈 Stack
	- 双端队列 Queue
	- 集合 Set
	- 映射 Hash / Map

### 二维

- 基础

	- 树 Tree
	- 图 Graph

- 高级

	- 二叉搜索树 Binary Search Tree / Red-black Tree / AVL
	- 堆 Heap
	- 并查集 Disjoin Set
	- 字典树 Trie

### 特殊

- 位运算 Bitwise
- 布隆过滤器 BloomFilter
- LRU Cache

## 算法

### if-else, switch  => branch

### for, while loop  =>  iteration

### 递归 Recursion (Divide & Conquer, Backtrace)

### 搜索 Search

- 深度优先搜索 Depth first search
- 广度优先搜索 Breadth first search
- A*

### 动态规划 Dynamic Programming

### 二分查找 Binary Search

### 贪心 Greedy

### 数学 Math，几何 Geometry

## 复杂度

### Big O natation

- O(1): Constant Complexity 常数复杂度
- O(log n): Logarithmic Complexity 对数复杂度
- O(n): Liner Complexity  线性时间复杂度
- O(n^2): N square Complexity 平方
- O(n ^ 2): N cubic Complexity 立方
- O(2 ^ n): Exponontial Growth 指数
- O(n!): Factorial 阶乘

### 主定理

- 概念：用于解决所有递归的函数
- 二分查找（Binary Search）

	- T(n) = T(n/2) + O(1)   =>  O(log n)

- 二叉树遍历（Binary TreeTraversal）

	- T(n) = 2T(n/2) + O(1)  =>  O(n)

- 二维矩阵（Optimal Sorted Matrix Search）

	- T(n) = 2T(n/2) + O(log n)  =>  O(n)

- 归并排序（Merge Sort）

	- T(n) = 2T(n/2) + O(n)  =>  O(n log n)

### 空间复杂度

- 数组的长度
- 递归的深度

## 基础结构

### 数组 Array

- 泛型（可以放任何一种单元类型）
- 底层实现原理：内存管理器
- 流程：申请数组 --> 开辟一段连续地址 --> 通过内存管理访问地址
- 优点

	- 访问时间复杂度O(1)

- 缺点

	- 增删时间复杂度O(n)

### 链表 Linked List

- 单链表
- 双向链表
- 循环链表
- 优点

	- 增删时间复杂度O(1)

- 缺点

	- 访问时间复杂度O(n)

### 跳表 Skip List

- 只能用于元素有序的情况
- 代表

	- 平衡树（AVL Tree）
	- 二分查找

- 插入/删除/搜索时间复杂度：O(log n)
- 核心思想

	- 升维
	- 空间换时间

### 哈希表 / 散列表 Hash Table

- 概念

	- 根据关键码值（key value）直接进行访问的数据结构

- 映射函数/散列函数 Hash Function
- 哈希表

	- 存放记录的数组

- 哈希碰撞

### 二叉树 Binary Tree

- O(log n)
- 特点

	- 子节点只有两个

- 遍历

	- 前序 Pre-order

		- 根 - 左 - 右

	- 中序 In-order

		- 左 - 根 - 右（升序）

	- 后序 Post-order

		- 右 - 根 - 左

- 特殊情况

	- 退化为链表 => 查询 = > o(n)

- 二叉搜索树 Binary Search Tree

	- 别名

		- 二叉排序树
		- 有序二叉树 Ordered Binary Tree
		- 排序二叉树 Sorted Binary Tree

	- 性质

		- 左子树 < 根
		- 右子树 > 根
		- 左/右子树 => 二叉搜索树

### 堆 Heap

- 分类

	- 大顶堆/大根堆

		- 根节点最大

	- 小顶堆/小根堆

		- 根节点最小

- API

	- find-max

		- O(1)

	- delete-max

		- O(log n)

	- insert / create

		- O(log n)  /  O(1)

- 二叉堆

	- 性质

		- 完全树
		- 任意节点 >= 子节点

	- 通过完全二叉树实现（≠ 二叉搜索树）
	- 实现细节

		- 通过“数组”实现
		- 位置关系（索引i起点）

			- 左孩子：2 * i + 1
			- 右孩子：2 * i + 2
			- 父节点：floor((i - 1) / 2)

### 图 Graph

- V - vertex 点

	- 度：入度与出度
	- 点与点：连通与否

- E - edge 边

	- 有向/无向
	- 权重（边长）

- 表示方法

	- 邻连矩阵
	- 邻连表

## 算法详解

### 递归 Recursion

- 循环

	- 通过函数体来进行循环

- 注意点

	- 抵制人肉递归
	- 寻找最近最简子问题
	- 数学归纳思维

- 分治 Divide & conquer

	- 最近重复性
	- 最优重复性（动态规划）
	- 找重复性 + 分解问题 + 组合每个子问题的结果

- 回溯

	- 试错思想
	- 最坏情况

		- 时间复杂度指数级

### 深度/广度优先搜索

- DFS
- BFS

### 贪心 Greedy

- 每一步选择中都采取在当前状态下最好，最优选择
- 对比

	- 贪心：当下做局部最优判断
	- 回溯：可回退
	- 动态规划：最优判断 + 回退

### 二分查找

- 前提条件

	- 目标条件单调性
	- 存在上下界
	- 能通过索引访问

### 动态规划 Dynamic Programming

- 分治 + 最优子结构

### 字典树 Trie

- 性质

	- 节点本身不存完整单词
	- 根节点到某一节点，路径拼接为对应字符串
	- 每个节点的所有子节点路径代表字符都不同

- 核心思想

	- 空间换时间
	- 公共前缀降低查询开销

### 并查集 Disjoint Set

- 场景

	- 组团
	- 配对

- 基本操作

	- makeSet(s)
	- unionSet(x, y)
	- find(x)

### 高级搜索

- 剪枝
- 双向搜索/双向BFS Two-ended BFS
- 启发式搜索 Heuristic Search （A*）

### AVL树

- 平衡二叉搜索树
- 查询效率

	- 与高度（深度）有关，与节点数无关

- 平衡因子 Balance Factor = { -1, 0, 1 }
- 旋转操作

	- 左旋
	- 右旋
	- 左右旋
	- 右左旋

- 缺点

	- 节点需要存储额外信息
	- 调整次数频繁

### 红黑树 Red-black Tree

- 概念

	- 近乎平衡的二叉搜索树

- 特征

	- 每个节点要么红，要么黑
	- 根节点黑色
	- 每个叶节点（NIL节点、空节点）是黑色
	- 不能有相邻的两个红色节点
	- 任一节点到每个叶子节点的所有路径都包含相同数的黑色节点

### 位运算

### 布隆过滤器 Bloom Filter

- 概念

	- 二进制向量 + 随机映射函数

- 作用

	- 用于检索一个元素是否在一个集合中

- 优点

	- 空间效率和查询效率优

- 缺点

	- 误判率
	- 删除困难

### LRU Cache

- 两个要素

	- 大小
	- 替换策略

		- LFU
		- LRU
		- FIFO
		- LIFO
		- ......

- 实现方式

	- HashTable + Double LinkedList

- 复杂度

	- 查询 O(1) (基于HashTable)
	- 修改/更新 O(1) (基于Double LinkedList)

### 排序

- 比较类排序

	- 交换排序

		- 冒泡排序 O(n^2)
		- 快速排序 O(n * log n)

	- 插入排序 O(n^2)

		- 简单插入排序
		- 希尔排序

	- 选择排序 O(n^2)

		- 简单选择排序
		- 堆排序

	- 归并排序 O(n * log n)

		- 二路归并排序
		- 多路归并排序

- 非比较排序

	- 计数排序 Counting Sort
	- 桶排序 Bucket Sort
	- 基数排序 Radix Sort

### 字符串

- 暴力法 Brute force  O(mn)
- Rabin-Karp
- KMP
- Boyer-Moore
- Sunday

![avatar](/算法总结.png)
