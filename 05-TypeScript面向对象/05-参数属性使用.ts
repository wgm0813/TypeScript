class dd {
  // 语法糖
  constructor(public name: string,private age: number,readonly height: number){}
  running(){
    console.log(this.age,'eating')
  }
}

const ps= new dd('wg',10,2.22)
console.log(ps.name)