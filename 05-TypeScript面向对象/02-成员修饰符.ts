class PsP {
  // 公共可用可见，默认情况就是public
  public name: string;
  public age: number;

  // 外界访问不了，只能在class里面访问
  // private agesds: number;

  // 当前类和子类里面可以访问，但是外界不能访问
  // protected aa:number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 示例对象instance
const ps1 = new PsP("why", 12);
const ps2 = new PsP("kobe", 123);

console.log(ps1.name);
console.log(ps2.name);
