class People{
    constructor(public name:string){}
}
let p2:People=new People('lison')
class Animal{
    constructor(piblic name:string){}
}
p2=new Animal('haha')
interface FoodInterface{
    type:string
}
class FoodClass implements FoodInterface{
    public type:string
}
class A{
    protected name:string
}
interface I extends A{}
class B extends A implements I {
    public name:string
}

const create =<T>(c:new()=>T):T =>{
    return new c ()

}
class Infos{
    public age:number
    constructor(){
        this.age=18
    }
}
//console.log(create<Infos>(Infos).age)
//console.log(create<Infod>(Infos).name)