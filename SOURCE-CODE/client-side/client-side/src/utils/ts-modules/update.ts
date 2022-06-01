setTimeout(()=>{
    console.log(1)
},1000)
function getIndex(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(1)
            if(bool){resolve('a')}
        })
    })
}