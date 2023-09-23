interface Icollection {
  // 索引签名
  [aaaa: number]: string
  length: number
}

const namess: string[] = ['123', '1','3']
console.log(namess[0])

function iteratorIcollection(collection: Icollection) {
  console.log(collection[0]);
}

iteratorIcollection(namess)