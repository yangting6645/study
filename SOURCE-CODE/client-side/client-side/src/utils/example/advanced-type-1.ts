class CreateByClassl{
    public age = 18
    constructor(){}
}
function getSplicedStr(num:number | null):string{
    function getRes(prefix:string){
        return prefix + num!.toFixed().toString
    }
    num = num ||0.1
    return getRes('lison-')
}

type TypeString=string
let str2:TypeString
type Position

type Alias={
    num:number,
}
interface Interface{
    num:number
}    
let_alias:Alias={
    num:123
}
let_interface:Interface={
    num:321,
}
_alias=_interface
type Name = 'Lison'
type Direction='north'|'east'|'south'|'west'
