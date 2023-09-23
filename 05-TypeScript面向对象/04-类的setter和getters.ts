class IsPerson {
  // 私有属性: 属性前面会加上下划线
  private _name: string
  constructor(name: string){
    this._name = name
  }
  running(){
    console.log('running',this.name)
  }
  set name(newValue:string){
    if(newValue)
    this._name = newValue
  }
  get name(){
    return this._name
  }
}
