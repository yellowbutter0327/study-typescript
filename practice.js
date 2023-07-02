//1. string, number, undefined, null 타입도 있다.
var 이름 = "으네";
var 나이 = 24;
var 결혼했니 = true;
var 다이어트하니 = undefined;
// 2. array의 경우 []로 타입지정한다.
var 회원들 = ["kim", "park"]; // 0이라고 기입하면 에러가 나겠죠.
//3. object형도 가능하다.
var 고객들 = {
    member1: "kim",
    member2: "park",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// 4. 타입스크립트에서 타입 지정 원래 자동으로 됩니다. 문법 생략 가능.
// 5. 예지 문제
var favorite = {
    song: "곁에 있어줘",
    singer: "sole",
};
var test = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
