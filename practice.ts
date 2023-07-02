//1. string, number, undefined, null 타입도 있다.
let 이름: string = "으네";
let 나이: number = 24;
let 결혼했니: boolean = true;
let 다이어트하니: undefined = undefined;

// 2. array의 경우 []로 타입지정한다.
let 회원들: string[] = ["kim", "park"]; // 0이라고 기입하면 에러가 나겠죠.

//3. object형도 가능하다.
let 고객들: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

let project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// 4. 타입스크립트에서 타입 지정 원래 자동으로 됩니다. 문법 생략 가능.

// 5. 예지 문제
let favorite: { song: string; singer: string } = {
  song: "곁에 있어줘",
  singer: "sole",
};

let test: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
