/*
 * Created by greendou on 15/9/21.
 */
module guiSkins

{

    export class SpriteIconRendererSkin extends egret.gui.Skin

    {
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/

        public skinParts:Array<string> = ["contentGroup","labelDisplay","spriteImage"];

        /**对于SkinnableContainer来说，contentGroup是必须有的*/

        public contentGroup:egret.gui.Group;
        public labelDisplay:egret.gui.Label;
        public spriteImage:egret.gui.UIAsset;

        public constructor() {
            super();

        }

        public createChildren(): void {

            super.createChildren();

            //contentGroup必须有，否则你添加到SkinnableContainer的对象是显示不出来的

            this.contentGroup = new egret.gui.Group();

            this.addElement(this.contentGroup);

            this.spriteImage = new egret.gui.UIAsset();
            //this.spriteImage.source = this.hostComponent.source;
            this.spriteImage.width = 100;//这个相当于HTML中的百分比，设置100就是100%的意思
            this.spriteImage.height = 100;//宽和高都是100%，也就是充满整个空间咯(根据皮肤的尺寸)
            this.addElement(this.spriteImage);

            this.labelDisplay = new egret.gui.Label();
            this.labelDisplay.text = "角色";

            this.addElement(this.labelDisplay);
        }

    }

}