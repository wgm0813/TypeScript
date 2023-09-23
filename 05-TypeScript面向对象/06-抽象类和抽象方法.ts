abstract class Shape{
  abstract getArea(): number
}
class rectangle extends Shape{
  constructor(public width:number,public height: number){
    super()
  }

  getArea(){
    console.log('矩形面积：', this.width * this.height);
    return this.width * this.height
  }
}

class Circle extends Shape{
  constructor(public radius: number){
    super()
  }

  getArea(){

    console.log('圆形面积',this.radius ** 2 * Math.PI)
    return this.radius ** 2 * Math.PI
  }
}
// 通用函数
function getArea(shape: Shape) {
  return shape.getArea()
}

getArea(new rectangle(10,20));
getArea(new Circle(2))
