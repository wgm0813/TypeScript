interface KN {
  name: string
  age: number
}

// 可以从其他的接口中继承过来属性
// 1、减少了相同代码的重复编写
// 2、如果使用第三方库，给我们定义了一些属性
// 自定义一个接口，同时你希望自定义接口拥有第三方的某一个类型的所有属性可以使用继承来完成
interface Kns extends KN {
  slogan: string
}

const kns: Kns = {
  name: 'wgm',
  age: 12,
  slogan: '加油'
} 