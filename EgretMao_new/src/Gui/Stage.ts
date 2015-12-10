/**
 * Created by greendou on 15/9/12.
 * 游戏主体
 */

class Stage extends egret.Sprite {
    private context;
    public spriteList:Sprite[];

    public constructor(context) {
        super();

        this.context = context;
        this.spriteList = [];
        this.context.spriteList = this.spriteList;

        this.width = 450;
        this.height = 450;

        var defaultSprite = new Sprite();
        this.addSprite(defaultSprite);

        var aduan = new Sprite();
        RES.getResAsync('MR_JS_001_png', function (data) {
            this.texture = data;
        },aduan.costume);
        aduan.costume.source = 'MR_JS_001_png';
        this.addSprite(aduan);
        aduan.posX = 20;
        aduan.name = '阿短';
    }

    public addSprite(aSprite:Sprite) :void{
        this.addChild(aSprite);
        this.spriteList.push(aSprite);
        aSprite.posX = 0;
        aSprite.posY = 0;

    }
}