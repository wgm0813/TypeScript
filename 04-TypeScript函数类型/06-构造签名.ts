class Person {
}

// 构造签名
interface ICT {
  new (): Person
}

function factory(fn: ICT) {
  const f= new fn()
  return f
}

factory(Person)