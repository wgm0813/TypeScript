// 1、使用数组保存个人信息
// 不适合：数组中最好存放相同的数据类型，获取致之后不能明确的知道对应数据类型
const infomation: any[] = ['wgm', 1.88]
const value = infomation[2]

// 2、使用对象类型
const obj = {
  name: 'wgm',
  height: '1.88'
}

// 3、使用元组类型
// 元组数据结构中可以存放不同的数据类型，取出来的item也有明确的类型
const infomation1: [string, number] = ['wgm', 1.88]
const value2 = infomation1[1]

// 在函数使用元组类型是最多的（函数的返回值）
function useState(initialState: any): [number,(newValue: number)=>void]{
  let stateValue = initialState
  function setValue(newValue: any){
    stateValue = newValue
  }
  return [stateValue,setValue] 
}

const [count, setCount] = useState(10)
setCount(100)