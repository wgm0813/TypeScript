// 函数的重载写法：用于逻辑一样，但是传参类型不同导致问题，所以用重载
// 先编写重载签名
function addd(a1:number,a2:number): number
function addd(a1:string,a2: string): string
// 通用的函数实现
function  addd(a1:any, a2: any): any {
  return a1 + a2
}

addd(1,2)
addd('aaa','bbb')

// 要有匹配的重载，才能正常调用