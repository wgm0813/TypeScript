// typescript对于类型检测的时候使用的是鸭子类型
// 鸭子类型: 如果一只鸟，游起来像鸭子，看起来像鸭子，那么你可能认为他就是一只鸭子
// 鸭子类型，只关心属性和方法，不关心你具体是不是对应的类型
class MPerson{
  constructor(public name: string,public age: number) {}
}

class Dog {
  constructor(public name: string,public age: number){}
}

function printPerson(p: MPerson){
  console.log(p.name,p.age)
}
printPerson(new MPerson('王高敏',12))
printPerson(new Dog('敏',12))