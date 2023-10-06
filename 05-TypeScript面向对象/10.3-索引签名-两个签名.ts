interface IndexType {
  // 两个索引类型的写法
  // [index: number]: string
  // [key: string]:any

  // 下面的写法是不允许： 数字类型索引的类型，必须是字符串类型索引的类型的子类型
  // 结论：数字类型必须是比字符串类型的子类型
  // 数字0：number|string, 当我们是一个数字的时候，既要满足通过number去拿到的内容，不会和string拿到的结果矛盾
  [index: number]: string|number
  [key: string]: number| string
}

// const item1: IndexType=['as','sb','sd']
// const forEach = item1[0]
