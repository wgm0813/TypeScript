class KPerson{

}

/**
 * 类型的作用：
 * 1、可以创建类对应的实例对象
 * 2、类本身可以作为这个示例的类型
 * 3、类也可以当作一个有构造签名的函数
 */

const Kname: string = 'aaa'
const kp: KPerson = new KPerson()
function printPerson(p: Person){}

function factory(ctor: new() => void){}
factory(KPerson)