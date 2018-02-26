// 入口文件
import drawMoon from './utils/moon'
import drawMeteor from './utils/meteor'
import drawStar from './utils/star'

let H = window.innerHeight
let W = window.innerWidth
let meteors = [] // 储存流星对象
let stars = [] // 存储星星对象
let blur = 30, less = true // 发光动效果


let canvas = document.getElementById("canvas")
let context = canvas.getContext('2d')

window.onload = function(){
    // 生成流星的函数递归调用
    generateMeteor()
    // 生成星星
    generateStar() 
    
    initCanvas(canvas,context)
}

// 启动动画
function initCanvas(){
    setCanvas(canvas,context)
    drawMoon(context,W,H)
    // console.log(meteors.length)
    // 使用流星对象的画流星方法
    // 第三个参数是自身数组
    meteors.forEach((meteor,index,arr)=>{
        if(meteor.flow()){
            meteor.draw()
        }else{
            // 若出界，从流星数组中删除该流星
            arr.splice(index,1)
        }
    })
   
    // 闪烁判断
    if(less){
        if(blur <= 0){
            less = false
            // stars.splice(0,stars.length)
            // generateStar()
        }else{
            blur -= .25
        }
    }else{
        if(blur >= 45){
            less = true
            // stars.splice(0,stars.length)
            // generateStar()
        }else{
            blur += .25
        }
    }

    stars.forEach((star,index,arr)=>{
        star.draw(blur)
    })
    // 每次所有的东西都要重画
    requestAnimationFrame(initCanvas)
}

function generateStar(){
    for(var i = 20 ; i > 0 ; i--){
        stars.push(new drawStar(context,W))
    }
}


function generateMeteor(){
    let x = Math.random() * W - 600 
    meteors.push(new drawMeteor(context,x,W,H))

    //每隔随机时间,生成新流星,在相同函数内设置定时器出发该函数,形成递归,永不停歇
    setTimeout(() => {
        generateMeteor()
    }, Math.random() * 2000)
}

// 初始化画布
function setCanvas(canvas,ctx){
    canvas.width = W
    canvas.height = H
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillRect(0,0,canvas.width,canvas.height)
}


// 检查浏览器是否支持这个API。如果不支持，则自行模拟部署该方法。
 window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          // 模拟，每秒执行60次
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();