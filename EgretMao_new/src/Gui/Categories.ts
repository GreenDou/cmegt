/**
 * Created by greendou on 15/9/12.
 */

class Categories extends egret.gui.SkinnableContainer{

    public constructor(){
        super();

        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.gui.Categories";
        var myself = this;
        var categories = RES.getRes("categories").categories;


        function addCategoryButton(cat:string){
            var button:egret.gui.ToggleButton = new egret.gui.ToggleButton();
            button.label = cat;
            button.width = 145;
            button.height = 35;
            myself.addElement(button);
        }

        categories.forEach(function (cat:string) {
            if (!Common.Array.contains(["链表","其他"],cat)) {
                addCategoryButton(cat);
            }
        });


    }



    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}