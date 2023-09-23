// 函数类型表达式
type BarType = (num1: number) => number

//函数的调用签名（从对象的角度来看待这个函数，也可以有其他属性） 
interface IBar {
  name: string
  age: number
  // 函数可以调用：函数调用签名
  // (参数列表): number返回值类型
  (num1: number): number
}
const wer: IBar = (num1: number): number => {
  return 123;
};

// 函数既可以被调用，也可以有自己的属性
// 如果只是描述函数类型本身（函数可以被调用），使用函数类型表达式（Function Type Expressions）
// 如果式描述函数作为对象可以被调用，同时也有其他属性时，使用函数调用签名（Call Signatures）
wer.name = 'aaa';
wer.age = 18
wer(123)
