let x: number = 156_464_5454
console.log(x);


let arr1: number[] = [1, 2, 3, 4, 5]
arr1.forEach(val => console.log(val))


// enum

enum Size { Small, Medium, Large }
console.log(Size) // 0 1 2
console.log(typeof Size) // object


enum CardinalDirections { North, East, South, West }
let currentDirection = CardinalDirections.North;
console.log(currentDirection);   //  0


enum Size1 { Small = 's', Medium = 'm', Large = 'l' }
let mySize: Size1 = Size1.Small
console.log(mySize) // s


const enum Size2 { Small = 's', Medium = 'm', Large = 'l' }
let mySize2: Size2 = Size2.Small
console.log(mySize2) // s


// function

function calc(a: number, b: number) {
    return a + b
}


function calc1(a: number, b: number): number {
    return a + b
}


function calc2(a: number, b: number, c?: number) {
    if ((c || 20)) { //migim agr c vojod dasht c agr nadash 20 dar nazar begir
        return a + b
    }
}
let result_calc = calc2(2, 5, 3)
let result_calc1 = calc2(2, 5)
console.log(result_calc) // 7
console.log(result_calc1) // 7


function calc3(a: number, b: number, c = 10): number {
    return a + b + c
}
let result_calc2 = calc2(2, 5, 3)
let result_calc3 = calc2(2, 5)
console.log(result_calc2) // 10
console.log(result_calc3) // 17




let employee: {
    id: number
    name: string
} = {
    id: 1,
    name: ''
}
employee.name = 'test'
console.log(employee)


let employee1: {
    id: number
    name?: string
} = {
    id: 1,

}
employee1.name = 'test'
console.log(employee1)


let employee2:{
   readonly id:number,
    name:string,
    retire:(date:number) => void
}={
    id:1,
    name:'test',
    retire:(date:number) =>{
        console.log(date)
    }
}
employee2.retire(10)


//  Aliases

type Employee ={
    readonly id:number,
     name:string
   
}
let employee3:Employee={
     id:1,
     name:'test'
    
 }
let employee4:Employee={
     id:2,
     name:'HOSEIN'
   
 }


// Union Type

function kgToLbs(weight:number | string){
    return weight
}
let kg = kgToLbs(3000)
let kg1 = kgToLbs('1000')
console.log(kg) // 3000
console.log(kg1) // '1000'



type dragable ={
    drag:() => void
}
type resizeable ={
    resize:() => void
}
type UIWidget = dragable & resizeable // yani joft type ra dashte bashad
let textBox :UIWidget={
    drag:() =>{},
    resize:() => {}
}


// Quantity

let Quantity :50 | 100 = 50 // faghat mitavanad maghadir 50 va 100 ra begirad
Quantity=100
Quantity=50
Quantity = 10
type Quantity1 = 20 | 30
let Quantity2:Quantity1 =30

// Interface

interface Rectangle {
    height: number,
    width: number
  }
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };



  interface ColoredRectangle extends Rectangle {
    color: string
  }
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

 
// Generics

  function echo<T>(value: T): T {
    return value;
  }
  console.log(echo('hello')); // 'hello'
  console.log(echo(10)); // 10
  console.log(echo(true)); // true


  function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
  console.log(createPair<Boolean, string>(true, 'test')); // [true, 'test']