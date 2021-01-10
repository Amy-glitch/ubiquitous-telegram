let canv = document.getElementById('can');
let ctx = canv.getContext('2d');
let world = {};
let size=0;
let amm = 50;
let cTop=0;
let cLeft=500;
let timer =null;
let ctr =0;

function fract(n)
{
    return n %1;
}


var img = new Image();
img.src = "nature.png";
img.onload = initDrawWorld;

canv.width= '10000';
canv.height='10000';

function initDrawWorld()
{   
     cLeft = window.innerWidth/2 - canv.width/2 ;
     cTop= window.innerHeight/2 - canv.height/2;
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
        if (!world[(x)+':'+(y)]){
            world[(x)+':'+(y)] = new Tile();
            world[(x)+':'+(y)].generate(x,y);
        }
        let h=tileref[  world[(x)+':'+(y)].id].x;
        let i =tileref[  world[(x)+':'+(y)].id].y;
         ctx.drawImage(img,h*32+1,i*32+1,30,30,x*size, y*size,size,size);
        }}
}

let idle = true;
let ic =1;
setInterval(() => {
    if (idle == true)
    {
        document.getElementById("image").style.backgroundPosition = 
        +  -192 * ((ic )% 2) + 'px '+ -192*2+'px';
        ic += 1;
        
    }
}, 500);

let cnt = 1;
function animateScript(n) 
{
document.getElementById("image").style.backgroundPosition =+  -192 * (cnt % 7)+ 'px '+ -192*n+'px';
cnt += 1;
}

