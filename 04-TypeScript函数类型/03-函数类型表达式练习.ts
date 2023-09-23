// 函数类型表达式
type CaclType = (num1: number, num2: number) => number

function cal(calcFn: CaclType){
  const num1 = 10;
  const num2 = 20;
  const res = calcFn(num1,num2)
  console.log(res)
}

function add(num1: number, num2: number){
  return num1 + num2
}
cal(add)

function mul(num1: number, num2: number){
  return num1 * num2
}
cal(mul)