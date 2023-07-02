type test = string | number;
let 이름: test = 123;

//number,boolean, undefined,null까지 가능
let 나이: number = 24;
let 결혼했니: boolean = true;
let 다이어트하니: undefined = undefined;

//array의 경우 []로 타입지정한다.
let 회원들: string[] = ["kim", "park"];

//object형도 가능하다.
let 고객들: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

let project :{
    member : string[],
    days : number,
    started : boolean,
  } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }