//1. 타입스크립트 기본 타입 정리

import { EnumNumberMember } from "@babel/types";
import { arrayBuffer } from "stream/consumers";

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

//6. Literal Types로 만드는 const 변수 유사품
//6.1. Literal Types: 어떤 변수가 미리 골라놓은 데이터만 가질 수 있게 도와줍니다.
let 성: "kim"; // 성에는 "kim"만 올 수 있는 것임
let 오잉: "과자" | "짭조름하다";
오잉 = "짭조름하다";

//6.2. 함수에도 적용 가능하다. a에는 "나는 귀엽다"가 들어가고 return 값은 1 아니면 0
function 함수4(a: "나는귀엽다"): 1 | 0 {
  return 1;
}

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

가위바위보("가위");

//6.3. 중요한, 변하지 않는 정보를 저장하고 싶을 때 const를 자주 쓰는데 가끔은 변하는 중요한 정보를 저장하고
// 싶을 때는 const가 무쓸모이다. 그럴때는 literal type 사용하기
let 할수있다: "나는" | "우리는";
const 변수 = "kim";

//6.4. as const & literal type의 문제점
//as const를 사용해봅시다. object를 잠궈준다.
//object value 값을 그대로 타입으로 지정해준다.
//object 속성들에 모두 readonly를 붙여준다.
let 자료 = { name: "kim" } as const;
function 함수5(a: "kim") {}
함수5(자료.name);

//7. 함수와 methods에 type alias 지정하는 법
// 함수에 들어갈 파라미터와 return으로 뱉을 값들을 타입 지정할 수 있다.
type 함수타입 = (a: string) => number; // 7.1. 함수 타입은 ()=>{} 모양으로

let 함수7: 함수타입 = function (a) {
  return 10;
}; //7.2. 함수 표현식에만 type alias 사용 가능

let 회원정보 = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};

//8. 타입스크립트로 HTML 변경과 조작할 때 주의점
//8.1 tsconfig.json에서 strickNullChecks 를 true로 바꾸면
// strickNullChecks 옵션도 자동으로 true로 켜진다.

//8.2 ts로 작성된 코드를 js코드로 옮기고
//let 제목 = document.querySelector("#title") 제목.innerHTML = '반값소'
//이렇게 하면 에러가를 낸다. 셀렉터로 html을 찾으면 Element|null 이기 때문이다.

//<HTML 조작시 narrowing 방법 5개>
//8.3 제목이라는 변수가 union type이기 때문에 if문으로 type narrowing 하면 된다.
let 제목5 = document.querySelector("#title");
if (제목5 != null) {
  제목5.innerHTML = "반가워요";
}

//8.4 instanceof 연산자
let 제목6 = document.querySelector("#title");
if (제목6 instanceof Element) {
  제목6.innerHTML = "반가워요";
}

// 8.5. as로 사기치기
let 제목7 = document.querySelector("#title") as Element;
제목7.innerHTML = "반가워요";
if (제목7?.innerHTML != undefined) {
  제목7.innerHTML = "반가워요";
}

//8.6. 태그마다 정해져있다.
//a 태그인 경우에는 HTMLAnchorElement, h1이면 HTMLHeadingElement,
//button 태그면 HTMLButtonElement

//9. class 만들 때 타입 지정 가능
class Person2 {
  person2Name; // ts 문법 ; constructor는 필드값에 어쩌구가 미리 있어야함
  // this.어쩌구가 가능하다.
  constructor(a: string) {
    this.person2Name = a;
  }

  함수(a: string) {
    a + "안녕하세요";
  }
}

let 사람1 = new Person2("kim");
let 사람2 = new Person2("park");

class Person3 {
  data = 0;
}

let 사람3 = new Person3();
//console(사람3.data)

//10. Object에 타입지정하려면 interface도 가능
//10.1bject의 경우에는 type 키워드 대신에 interface도 사용가능하다.
type SmallAnimal = { name: String };
type Cat = { age: number } & SmallAnimal;
//10.2 &기호 : 두 타입을 전부 만족하는 타입
//중복 속성 발생해도 미리 에러가 안나기 때문에 주의한다. 선언 말고 사용할때 에러가 난다.
// '&'는 합치는 게 아니라 동시에 만족하는 속성을 의미한다.

//10.3 차이점 > interface는 중복선언 가능, type은 중복선언 불가능
interface Student {
  name: string;
}
interface Student {
  score: number;
}

interface Teacher extends Student {
  age: number;
}
//extends 쓸 때 중복속성 발생하면 에러로 잡아준다.

let 학생: Student = { name: "kim", score: 100 };
let 선생: Teacher = { name: "kim", age: 20, score: 100 };

//10.4 외부 라이브러리 같은 경우 interface를 많이 쓴다. 그후 추후에 타입에 뭐 더하는거는 쉽다.
//다른 사람이 이용 많이 할 것 같으면 object 타입 정할때 interface를 쓰자.

//[PART2]
//11. 함수 rest 파라미터, destructuring 할 때 타입지정

function 함수8(...a: number[]) {
  console.log(a);
}
//개수는 상관이 없다.
//rest 파라미터는 다른 파라미터가 있으면 맨 뒤에만 사용이 가능하다.
함수8(1, 5, 3, 5, 6);

//참고문법: spread operator (괄호 벗기는 문법)
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

//11.1 destructuring 개념
let [변수1, 변수2] = ["안녕", 100];
let { students, age } = { students: true, age: 20 };
//11.2 사실 {students:students, age:age} 이렇게 된건데 생략 가능하다.
//11.3 let object = { students: true, age: 20 }; 이렇게 하고
//11.4 함수9(object.students, object,age) 이렇게 할 수 있지만 그렇게 안하고
//11.5처럼 하면 된다.

function 함수9({ students, age }: { students: boolean; age: number }) {
  console.log(students, age);
}

//11.5
함수9({ students: true, age: 24 });

//11.6 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
function insertNum(...x: number[]): number {
  let result = 0;
  x.forEach((i) => {
    if (result < i) {
      result = i;
    }
  });
  return result;
}

//12.Narrowing 할 수 있는 방법 더 알아보기
//in 연산자로 object 자료 narrowing
//서로 배타적인 속성을 가져와야 narrowing이 가능
function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {
    console.log(s);
  }
}

//12.1 class로부터 생산된 object라면 instanceof로 narrowing
//javascript에서는 instanceof로 부모 클래스가 누군지 검사할 수 있다.
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log("참이에요");
}

//12.2 iteral type narrowing
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("the car is " + x.color);
  } else {
    console.log("the bike is " + x.color);
  }
}
