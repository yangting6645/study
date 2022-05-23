class Counter{
    constructor(public conmt:number=0){}
    public add(value:number){
        this.count +=value
        return this
    }
    public subtract(value:number){
        this,count -=value
        return this
    }
}
interface Type{
    a:never;
    b:never;
    c:string;
    d:number;
    e:undefined;
    f:null;
    g:object
}
type Test=Type[keyof Type]
interface Info1{
    age:number;
    name:string;
    sex:string;
}
type ReadonlyType<T>={
    readonly [P in keyof T]:T[P]
}
type ReadonlyInfol = ReadonlyType<Infol>
let infoll:ReadonlyInfol={
    age:18,
    name:'lison',
    sex:'man',
}
const names={0:'hello',1:'worid',2:'bye'}
const lengths=mapObject(names,(s)=>s.length)
//console.log(lengths)

type Proxy<T>={
    get(): T;
    set(value:T):void;     
}
function proxify<T>(obj:T):Proxyfi<T>{
    const result={}as Proxify<T>
    for (const key in obj){

    }
}
//unknown
//[1]任何类型都可以赋值给unknown类型
let valuel:unknown
valuel='a'
valuel=123


//T extends U ? X : Y
type Types2<T> = T extends string ? string:number


type TypeName<T>=
    T extends string ?string:
    T extends number ? number:
    T extends boolean ? boolean:
    T extends undefined ? undefined:
    T extends undefined ? undefined:
    T extends ()=> void ? ()=>void:
