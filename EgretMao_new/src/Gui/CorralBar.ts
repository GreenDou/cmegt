/**
 * Created by greendou on 15/9/12.
 */

class CorralBar extends egret.gui.SkinnableContainer {
    public constructor(){
        super();

        this.skinName = "skins.gui.CorralBar";
        this.id='CorralBar'

        var background: egret.gui.Rect = new egret.gui.Rect();
        background.id = 'background';

        var fullButton:egret.gui.ToggleButton = new egret.gui.ToggleButton();
        fullButton.skinName = "skins.simple.ToggleButtonSkin";

        var playButton:egret.gui.ToggleButton = new egret.gui.ToggleButton();
        playButton.id = 'playButton';

    }
    
    public childrenCreated() {
        
    }

    public partAdded(partName: string,instance: any): void {
        super.partAdded(partName,instance);
    }
}