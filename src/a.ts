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
// class Person{
//   // 静态属性
//    static cname:string="静态属性";
//   // 成员属性 
//    name:string;  
//    #age:number;
//   //构造函数，创建实例
//    constructor(name:string,age:number){   
//      this.name=name
//      this.#age=age
//    }
//   //  静态方法
//    static getClassName(){
//      return "我是静态的方法"
//    }
//   //  成员方法
//    getName():string{
//      console.log("私有变量"+this.#age)
//      return this.name
//    }
//   //  成员方法
//    setName(name:string):void{
//       this.name=name
//    }
// }
// var p=new Person("张三",20);
// console.log(Person.cname)
// // console.log(Person.age)

// console.log(Person.getClassName())

// // console.log(Person.name)  //错误的写法，成员属性不能通过类名调用，只有在创建实例，构造函数执行了，成员属性才会赋值
// // console.log(p.cname)  //错误的写法，静态方法是不能够继承的
// // console.log(p.getClassName()) //错误的写法，静态方法是不能够继承的

// console.log(p.getName())
// // console.log(p.age)

// p.setName("李四")
// console.log(p.getName())



//【类的继承】 
// class Person{
//   // 成员属性 
//    name:string;  
//   //构造函数，创建实例
//    constructor(name:string){   
//      this.name=name
//    }
//   //  成员方法
//    getName():string{
//      return this.name
//    }
// }
// class Web extends Person{
//   age:number
//   constructor(name:string,age:number){
//     super(name)  //调用父类的构造函数,传父类需要的参数
//     this.age=age  //子类自己的成员属性
//   }
//   run():string{
//     return this.name+"年龄"+this.age
//   }
// }
// var w=new Web("王金玉",23)
// alert(w.run())
// alert(w.getName())

//【类的继承】 
// 属性
// 私有属性：private，只能在类内部，不能在子类里面和类外部访问
// 被保护的属性：protect，能够在类内部，子类里面访问，但是不能在类外部访问
// 共有属性：public， 能够在类内部，子类里面，以及类外部都能访问
// class Person{
//   // 成员属性 
//   public name:string;  
//   // protected name1:string
//   // public name2:string

//   //构造函数，创建实例
//    constructor(name:string){   
//      this.name=name  //类内部可以访问
//    }
//   //  成员方法
//    getName():string{
//      return this.name
//    }
// }
// class Web extends Person{
//   constructor(name:string){
//     super(name)  //调用父类的构造函数,传父类需要的参数
//   }
//   run():string{
//     return this.name  //子类中也可以访问
//   }
// }
// var w=new Web("王金玉")
// alert(w.name)   //类的外部也能够访问
// 【抽象类】

// abstract class Animal{
//   public name:string

//   constructor(name:string){
//     this.name=name
//   }
//   abstract eat():any;
// }
// // const a=new Animal();//错误的写法，抽象类不能实例化，只能是作为各个子类的基类
// class Dog extends Animal{
//   constructor(name:string){
//     super(name)
//   }
//   eat():void{  //基类的（父类）抽象方法必须在子类中存在
//     console.log(this.name+"喜欢吃骨头")

//   }
// }
// class Cat extends Animal{
//   constructor(name:string){
//     super(name)
//   }
//   eat():void{  //基类的（父类）抽象方法必须在子类中存在
//     console.log(this.name+"喜欢吃鱼")

//   }
// }
// const d=new Dog("小花狗")
// d.eat()
// const c=new Cat("小花猫")
// c.eat()
// interface fullName{
//   firstName:string;
//   secondName?:string; //这里必须是；不能是，
// }
// function Person(name:fullName):void{
//   console.log(name.firstName+"--"+name.secondName)
// }
// function Person1(name:fullName):void{
//   console.log(name.firstName+"$$"+name.secondName)
// }
// let obj={
//   firstName:"张",
//   secondName:"三"
// }
// Person(obj)
// let obj1={
//   firstName:"李",
 
// }
// Person1(obj1)

// interface Animal{
//   name:string;
//   eat(str:string):void
// }
// class Dog implements Animal{
//   name:string
//   constructor(name:string){
//     this.name=name
//   }
//   eat(){
//     console.log(this.name+"吃零食")
//   }//接口里面的属性和方法在类中必须有，没有的话会报错
// }
// const dog=new Dog("小狗")
// dog.eat()
// class Cat implements Animal{
//   name:string
//   constructor(name:string){
//     this.name=name
//   }
//   eat(food:string){
//     console.log(this.name+"吃"+food)
//   }
// }
// const cat=new Cat("小猫")
// cat.eat("鱼")

// 【接口继承接口】
// interface Animal{
//   name:string;
//   eat():void
// }
// interface Person extends Animal{
//   work():void
// }//继承接口的接口
// class Boy implements Person {
//   name:string
//   constructor(name:string){
//     this.name=name
//   }
//   eat():void{
//     console.log(this.name+"喜欢吃肉肉")
    
//   }//必须包含eat和work两个方法，
//   work():void{
//     console.log( this.name+"不喜欢工作")
   
//   }
// }
// const boy=new Boy("小红")
// boy.eat()
// 泛型
// 泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
// 想要实现返回不同的类型
// 方案一
// function getData(value:string):string{
//   return value
// }
// function getData1(value:number):number{
//   return value
// }
// 方案二
// function getData(value:any):any{
//   return value
// }//但是any放弃了类型检查，想要实现的是传入和返回的类型一致，any是不可以的
// 方案三
// function getData<T>(value:T):T{
//   return value
// }
// getData<number>(123) //传入什么返回什么类型
// function getData<T>(value:T):number{
//   return 123
// }
// getData<number>(123) //传入不同的类型
// class Instance {
//   value:string
//   constructor(value:string){
//      this.value=value
//   }
//   print():void{
//     console.log(this.value)
//   }
// }
const i=new Instance(123);
console.log(i)
class Instance<T> {
  value:T
  constructor(value:T){
     this.value=value
  }
  print():void{
    console.log(this.value)
  }
}
const i=new Instance<number>(123);
console.log(i)