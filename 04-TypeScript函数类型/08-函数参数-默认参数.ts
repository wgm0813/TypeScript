// 默认参数
// 有默认值，默认情况下类型注解可以省略
// 有默认值的参数，是可以接收一个undefined值
function ccc(x: number, y: number = 100){
  console.log(y+10)
}

ccc(2)
ccc(2,undefined)
