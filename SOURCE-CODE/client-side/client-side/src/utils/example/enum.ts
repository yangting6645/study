const test = 1
const getIndex=()=>{
    return 2
}
enum Status{
    Uploading=3,
    Success=2,
    Failed=5,
}

enum Message{
    Error='Sorry,error',
    Success='Hoho,success',
    Failed=Error,
}

enum Result{
    Faild=0,
    Success='success',
}

enum Animals{
    Dog=1,
    Cat=2,
}
interface Dog{
    type:Animals,Dog
}
//const dog:Dog={
 //   type:Animals.Cat
//}
enum Status{
    Off,
    On,
}interface Light{
    status:Status
}

const enum Animalsl{
    Dog=1,
}
