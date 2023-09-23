// 普通实现
// function getLength(arg) {
//   return arg.length
// }

// 使用函数重载
function getLen(arg: string):number
function getLen(arg: any[]):number
function getLen(arg:any){
  return arg.length
}

// 联合