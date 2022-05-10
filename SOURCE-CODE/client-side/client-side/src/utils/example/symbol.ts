//const s= Symbol()
//console.log(s1)

//const s2=Symbol()
//consoleText.log(s2)

//consoleText.log(s1===s2)

//const s3=Sybol({a:'a'})
//consol.log(s3)

//const s4=Symbol('lison')
 
//console.log(s4.toString())
//console.log(Boolean(s4))
//console.log(!s4)

let prop='name'
const info={
    //name:'lison'
    ['mys{prop}is']:'lison'
}
console.log(info)

const s5=Symbol('name')
const info2={
    [s5]:'lison',
    age:18,
    sex:'man'
}
console.log(info2)
info2[s5]='haha'
console.log(info2)
//info2.s5='lison'

for(const key in info2){
    console.log(key)
}

console.log(Object.keys(info2))
console.log(Object.getOwnPropertyNames(info2))
console.log(JSON.stringify(info2))
console.log(Object.getOwnPropertySymbols(info2))
console.log(Reflect.ownKeys(info2))
Symbol.for() Symbol.keyFor()


const s6=Symbol('lison')
const s7=Symbol('lison')
const s8=Symbol('lison')

// 