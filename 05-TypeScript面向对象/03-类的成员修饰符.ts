class Pe22rson {
  readonly name: string
  age: number

  constructor(name: string,age:number){
    this.name = name
    this.age = age
  }
}

// 类和示例之间的关系
const p = new Pe22rson('sss',12)

// 只读属性不能进行写入操作
// p.name = 'koe'
p.age = 123