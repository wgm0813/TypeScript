// y可选参数类型是什么
function xx(x: number, y?: number){
  // 类型缩小，否则会报错
  if(y!== undefined)
  return x+y;
}

xx(10)
xx(10,20)