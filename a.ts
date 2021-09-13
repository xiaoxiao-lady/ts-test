let str:string="我是王金玉"
let arr:string[]=["1","2"]
let arr1:Array<string>=["1","2"]
let arr2:[string,number,boolean]=["1",2,true] //tuple类型
enum flag {
  success=1,
  error=0
}
// let f:flag=flag.success
// function sum(a:number,b:number,...rest:number[]):number{
//   let sum =a+b
//   rest.forEach(ele=>sum+=ele)
//   return sum
// }
// console.log(sum(1,2,3,4))
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: any, b: any) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
// alert(add("wode",20))
// 【类】
