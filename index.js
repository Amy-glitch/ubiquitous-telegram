console.log('pof');

let canv = document.getElementById('can');
let ctx = canv.getContext('2d');

let pos = {x:0, y:0}
let W =screen.width/10;
let H =screen.height/10;
let world = {};
let xOff =0;
let yOff =0;
let L=document.body.clientWidth;
let size=0;
let amm = 50;
let off =0;
let cTop=0;
let cLeft=0;
let cx; let cy;
let timerr =null;

let ctr =0;
document.ontouchstart = function(e){
    e.preventDefault();
    idle = false;
     timerr=setInterval(function(){
     
        let dX = e.touches[0].clientX -window.innerWidth/2;
        let dY = e.touches[0].clientY  - window.innerHeight/2;
    
        cLeft-=20*Math.sign(dX)*Math.abs(dX)/100;
        cTop -=20*Math.sign(dY)*Math.abs(dY)/100;

        console.log(Math.atan2(dX,dY) * (180 / Math.PI)+180);


let A = Math.atan2(dX,dY) * (180 / Math.PI)+180;
        canv.style.top = cTop+'px';
        canv.style.left = cLeft+'px';  
        
        ctr+=1;

        if (A < 45){
            animateScript(0);
        } else
        if (A < 135){
            animateScript(1);
        } else
        if (A < 225){
            animateScript(2);
        } else
        if (A < 315){
            animateScript(3);
        } else
        {
            animateScript(4);
        }

    

    
            
    
        
        
  

     }, 100); // the above code is executed every 100 ms
     
}
document.ontouchend = function(){
    if (timerr) clearInterval(timerr);
    idle=true;
}

function fract(n)
{
    return n %1;
}


function draw()
{   
     canv.width= 10000;
     canv.height=10000;
     cLeft = document.body.clientWidth/2 - canv.width/2;
     cTop= document.body.clientHeight/2 - canv.height/2;


     canv.style.left = cLeft;
     canv.style.top =cTop;
     W =ctx.canvas.width/amm;
     H =ctx.canvas.height/amm;
     size = Math.max(W,H);
     let dispAmmW = Math.ceil(W*amm/size);
     let dispAmmH = Math.ceil(H*amm/size);
     ctx.clearRect(0, 0, canv.width, canv.height);
     
        for (let x = 0; x<dispAmmW; x++){
        for (let y = 0; y<dispAmmH; y++)
        {  
        let xOfff = Math.round(xOff);
        let yOfff = Math.round(yOff);

        if (!world[(x)+':'+(y)]){
            world[(x)+':'+(y)] = new Tile();
            world[(x)+':'+(y)].generate(x+xOfff,y);
        }
        ctx.fillStyle =world[(x)+':'+(y)].getCol();
        ctx.fillRect(x*size , y*size, size,size );
        }}

}
let cnt = 1;


function animateScript(n) {
    document.getElementById("image").style.backgroundPosition = 
    +  -384 * (cnt % 7)+ 'px '+ -384*n+'px';
    cnt += 1;
    }








draw(); 



let idle = true;
let ic =1;
setInterval(() => {

    if (idle == true)
    {
        document.getElementById("image").style.backgroundPosition = 
        +  -384 * ((ic )% 2) + 'px '+ -384*2+'px';
        ic += 1;
        
    }
    
}, 500);