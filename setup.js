let world = new World();
let canv = document.getElementById('can');
//let ctx = canv.getContext('2d');
//let world = {};
let size=0;
let amm = 50;
let cTop=0;
let cLeft=500;
let timer =null;
let ctr =0;
let lbl = document.getElementById('lbl');

function fract(n)
{
    return n %1;
}


var img = new Image();
img.src = "nature.png";



img.id ='char';
//img.onload = initDrawWorld;

canv.width= '10000';
canv.height='10000';
cLeft = window.innerWidth/2 - canv.width/2 ;
cTop= window.innerHeight/2 - canv.height/2;
world.setOffset(cLeft,cTop);
let x =Math.round(cLeft -(window.innerWidth/2 - canv.width/2));
let y = Math.round(cTop -(window.innerHeight/2 - canv.height/2));
world.checkCol(x,y);
canv.style.top = cTop+'px';
canv.style.left = cLeft+'px';     



let idle = true;
let ic =1;
setInterval(() => {
    if (idle == true)
    {
        let c = Math.floor(ic);
        document.getElementById("image").style.backgroundPosition = 
        +  -192 * ((c )% 2) + 'px '+ -192*2+'px';
        ic += 0.8;
        
    }
}, 500);

let cnt = 1;
function animateScript(n) 
{
let c = Math.floor(cnt);    
document.getElementById("image").style.backgroundPosition =+  -192 * (c % 6)+ 'px '+ -192*n+'px';
cnt += 0.1;
}

// let x =Math.round(cLeft -(window.innerWidth/2 - canv.width/2));
//     let y = Math.round(cTop -(window.innerHeight/2 - canv.height/2));
     lbl.innerHTML ='x: '+-x +' y:'+-y;




// let pmp = new Image();
// pmp.src ='pumpkin.png';
// pmp.className ='entity';
// pmp.width=500;
// pmp.height=500;
// pmp.onclick = function(){alert('this is a pumpkin');}
// document.body.appendChild(pmp);