function greet(person: {name:string,age:number}){
    return'Hello' +person.name
}

interface person{
    name:string
    age:number
}
function grett(person:Person){
    return 'Hello'+ person.name
}
type Person ={
    name:string
    age:number
}
function greet(person:Person){
    return'Hello'+person.name
}