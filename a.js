var str = "我是王金玉";
var arr = ["1", "2"];
var arr1 = ["1", "2"];
var arr2 = ["1", 2, true]; //tuple类型
var flag;
(function (flag) {
    flag[flag["success"] = 1] = "success";
    flag[flag["error"] = 0] = "error";
})(flag || (flag = {}));
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
