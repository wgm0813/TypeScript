// 对象中的函数中this
const famy = {
  name: 'why',
  studying: function(){
    console.log(this.name, 'studying')
  }
}
famy.studying()

// 普通函数
function fss(this: {name: string},info:{name: string}) {
  console.log(this,info)
}
fss.call({ name: "www" }, { name: "sdf" });