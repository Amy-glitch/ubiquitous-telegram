class Entity
{

    constructor()
    {
        this.img = new Image();
        this.img.src ='pumpkin.png';
        this.img.className ='entity';
        this.img.width=200;
        this.img.height=200;
        this.thing = 'pumpkin';
        this.img.onclick = this.click.bind(this);
        this.X=0;
        this.Y=0;
        document.body.appendChild(this.img);
        
    }


    click()
    {
        alert('this is a ' + this.thing);   
        
    }





    setOffset(cLeft,cTop)
    {
    this.img.style.top =(cTop+5000 -this.img.height/2+this.Y)+'px' ;
    this.img.style.left =(cLeft+5000-this.img.width/2+this.X)+'px';
    
    }

    checkCollisions(x,y)
    {
       console.log(x +' '+y+' '+'pump'+this.X +' '+this.Y);

        if ( (x   > this.X - this.img.width/2)  && (x < this.X + this.img.width/2 ) )
        if ((y   > this.Y - this.img.width/2)    && (y < this.Y + this.img.width/2 )  )
        {{
          return true;
        }} else return false;


    }


}