/**
 * Created by greendou on 15/9/16.
 */
class Palette extends egret.gui.Scroller{

    private contents:egret.gui.Group = new egret.gui.Group();


    public constructor(){
        super();

        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        //this.skinName = "skins.gui.Palette";
        var myself = this;

        this.contents.width = 290;
        this.contents.height =700;
        this.viewport = this.contents;

        var background: egret.gui.Rect = new egret.gui.Rect();
        background.fillColor = 0xC9C9C9;
        background.percentHeight = 100;
        background.percentWidth = 100;
        this.contents.addElement(background);


    }

    public childrenCreated() {
        var myself = this;
        myself.y += myself.parent.getChildAt(4).height;
        myself.height = myself.parent.height - myself.y - 5;
    }

    public partAdded(partName: string,instance: any): void {

        super.partAdded(partName,instance);

    }
}