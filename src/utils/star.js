export default class drawStar{
    constructor(ctx,W,blur){
        this.ctx = ctx
        this.x = Math.random() * W
        this.y = Math.random() * 600
        this.radius = Math.random()*4
    }
    draw(blur){
        let ctx = this.ctx
        ctx.beginPath()    
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false)
        ctx.fillStyle = `rgba(255,255,255,${blur/45})`
        ctx.shadowColor = "rgba(255,255,255,1)"
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.shadowBlur = blur
        ctx.fill()
        ctx.closePath()        
    }
}