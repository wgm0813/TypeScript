// 字面量类型的基本
const e: 'why' = 'why'
const y: 12= 12

// 将多个字面量类型联合起来
type Direction = 'left' | 'right' | 'up' | 'bottom'
const d1: Direction = 'left'
const d2: Direction = 'right'

// 封装请求方式
type MethodType = 'get' | 'post'
function request(url: string,method: MethodType) {

}

request('http:www.baidu.com', 'post')

// ts细节
const nn = {
  url: '2111',
  method: 'post'
} as const //强制变成字面量
// 只能传字面量，不能传string类型
request(nn.url, nn.method)
request(nn.url, nn.method as 'post') //类型断言
