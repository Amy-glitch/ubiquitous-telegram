
document.ontouchstart = function(e)
{
e.preventDefault();
idle = false;
clearInterval(timer);
timer=setInterval(function(){

 console.log('start');
    x =Math.round(cLeft -(window.innerWidth/2 - canv.width/2));
     y = Math.round(cTop -(window.innerHeight/2 - canv.height/2));
     lbl.innerHTML = 'Size: '+world.entities['2'].stage +'/1000';
     
let dX = e.touches[0].clientX -window.innerWidth/2;
let dY = e.touches[0].clientY  - window.innerHeight/2;
    
cLeft-=5*Math.sign(dX)*Math.abs(dX)/100;
cTop -=5*Math.sign(dY)*Math.abs(dY)/100;
canv.style.top = cTop+'px';
canv.style.left = cLeft+'px';     
world.setOffset(cLeft,cTop);

x =Math.round(cLeft -(window.innerWidth/2 - canv.width/2));
y = Math.round(cTop -(window.innerHeight/2 - canv.height/2));
if (world.checkCol(x,y) == true)
{
    clearInterval(timer);
    cLeft+=5*Math.sign(dX)*Math.abs(dX)/100;
    cTop +=5*Math.sign(dY)*Math.abs(dY)/100;
    canv.style.top = cTop+'px';
canv.style.left = cLeft+'px';     
world.setOffset(cLeft,cTop);
    console.log('hit');

}

// pmp.style.top = (cTop+5000 - pmp.height/2)+'px' ;
// pmp.style.left = (cLeft+5000-pmp.width/2)+'px';     
let A = Math.atan2(dX,dY) * (180 / Math.PI)+180;
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
     }, 10); // the above code is executed every 100 ms
   

}
document.ontouchend = function(){
    if (timer) clearInterval(timer);
    idle=true;

}

document.ontouchmove = function(e){
e.preventDefault();



}

setInterval(function(){

Object.keys(world.entities).forEach((et)=>{

    //e.grow(); 
    world.entities[et].grow();


});


},1000);