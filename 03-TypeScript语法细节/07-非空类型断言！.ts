// 定义接口
interface BPerson {
  name:string
  age: number
  friend?: {
    name: string
  }
}

const bb: BPerson ={
  name: 'wgm',
  age: 12
}

// 访问属性： 可选连： ?.
console.log(bb.friend?.name)
// 属性赋值
// 解决方案： 类型缩小
if(bb.friend)
bb.friend.name = 'wgm'

// 非空类型断言(有点危险，只有确保有值的时候才使用，慎重使用)
bb.friend!.name = 'wgm'
