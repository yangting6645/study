(function (){
    //定义一个表示人的类
    class Person{
        name:string;
        age:number;

        constructor(name:string,age:number){
            this.name=name;
            this.age=age;
        }
    }
    const per = new Person(name,'孙悟空',age:18);
    console.log(per.getName()); 
    per._name='猪八戒';
    per._age=-38;
})