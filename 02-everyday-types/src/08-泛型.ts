/*function fn(a:any):any{
    return a;
}*/
/*在定义函数或是类时，如果遇到类型不明确就可以使用泛型
*/
function fn<T>(a:T):T{
    return a;
}
//直接调用具有泛型的函数
let result=fn(a:10);//不指定泛型，TS可以自动对类型进行推断
let reult2=fn<string>(a:'hello');//指定类型
//泛型可以同时指定多个
function fn2<T,K>(a:123,b:'hello');
interface Inter{
    length:number;
}
//
function fn3<T extends Inter>(a:T):number{
    return a.length;
}