interface WGM {
  name: string
  age: number
}

// 定义info, 类型是WGM类型
const infowgm: WGM = {
  name: "wgm",
  age: 12,
  // height: 123 这种会报错，类型检测报错
};

// 以下同种情况但是不会报错
const obj1 ={
  name: 'wgm',
  age: 12,
  height: 123
}
const infowgm2: WGM = obj1;

// 解释现象
// 第一次创建的对象字面量，称之为fresh(新鲜的)
// 对于新鲜的字面量，会进行严格的类型检测，必须完全满足类型的要求（不能有多余的属性）
const objx = {
  name: 'wgm',
  age: 12,
  height: 123
}
const os: WGM = objx