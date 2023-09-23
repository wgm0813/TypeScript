class PP {
  name: string;
  age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
}

// 示例对象instance
const p1 = new PP('why',12)
const p2 = new PP('kobe',123)

console.log(p1.name)
console.log(p2.name)