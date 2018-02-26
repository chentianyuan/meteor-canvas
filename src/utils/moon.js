// 画月亮
export default function drawMoon(ctx,W,H){
    ctx.beginPath()
    ctx.arc(W-300,200,800,0,2*Math.PI,false)
    // ctx.shadowOffsetX = 0
    // ctx.shadowOffsetY = 0
    // ctx.shadowBlur = 15
    // ctx.shadowColor = "#fff"
    let gradient = ctx.createRadialGradient(
        W-300,200, 80, W-300,200, 800)
    // 径向渐变 createRadialGradient(x1,y1,r1,x2,y2,r2)
    // 线性渐变 createLinearGradient(x1,y1,x2,y2)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.01, 'rgba(70,70,80,1)')
    gradient.addColorStop(0.2, 'rgba(40,40,50,1)')
    gradient.addColorStop(0.4, 'rgba(20,20,30,1)')
    gradient.addColorStop(1, 'rgba(0,0,10,1)')
    ctx.save()
    ctx.fillStyle = gradient
    ctx.fill()
    ctx.restore()
}