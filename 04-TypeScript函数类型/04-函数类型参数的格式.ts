// ts对于传入的函数类型的参数个数不进行检测
type ctype = (num1: number, num2: number) => number
function calc(calcFn: ctype){
}

// 这里传入的类型没有检测，你传入匿名函数也是不会检测报错的
calc(function(){
  return 123
})

// ts对于很多类型的检测包不报错，取决于他的内部规则
