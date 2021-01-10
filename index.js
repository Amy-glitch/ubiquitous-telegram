
document.ontouchstart = function(e)
{
e.preventDefault();
idle = false;
clearInterval(timer);
timer=setInterval(function(){
     
let dX = e.touches[0].clientX -window.innerWidth/2;
let dY = e.touches[0].clientY  - window.innerHeight/2;
    
cLeft-=20*Math.sign(dX)*Math.abs(dX)/100;
cTop -=20*Math.sign(dY)*Math.abs(dY)/100;
canv.style.top = cTop+'px';
canv.style.left = cLeft+'px';     

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
     }, 100); // the above code is executed every 100 ms
    
}
document.ontouchend = function(){
    if (timer) clearInterval(timer);
    idle=true;

}

document.ontouchmove = function(e){
e.preventDefault();


}