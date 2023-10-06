// 定义枚举类型
enum ToDirection {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

const ds1: ToDirection = ToDirection.UP

function turnDirection(direction: ToDirection) {
  switch(direction){
    case ToDirection.UP:
      console.log('向上')
      break;
  }
}

turnDirection(ds1)