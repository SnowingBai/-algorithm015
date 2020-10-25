#### 位运算
* 为什么需要位运算  
机器里的数字表示方式和存储格式就是二进制  

* 位运算符   
|  含义  | 运算符 | 示例 | Skip List |
|  ---- | ---- | ---- | ---- |
| 左移 | \<< | 0011 => 0110 |
| 右移 | \>> | 0110 => 0011 |
| 按位或 | | | 0011、1011 => 1011 |
| 按位与 | & | 0011、1011 => 0011 |
| 按位取反 | ~ | 0011 => 1100 |
| 按位异或 | ^ | 0011、1011 => 1000 |
 
* XOR - 异或  
    * 概念：相同为0，不同为1.也可用“不进位加法”来理解  
    * 特点：   
        x ^ 0 = x   
        x ^ 1s = ~x // 1s = ~0  
        x ^ (~x) = 1s  
        x ^ x = 0  
        c = a ^ c = b, b ^ c = a // 交换两个数  
        a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c // associative  
* 指定位置的位运算  
    将x最右位的n位清零：x & (~0 \<< n)  
    获取x的第n位（0或1）：(x \>> n) & 1  
    获取x的第n位幂值：x & (1 \<< n)  
    仅将第n位置为1：x | (1 \<< n)  
    仅将第n位置为0：x & (~(1 \<< n))  
    将x最高位至第n位（含）清零：x & ((1 \<< n) - 1)  
* 实战位运算  
    * 判断奇偶：  
        x % 2 == 1 --> (x & 1) == 1  
        x % 2 == 0 --> (x & 1) == 0  
    * x >> 1 --> x / 2  
        mid = (left + right) / 2 --> mid = (left + right) >> 1  
    * x = x & (x - 1) // 清零低位的1  
    * x & -x // 得到最低位的1  
    * x & ~x --> 0  

#### 布隆过滤器（Bloom Filter）
* 概念  
    * 与哈希表类似  
    * 一个很长的二进制向量和一系列随机映射函数  
    * 可用于检索一个元素是否在一个集合中  
    * 优点：空间效率和查询效率都远远超过一般算法  
    * 缺点：有一定的误识别率和删除困难  

*[why: 空间效率高？因为用二进制向量表示]*  
*[why: 查询时间效率高？因为是模糊查询]*  

* 案例  
    * 比特币网络  
    * 分布式系统（Map-Reduce）: Hadoop、search change  
    * Redis 缓存  
    * 垃圾邮件、评论等过滤  
* 其他案例  
    * 网页爬虫对URL的去重，避免爬虫相同的URL地址  
    * 反垃圾邮件，从数十亿个垃圾邮件列表中判断是否为垃圾邮件  
    * 缓存击穿：将已存在的缓存放到布隆中，当黑客访问不存在的缓存时迅速返回避免缓存及DB挂掉  

*[why：不适用哈希Map来查询，查询效率可达O(1)？因为需要消耗内存高，且哈希表存储效率通常小于50%（哈希冲突）]*

#### LRU Cache
* 两个要素：大小、替换策略  
* 实现方式：Hash Table + Double LinkedList  
* O(1)查询[Hash Table]、O(1)修改、更新[Double LinkedList]  
* 替换策略  
    LFU：last frequently used（最少使用频次）  
    LRU：least recently used（最近最少使用）  
    FIFO：先入先出  
    FIFO：后入先出  
    ...  
template:
``` javascript
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }
    
    get(key) {
        if (!this.cache.has(key)) return -1
        let value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, value)
    }
    
    put(key, value){
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else {
            if (this.cache.size >= this.capacity) {
                let firstkey = this.cache.keys().next()
                this.cache.delete(firstkey.value)
            }
        }
        this.cache.set(key, value)
    }
}
```
