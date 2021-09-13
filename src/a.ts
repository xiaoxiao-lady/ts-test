/*
 * @Description: 
 * @FilePath: \ts-test\src\a.ts
 */
// let value:unknown;
// value=true
// 返回never的函数必须存在无法达到的终点
// 【never】
// function error(message: string): never {
//   throw new Error(message);
// }
// error("错误")

// function infiniteLoop(): never {
//   while (true) {
//     console.log("add")
//   }
// }
// infiniteLoop()
// 【函数】
// function add(a:number,b:number):number{
//   return a+b
// }
// alert(add(1,2))
// var getInfo=function(name:string,age?:number):string{
//   if(age){
//     return `${name}---${age}`

//   }else{
//     return `${name}---年龄保密`

//   }
// }
// alert(getInfo("小王",20))
// 错误的写法

//【类】 
class Person{
  // 静态属性
   static cname:string="静态属性";
  // 成员属性 
   name:string;  
   #age:number;
  //构造函数，创建实例
   constructor(name:string,age:number){   
     this.name=name
     this.#age=age
   }
  //  静态方法
   static getClassName(){
     return "我是静态的方法"
   }
  //  成员方法
   getName():string{
     console.log("私有变量"+this.#age)
     return this.name
   }
  //  成员方法
   setName(name:string):void{
      this.name=name
   }
}
var p=new Person("张三",20);
console.log(Person.cname)
// console.log(Person.age)

console.log(Person.getClassName())

// console.log(Person.name)  //错误的写法，成员属性不能通过类名调用，只有在创建实例，构造函数执行了，成员属性才会赋值
// console.log(p.cname)  //错误的写法，静态方法是不能够继承的
// console.log(p.getClassName()) //错误的写法，静态方法是不能够继承的

console.log(p.getName())
// console.log(p.age)

p.setName("李四")
console.log(p.getName())









