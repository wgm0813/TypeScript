interface sssss {
  xm: string
  nl: number
  play: ()=>void
}

// const dog: sssss = {
//   xm: "小黄",
//   nl: 12,
//   play: () => {
//     console.log("爱吃饭");
//   }
// };

class redDog implements sssss {
  xm!: string
  nl!: number
  play!: () => {}
}

const red = new redDog()