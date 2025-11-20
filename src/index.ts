// 기본 타입 템플릿

// Declare minimal console shape so TypeScript can compile without lib changes
declare var console: { log: (...args: any[]) => void };

// 1. string
// let myString: string;
// console.log("String:", myString);

// // 2. number
// let myNumber: number;
// console.log("Number:", myNumber);

// // 3. boolean
// let myBoolean: boolean;
// console.log("Boolean:", myBoolean);

// // 4. null
// let myNull: null;
// console.log("Null:", myNull);

// // 5. any
// let myAny: any;
// console.log("Any string:", myAny);

// // myAny 값 변경
// console.log("Changed to number:", myAny);

// // myAny 값 변경
// console.log("Changed to boolean:", myAny);

const greeting: string = "Halo Dunia!";
console.log("String:", greeting);

const year: number = 2025;
console.log("Number:", year);

const isNice: boolean = true;
console.log("Boolean:", isNice);

const childrenNum: null = null;
console.log("Null:", childrenNum);

let anyValue: any = "Ini adalah string dengan tipe any.";
console.log("Any string:", anyValue);
anyValue = 42;
console.log("Changed to number:", anyValue);
