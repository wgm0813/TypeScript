// 在定义一个TypeScript中的函数时
// 返回值类型可以明确的指定，也可以自动进行类型推导
function sum(num1:number,num2:number){
  return num1 + num2
}

sum(22,4)
// sum('1','2')