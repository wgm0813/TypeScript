// 获取DOM元素 <img class="img">
// 类型断言:确定是某种类型就直接as类型
const imgEl = document.querySelector('.img') as HTMLImageElement
imgEl.src = "xxx"

// 类型断言的规则：断言只能断言成更加具体的类型，或者 不太具体（any/unknown） 类型
const t: number = 18
// 错误做法
// const b = t as string

// 类型检测正确，但是这个代码不太正确，允许但不提倡
const c = t as any
const d = c as string


