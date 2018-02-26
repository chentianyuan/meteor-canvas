// 画流星
// 每个流星都是一个对象，否则要重复执行drawMeteor才能生成多个流星
export default class drawMeteor{
    constructor(ctx,x,W,H){
        this.ctx = ctx
        this.x = x  
        this.y = 0 // 流星从顶部开始滑落
        this.h = H // 之后监听流星是否出界
        this.w = W
        // 流星以什么轨迹移动，在实例生成的时候就确定好了！，vy/vx = 1 ，斜率为1，冲啊
        this.vx = 4 + Math.random() * 2
        this.vy = this.vx
        // 流星长度也固定了
        this.len = Math.random() * 200 + 100
    }
    flow(){
        if(this.x - this.w > this.len || this.y - this.h > this.len){
            return false
        }else{
            return true
        }
    }
    draw(){
        let ctx = this.ctx
        // 流星移动，移动的速率也在实例创建好的时候由vx决定了
        this.x += this.vx
        this.y += this.vy
        ctx.beginPath()
        ctx.moveTo(this.x,this.y)
        // ▲x和▲y固定，起始点走多少，终点也就走多少，而this.len是初始的时候就有的一段长度，其实这个len是x，y轴的长度，真正线条的长度是根号2len
        ctx.arc(this.x + this.len , this.y + this.len, 1, - Math.PI/4 ,3*Math.PI/4,false)
        // ctx.lineTo(this.x + this.len - 3 , this.y + this.len - 3)
        ctx.strokeStyle = "rgba(255,255,255,1)"
        ctx.fillStyle = "rgba(255,255,255,1)"
        ctx.save()
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }      
}