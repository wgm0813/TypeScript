// 剩余参数：不定数量的参数放到一个数组中
function rest(...args: (string|number)[]){
console.log(args)
}

rest('123',234,2)