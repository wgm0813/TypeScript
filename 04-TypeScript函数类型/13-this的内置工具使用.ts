// 普通函数
function fss2(this: { name: string }, info: { name: string }) {
  console.log(this, info);
}
type FooType = typeof fss2

// ThisParameterType: 获取FooType类型中this的类型
type FooThisType = ThisParameterType<FooType>

// OmitThisParameter: 删除this参数类型，剩余的函数类型
type PureFooType = OmitThisParameter<FooType>

// ThisType: 用于绑定一个上下文的this
interface IState {
  name: string
  age: number
}
interface IStore{
  state: IState
  eating: ()=> void
  running: () => void
}

const store: IStore & ThisType<IState> ={
  state:{
    name: 'wht',
    age:12
  },
  eating: function() {
    console.log(this.name)
  },
  running:function(){

  }
}
store.eating.call(store.state)