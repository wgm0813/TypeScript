function xxx(name: string, age: number){
// 函数参数类型是固定的
}

// 将传入的内容返回
function bars(arg: number|string|{name:string}) {
  return arg
}

// 泛型
function zzz<Type>(arg: Type):Type{
  return arg
}
// 标准完整写法
const res1 = zzz<number>(123)
const res2 = zzz<string>('abc')
const res3 = zzz<{name: string}>({name:
'why'})

// 省略写法
const res4 = zzz('qqqqqqqqqq')
