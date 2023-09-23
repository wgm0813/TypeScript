function foo1(){
}
foo1()

function parseLyric(){
  return []
}

//封装框架、工具库的时候可以使用以下never
//其他时候在扩展工具的时候，对于一些没有处理的case,可以直接报错，然后就会发现报错了check所以就相当于提示了扩展类型要拓展case
function handleMessage(message: string | number |boolean){
  switch(typeof message){
    case "string":
      console.log(message.length)
      break;
    case "number":
      console.log(message)
      break;
    case "boolean":
      console.log(message)
      break;
    default:
      const check:never = message
  }
}
handleMessage('111')
handleMessage(123)

//另一个同事调用这个函数
handleMessage(true)