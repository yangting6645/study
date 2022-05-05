//引入样式
import'./style/index.less';

//定义食物类Food
class Food{
    //定义一个属性表示食物所对应的元素1
    element:HTMLElement;
    constructor(){
        //获取页面中的food 元素并将其赋值给element
        this.element=document.getElementById(this.elementld:)
    }
    //定义一个获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    //定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物的位置
    change(){
        //生成一个随机的位置
        //食物的最小位置是0 最大290
        //蛇移动一次就是一格，一格就是10，所有就要去食物是被整十的
       let top= Math.round(x.Math.random()*29)*10;
       let top= Math.round(x.Math.random()*29)*10;
        this.element.style.left=left+'px';
        this.element.style.top=left+'px';
    }
}
//测试代码
const food = new Food();
console.log(food.X,food.Y);
food.change();
console.log(food.X,food.Y);


//定义表示积分牌的类
class ScorePanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    //

    constructor(){
        this.scoreEle=document,getElementById(elementld:'scoreEle');
        this.levelEle=document,getElementById(elementld:'levelEle');
    }
    //设置一个加分的方法
    addScore(){
        //使分数自增
        this.scoreEle.innerHTML=++this.score+'';
    }
    //提升等级的方法
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+'';
            if()
        }
    }
}
const scorePanel=new ScorePanel();
for(let i=0;i<100;i++)
scorePanel.addScore();
scorePanel.addScore();
