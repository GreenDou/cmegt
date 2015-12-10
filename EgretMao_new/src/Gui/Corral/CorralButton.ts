/**
 * Created by greendou on 15/9/16.
 */
module GuiComp
{
    export class CorralButton extends egret.gui.ToggleButton
    {
        public constructor() {
            super();
            this.skinName = "gui.comp.CorralButtonSkin";

        }


        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);

        }
    }
}