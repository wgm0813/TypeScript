// 交叉类型：两种（多种）类型要同时满足
type newType = number & string //没有意义

interface woshi {
  name: string
  age2: string
}

interface tashi {
  name3: string
  coding: () => void
}

const infoa: woshi & tashi ={
  name: 'wfm',
  age2: '123',
  name3: 'wer',
  coding: ()=>{
    console.log('非诚勿扰')
  }
}