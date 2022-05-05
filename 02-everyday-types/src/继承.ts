(function(){
    //定义一个表示狗的类
    class Dog{
        name: string;
        age: number;

        constructor(name:string,age:number){
            this.name = name;
            this.age = age;

        }
        sayHello(){
            console.log('汪汪汪！');
        }

    }
    //定义一个表示猫的类
    class Cat{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name=name;
            this.age=age;
        }
        sayHello(){
            console.log('喵喵喵！');
        }
    }
    const dog = new Dog(name,'旺财',age,5);
    const cat = new Cat(name,'咪咪', age,3);
    console.log(dog);
    dog.sayHello();
})();