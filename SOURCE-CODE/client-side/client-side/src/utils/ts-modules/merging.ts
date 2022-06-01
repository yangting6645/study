interface InfoInter{
    name:string
}
interface InfoInter{
    age:number
}
let infoInter:InfoInter
infoInter={
    name:'lison',
    getRes(text:any){
        if(typeof text ==='string'){return text.length}
        else{return String(text)}
    },
}

namespace Validations{
    export const checkNumber=()=>{}
}