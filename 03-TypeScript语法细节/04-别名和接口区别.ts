// 区别一： type类型使用范围更广，接口类型只能用来声明对象
type MyNumber2 = number | string

// 区别二： 在声明对象时，interface可以多次声明
// type不允许两个相同名称的别名同时存在
type P1= {
  x:number
  y: number
}

type P2 = {
  z?: number
}

// interface可以多次声明同一个接口名称
interface p3 {
  x:number
  y:number
}

interface p3 {
  z?: number
}

// interface支持继承
interface IPerson{
  name: string
  age: number
  eat: () => void 
}

interface IKun {
  name: string
  age: number
}

interface Ikun2 extends IPerson {
  kouhao: string
}

const ikun: Ikun2={
  name: 'wanggaomin',
  age: 12,
  kouhao: '加油',
  eat() {
    console.log('吃饭')
  },
}

const {age,kouhao} = ikun
console.log(age,kouhao ,ikun.eat())

// interface可以被类实现(TS面向对象)
// class Person implements IPerson{

// }
// 如果是非对象的时候使用type,如果是对象使用interface