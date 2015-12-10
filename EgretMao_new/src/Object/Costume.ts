/**
 * Created by greendou on 15/9/16.
 */
class Costume extends egret.Bitmap {

    public source:string;

    constructor(){
        super();
        this.source = 'default_costume_png';
        this.texture = RES.getRes(this.source);
    }

}