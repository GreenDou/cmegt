/**
 * Created by greendou on 15/9/16.
 */
class Sprite extends egret.Sprite{

    public costume:Costume;

    constructor(){
        super();

        this.costume = new Costume();
        this.addChild(this.costume);
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.name = '编程猫';
    }

    public get posX():number {
        return this.x - this.parent.width * 0.5;
    }
    public set posX(value:number){
        this.x = value + this.parent.width * 0.5;
    }
    public get posY():number {
        return this.y - this.parent.height * 0.5;
    }
    public set posY(value:number){
        this.y = value + this.parent.height * 0.5;
    }

}