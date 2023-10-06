interface IIndexType {
  // 返回值类型的目的是告知通过索引去获取到的值是什么类型
  [index: number]: string
}

// 索引签名 [index:number]:string
const namses: IIndexType = ['sbs','sbs']

// 索引签名[index: string]: any:没有报错
// 索引类型要求必须是字符串names[0] => names['0']
const aaaa: IIndexType = ['abc','abs','sfd']

// 索引签名[index: string]:string 会报错
// 严格字面量赋值检测: ['aas', 'sfdsf'] => Array实例 => names[0] names.forEach
const aaaas: IIndexType = ['ss']