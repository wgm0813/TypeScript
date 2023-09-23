function getLength(args: {length: number}){
  return args.length
}

let message:string = 'aaa'
console.log(getLength("aaa"),message)
getLength([1,2,3]);