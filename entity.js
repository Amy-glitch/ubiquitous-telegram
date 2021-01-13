class Entity
{

    constructor(thing,x,y)
    {

        this.thing = thing;
        this.X=x;
        this.Y=y;
        this.lbl = document.createElement('label'); 
        this.lbl.className ='speech';
        this.lbl.addEventListener('animationend', this.resetAnimation.bind(this)) ;
        document.body.appendChild(this.lbl);
        this.sentence = this.thing;
        this.div = document.createElement('div');
        this.div.style.backgroundImage = 'url('+this.thing+'.png)';
        this.div.style.backgroundSize ='contain';
        this.div.className ='entity';
        this.div.style.width='200px';
        this.div.style.height='200px';
        this.charSay = false;
        
        
        document.body.appendChild(this.div);


        switch(this.thing)
        {
            case 'house':
                this.div.style.width ='500px';
                this.div.style.height ='500px';
            break;

            case 'fence':
                this.div.style.width =128*2+'px';
                this.div.style.height =64*2+'px';
            break;

            case 'bigpumpkin':
                this.div.style.width ='200px';
                this.div.style.height ='200px';
                this.div.onclick = this.charsay.bind(this);
                this.sentence = 'This pumpkin must grow much bigger to win the annual pumpkin growing contest...';
            break;

            case 'hay':
                this.div.style.zIndex = '20';
                this.div.style.width ='400px';
                this.div.style.height ='400px';
            break;


            case 'horse':
                this.div.style.backgroundSize = (192*3)+'px +'+(256*3)+'px';
                this.aPixsize = 64;
                this.c =3;
                this.r =3;
                this.div.style.width =this.aPixsize*3+'px';
                this.div.style.height =this.aPixsize*3+'px';
                this.div.style.backgroundPosition = -1*this.aPixsize*this.c +'px '+-1*this.aPixsize*this.r+'px';
                this.sentence ='My name is Gretel and I sometimes teleport places.';
                this.div.onclick = this.say.bind(this);
            break;

        }



        
    }

    resetAnimation()
    {
        this.lbl.classList.remove('speechan')
    }

    idle(c)
    {
    this.div.style.backgroundPosition = -(c%3)*this.aPixsize*this.c +'px '+-1*this.aPixsize*this.r+'px';
    }

    say()
    {
    
    this.lbl.innerHTML=this.sentence;
    this.lbl.style.top = parseInt(this.div.style.top,10)+'px';
    this.lbl.style.left = parseInt(this.div.style.left,10)+'px';
    this.lbl.classList.add('speechan');
    }

    charsay()
    {
    this.charSay = true;
    this.lbl.innerHTML=this.sentence;
    this.lbl.style.top = (window.innerHeight/2   - 10  )+'px';
    this.lbl.style.left = (window.innerWidth/2 + 50) +'px';
    this.lbl.classList.add('speechan');
    }

 





    setOffset(cLeft,cTop)
    {
       
    this.div.style.top =(cTop+5000 -parseInt(this.div.style.height,10)/2+this.Y)+'px' ;
    this.div.style.left =(cLeft+5000-parseInt(this.div.style.width,10)/2+this.X)+'px';

    if (this.charSay == false)
{
    this.lbl.style.top =(cTop+5000 -parseInt(this.div.style.height,10)/2+this.Y)+'px' ;
    this.lbl.style.left =(cLeft+5000-parseInt(this.div.style.width,10)/2+this.X)+'px';}
    
    }

    checkCollisions(x,y)
    {
       console.log(x +' '+y+' '+'pump'+this.X +' '+this.Y);

        if ( (x   > this.X - parseInt(this.div.style.width,10)/2)  && (x < this.X + parseInt(this.div.style.width,10)/2 ) )
        if ((y   > this.Y - parseInt(this.div.style.width,10)/2)    && (y < this.Y + parseInt(this.div.style.width,10)/2 )  )
        {{
          return true;
        }} else return false;


    }


}