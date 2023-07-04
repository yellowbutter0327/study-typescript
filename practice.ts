//1. 타입스크립트 기본 타입 정리
//1.1 string, number, undefined, null 타입도 있다.
let 이름: string = "으네";
let 나이: number = 24;
let 결혼했니: boolean = true;
let 다이어트하니: undefined = undefined;

// 1.2. array의 경우 []로 타입지정한다.
let 회원들: string[] = ["kim", "park"]; // 0이라고 기입하면 에러가 나겠죠.

//1.3. object형도 가능하다.
let 고객들: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

let project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

//1.4. 타입스크립트에서 타입 지정 원래 자동으로 됩니다. 문법 생략 가능.

//1.5. 예지 문제
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

//2. 타입을 지정하기 애매할 때

//2.1. number, stiring 둘 다 가능
let 회원: number | string = "kim";

//2.2 소괄호 안해주면 number도 들어갈 수 있고 array도 들어갈 수 있다는 뜻으로 해석된다.
let 회원2: number | string[] = ["1", "2", "3"]; //숫자가 오거나, 문자 array
let 회원3: (number | string)[] = [1, "2", 3]; // [] 안에 number나 string이 들어가야
let 오브젝트: { a: string | number } = { a: 123 };

//2.3 any: 모든 타입 들어올 수 있다. 그냥 쓰면 타입스크립트를 쓰는 이유가 없다.
let 암거나: any;

//2.4 unknown: 용도는 any와 비슷하지만 any보다 안전하다.
let 암거나2: unknown;

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

//3. 함수에 타입 지정하는 법 & void 타입

//3.1. 아무것도 지정하지 않으면 anytype으로 설정된다.
//3.2. 함수는 파라미터, return값 타입지정가능
function 함수(x: number): number {
  return x * 2;
}
//3.4 void : 실수로 무엇인가 return 하는 것을 사전에 막을 수 있다.
function 함수2(x?: number): void {
  1 + 1;
}

//3.5. x? : 파라미터가 옵션인 경우에는 파라미터변수? :타입
//**중요!** 변수?:number는 변수:number|undefined와 같다.
function 함수3(x: number | undefined): void {
  console.log("함수3", x);
}

//4.타입 확정하기: Narrowing & Assertion
//4.1. type이 아직 하나로 확정되지 않았을 경우 type narrowing을 써야한다.
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}
내함수(123);

//4.2. narrowing으로 판정해주는 문법들 : typeof변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모

//4.3. type assertion: 타입 덮어쓰기 - 이것 쓰면 if문 필요 없음
//4.3.1.왼쪽에 있는 것을 number로 덮어 써주세요!
//4.3.2. 용도 잘 알자.
// let 이름: string = "kim";
// 이름 as number; 이렇게 타입을 a에서 b로 변경하려고 쓰는 것이 아니다.
// narrowing 할 때 씁니다.
//4.3.3.무슨 타입이 들어올지 100% 확신할 때 쓴다. 자주 사용안함. 비상용으로 주요 사용.
function 내함수2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // x를 number로 덮어 써주세요!
}

//5. 타입도 변수에 담아쓰세요. type 키워드 써서 &readonly
//5.1. 타입 정의가 너무 길면 type aliases(별칭)을 사용합시다.
// 별칭은 관습적으로 대문자를 사용합니다. ex) AnimalType
type Animal = string | number | undefined;
let 동물: Animal = 123;

//5.2.object 타입도 저장가능합니다.
type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };

//5.3. const는 재할당을 막는 변수지 안에 있는 object 값을 바꾸는 것이 아니다.
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

//5.4. readonly로 잠그기 :그런데 typescript를 쓰면 object 자료 수정도 막을 수 있다.
// editor에서 error는 띄워주지만 실제로 값을 바꿔주지는 않음
type Girlfriend = {
  readonly name: string; // object 속성 안에도 ? 사용 가능해서 name?:string 가능
};
const 여친: Girlfriend = {
  name: "백예린",
};

//5.5. type 변수를 union type으로 합치기 가능하다.
type Name = string;
type Age = number;
type Person = Name | Age;

//5.6. & 연산자로 object 타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;
let position: NewType = { x: 10, y: 20 };

//5.7.같은 이름의 type 변수는 재정의 불가능하다.
// type PositionX = {x:number} 이렇게 했는데 다시 또 선언해서 재정의 하는게 불가능하다.
