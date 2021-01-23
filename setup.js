let world = new World();
let canv = document.getElementById('can');
let size=0;
let amm = 50;
let cTop=0;
let cLeft=500;
let timer =null;
let ctr =0;
let lbl = document.getElementById('lbl');
let money =100;
let lblMoney = document.getElementById('money');
lblMoney.innerHTML = '$'+money ;
lblMoney.style.left = (window.innerWidth-150)+'px';
lblMoney.id = 'lbl';
let elInventory = document.getElementById('inventory');

 let selSlot = 3;
 let Inventory = {
     0: 'pumpkinseeds',
     1: 'null',
     2: 'null',
     3: 'null',
     4: 'null'
 };

 function growBig()
 {
    world.entities['2'].say();
     if (Inventory[selSlot+'']=='compost'){
     world.entities['2'].stage += 500;
     world.entities['2'].dispPump();
     Inventory[selSlot+''] ='null';
    
     dispInventory();
     lbl.innerHTML = 'Size: '+world.entities['2'].stage +'/1000';

        if (world.entities['2'].stage >= 1000)
        {
            document.getElementById('win').style.visibility ='visible';
        }

    }
   

 }

function redo()
{
    window.location.reload(false); 
}

 document.getElementById('can').onclick = function(e) 
 {
 let thing = Inventory[selSlot+''];

 switch (thing)
 {
    case 'pumpkinseeds':
        let x =-Math.round(cLeft -(window.innerWidth/2 - canv.width/2));
        let y = -Math.round(cTop -(window.innerHeight/2 - canv.height/2));
       placePumpkin( x + (-window.innerWidth/2) + e.clientX,y + (-window.innerHeight/2) + e.clientY )  ;
       console.log(e);
       Inventory[selSlot] ='null';
       dispInventory();
    break;
 }

 }
let scnt =0;
let is =0;
 function placeShr(x,y)
 {
     if (scnt < 25){
    world.entities['s'+is] = new Entity('shr',x,y);
    world.setOffset(cLeft, cTop);
    is+=1;
    scnt++;}
 }

 let iy =0;
 function placeYell(x,y)
 {
     if (scnt < 25){
    world.entities['y'+iy] = new Entity('yell',x,y);
    world.setOffset(cLeft, cTop);
    iy+=1;
    scnt++;}
 }

 let ip =0;
 function placePumpkin(x,y)
 {
   world.entities['p'+ip] = new Entity('pumpkin',x,y);
   world.setOffset(cLeft, cTop);
   ip+=1;
 }


 elInventory.onclick = function(e) { 
     selSlot = parseInt(e.target.id[4]);
     dispInventory();
    }




function dispInventory()
{
   console.log('dddd');
    Object.keys(Inventory).forEach(
        (i) => 
        {
         document.getElementById('slot'+i).style.backgroundImage =  'url('+Inventory[i]+'.png)'  ;
        
         if (parseInt(i,10) == selSlot)
         {

            document.getElementById('slot'+i).classList.add('selected');
         } else {document.getElementById('slot'+i).classList.remove('selected');}
         
            
        }

    


    );
}

dispInventory();

function AddInv(e)
{
    //alert(e);
    let fd = false;
    Object.keys(Inventory).forEach((key)=>{
        if(  Inventory[key] =='null')
      {
          if (fd == false){
        Inventory[key] = e.thing;
        fd = true;}
      }

    });

    dispInventory();
    if (fd == false){

        return false;
    } else { return true;}

    
}

function buySeed()
{
    if (money >= 10)
    {
        let fd = false;
        Object.keys(Inventory).forEach((key)=>{
            if(  Inventory[key] =='null')
          {
              if (fd == false){
            Inventory[key] = 'pumpkinseeds';
            fd = true;}
          }
    
        });

        if (fd == false) {alert('Inventory full!')} else { dispInventory(); money-= 10; lblMoney.innerHTML = '$'+money ; }

    } else {alert('not enough money!');}
}

function buyCom()
{
    if (money >= 50)
    {
        let fd = false;
        Object.keys(Inventory).forEach((key)=>{
            if(  Inventory[key] =='null')
          {
              if (fd == false){
            Inventory[key] = 'compost';
            fd = true;}
          }
    
        });

        if (fd == false) {alert('Inventory full!')} else { dispInventory(); money-= 50; lblMoney.innerHTML = '$'+money ; }

    } else {alert('not enough money!');}
}

function exitShop()
{
    document.getElementById('shop').style.visibility = 'hidden';
}


function Sell()
{
    
    if (Inventory[selSlot] == 'pumpkin')
    {
        Inventory[selSlot] = 'null';
        dispInventory();
        money+=50;
        lblMoney.innerHTML = '$'+money ;
    }
}

function Shop()
{
    document.getElementById('shop').style.visibility = 'visible';
}

function fract(n)
{
    return n %1;
}

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

    let c = Math.floor(ic);

    world.animate(c );
    if (idle == true)
    {
       
        document.getElementById("image").style.backgroundPosition = 
        +  -192 * ((c )% 2) + 'px '+ -192*2+'px';
     
        
    }


    placeShr(Math.random()*2000-1000,Math.random()*1500-500);
    placeYell(Math.random()*2000-2000,Math.random()*1500-500);

    ic += 0.8;
}, 500);

let cnt = 1;
function animateScript(n) 
{
let c = Math.floor(cnt);    
document.getElementById("image").style.backgroundPosition =+  -192 * (c % 6)+ 'px '+ -192*n+'px';
cnt += 0.1;
}

     lbl.innerHTML ='x: '+-x +' y:'+-y;



