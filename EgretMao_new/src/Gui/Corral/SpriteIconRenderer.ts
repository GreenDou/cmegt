/*
 * Created by GreenDou on 15/9/19.
 */
class SpriteIconRenderer extends egret.gui.ItemRenderer {

    public spriteImage:egret.gui.UIAsset;
    public source:string;

    public constructor() {

        super();

        this.touchChildren = true;
        //this.source = this.data.costume.source;

        this.spriteImage = new egret.gui.UIAsset();



    }

    public dataChanged():void {

        this.labelDisplay.text = this.data.name;
        this.labelDisplay.name = this.data.name;
        this.name = this.data.name;
        this.source = this.data.costume.source;
        this.spriteImage.source = this.data.costume.source;
        this.spriteImage.name = this.data.name;
    }

}
