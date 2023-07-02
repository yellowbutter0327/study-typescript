//1. 타입스크립트 기본 타입 정리
//1.1 string, number, undefined, null 타입도 있다.
var 이름 = "으네";
var 나이 = 24;
var 결혼했니 = true;
var 다이어트하니 = undefined;
// 1.2. array의 경우 []로 타입지정한다.
var 회원들 = ["kim", "park"]; // 0이라고 기입하면 에러가 나겠죠.
//1.3. object형도 가능하다.
var 고객들 = {
  member1: "kim",
  member2: "park",
};
var project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
//1.4. 타입스크립트에서 타입 지정 원래 자동으로 됩니다. 문법 생략 가능.
//1.5. 예지 문제
var favorite = {
  song: "곁에 있어줘",
  singer: "sole",
};
var test = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
//2. 타입을 지정하기 애매할 때
//2.1. number, stiring 둘 다 가능
var 회원 = "kim";
//2.2 소괄호 안해주면 number도 들어갈 수 있고 array도 들어갈 수 있다는 뜻으로 해석된다.
var 회원2 = ["1", "2", "3"]; //숫자가 오거나, 문자 array
var 회원3 = [1, "2", 3]; // [] 안에 number나 string이 들어가야
var 오브젝트 = { a: 123 };
//2.3 any: 모든 타입 들어올 수 있다. 그냥 쓰면 타입스크립트를 쓰는 이유가 없다.
var 암거나;
//2.4 unknown: 용도는 any와 비슷하지만 any보다 안전하다.
var 암거나2;
//2.5 string|number +1 은 안된다. string, number 모두 +1이 가능하기 때문이다.
// ex ) let 나이 : string|number;
// 나이 + 1;
// let 나이 : unknown;
// 나이 + 1 둘 다 에러가 난다.
// 이유 : typescript는 언제나 확실한 것을 좋아해서 변경하려는 변수 타입이 확실해야 연산을 수행한다.
//2.6 예제 문제
// let user : string = 'kim';
// let age : undefined | number = undefined;
// let married : boolean = false;
// let 철수 : (string|number|undefined|boolean)[]= [user, age, married];
// let 학교 : {
//   score : (number|boolean)[],
//   teacher : string,
//   friend : string | string[]
// }
// = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee', 학교.teacher]
