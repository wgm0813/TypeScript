type PT= {
  x: number,
  y: number,
  z?: number
}

// 接口: interface声明
interface PT2 {
  x: number,
  y: number
}

function a(point: PT2){
  console.log(point.x,point.y)
}
a({x:1,y:2})