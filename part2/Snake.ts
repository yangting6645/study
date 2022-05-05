class Sanke{
    //表示蛇头的元素
    head:HTMLElement;
    //蛇的身体（包括蛇头）
    bodies:HTMLCollection;
    //获取蛇的容器
    element:HTMLElement;

    constructor(){
        this.element=document.getElementById(elementld:'snake')!
        this.head=document.querySelector(selectors:'#snake>div')as HTMLElement;
        this.bodies=document.getElementById(elementld:'snake')!.getElementsByTagName(qualifiedName:'div');
    }
    //获取蛇的坐标（蛇头坐标）
    get X(){
        return this.head.offsetLeft;
    }
    //获取蛇的Y轴坐标
    get Y(){
        return this.head.offsetTop;
    }
    set X(value:number){
        this.head.style.left=value+'px';
    }
    set Y(value:number){
        this.head.style.left=value+'px';
    }
    //蛇增加身体的方法
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML(where:"beforeend",html:"<div></div>")
    }

}