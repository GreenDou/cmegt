/**
 * Created by greendou on 15/9/16.
 */
module GuiComp
{
    export class SpriteIcon extends egret.gui.ToggleButton
    {
        private object:Sprite;

        public constructor(sprite) {
            super();
            this.skinName = "gui.comp.SpriteIconSkin";
            this.object = sprite || new Sprite();
            this.icon = sprite.texture;

        }


        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);

        }
    }
}