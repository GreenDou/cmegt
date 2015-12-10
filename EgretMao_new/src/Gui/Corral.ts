/*
 * Created by greendou on 15/9/12.
 */

class Corral extends egret.gui.SkinnableContainer{

    private spriteArray:egret.gui.ArrayCollection;

    constructor(context){
        super();

        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.gui.Corral";
        this.id = 'Corral';
        this.spriteArray = new egret.gui.ArrayCollection(context.stage.spriteList);

        var background: egret.gui.Rect = new egret.gui.Rect();
        background.id = 'background';

        var spriteCorral:egret.gui.DataGroup = new egret.gui.DataGroup();
        spriteCorral.dataProvider = this.spriteArray;
        spriteCorral.percentHeight = 100;
        spriteCorral.percentWidth = 100;
        this.addElement(spriteCorral);
        spriteCorral.itemRenderer = new egret.gui.ClassFactory(SpriteIconRenderer);
        spriteCorral.itemRendererSkinName = "guiSkins.SpriteIconRendererSkin";

    }

    public childrenCreated() {

    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}

