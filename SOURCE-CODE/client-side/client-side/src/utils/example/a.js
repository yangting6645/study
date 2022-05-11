function Food (){
    this.type = 'food'
}
Food.prototype.getType=function(){
    return this.type
}
function Vegetables(name){
    this.name=name
}
Vegetables.prototype=new Food()
const tomato=new Vegetables('tomato')
console.log(tomato.getType())

class Parent{
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
}
class Child extends Parent{
    constructor(name,age){
        super(name)
        this.age=age
    }
}
const c=new Child ('lison',18)
//console.log(c)
//console.log(c.getName())
//console.log(c instanceof Child)
//console.log(c instanceof Parent)
//console.log(Child.getNames())
//console.log(Object.getPrototypeOf(Child)===Parent)

class Parent{
    constructor(){
        this,type='parent'
    
    getName(){
        return this.type
    }
}
Parent.getType=()=>{
    return'is parent'
}
class Child extends Parent{
    constructor(){
        super()
        console.log('consstructor:'+super.getName())
    }
    getParentName(){
        console.log('getParentName:'+super.getName())
    }
    static getParentType(){
        console.log('getParentTyp:'+super.getName())
    }
}

const c = new Child()
c.getParentName()