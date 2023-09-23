//类型别名： type
type MyNumber = number | string
function printID(id: MyNumber){
  console.log(id)
}

//打印坐标
type PointType1 = {x:number,y:number,z?:number}
function printCoorinate(point: PointType1) {
  console.log(point)
}