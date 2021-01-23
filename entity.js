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
        this.div.style.width='60px';
        this.div.style.height='60px';
        
        this.charSay = false;
        this.stage =30;
        this.active = true;
        
        
        document.body.appendChild(this.div);


        switch(this.thing)
        {
            case 'pumpkin':
                this.sentence='This pumpkin is not ready to harvest '+this.stage+'/100';
                this.div.onclick = this.pumpkin.bind(this);
            break;

            case 'house':
                this.div.style.width ='800px';
                this.div.style.height ='800px';
                this.sentence='This is my home.';
                this.div.onclick = this.say.bind(this);
            break;

            case 'fence':
                this.div.style.width =128*2*4+'px';
                this.div.style.height =64*2+'px';
                this.div.style.backgroundRepeat ='repeat';
            break;

            case 'vfence':
                this.div.style.width =64*2+'px'
                this.div.style.height =(128*2*4+200)+'px';
                this.div.style.backgroundRepeat ='repeat';
            break;

            case 'lonetree':
                this.div.style.width =600+'px';    

                this.div.style.height =600+'px';    

            break;

            case 'shr':
                this.div.style.width =100+'px'
                this.div.style.height =100+'px';
               
            break;

            case 'yell':
                this.div.style.width =100+'px'
                this.div.style.height =100+'px';
               
            break;

            case 'tree':
                 this.div.style.width =9000+'px';
              this.div.style.backgroundRepeat ='repeat';
                 this.div.style.height =64*2*3+'px';
                this.div.style.backgroundImage = 'url('+this.thing+'.png)';
               
               
            break;

            case 'vtree':
                 this.div.style.width =64*2*3+'px';
              this.div.style.backgroundRepeat ='repeat';
                 this.div.style.height =  5000 +'px';
                this.div.style.backgroundImage = 'url('+this.thing+'.png)';
               
               
            break;

            case 'bigpumpkin':
                this.div.style.width ='200px';
                this.div.style.height ='200px';
                this.stage = 200;
                this.dispPump();
                this.div.onclick = growBig.bind(this);
                this.sentence = 'This pumpkin must grow much bigger to win the annual pumpkin growing contest...';
            break;

            case 'hay':
                this.div.style.zIndex = '20';
                this.div.style.width ='400px';
                this.div.style.height ='400px';
            break;

            case 'pbuyer':
                this.div.style.backgroundSize = (832*3)+'px +'+(1344*3)+'px';
                this.c =2;
                this.r =10;
                this.aPixsize = 64;
                this.div.style.width =this.aPixsize*3+'px';
                this.div.style.height =this.aPixsize*3+'px';
                this.div.style.backgroundPosition = -1*this.aPixsize*this.c *3+'px '+-1*this.aPixsize*this.r*3+'px';
                this.sentence ='My name is Bloom and I sell soil and plant nutriets';
                this.div.onclick = Sell.bind(this);
            break;

            case 'shop':
                this.div.style.backgroundSize = (832*3)+'px +'+(1344*3)+'px';
                this.c =2;
                this.r =10;
                this.aPixsize = 64;
                this.div.style.width =this.aPixsize*3+'px';
                this.div.style.height =this.aPixsize*3+'px';
                this.div.style.backgroundPosition = -1*this.aPixsize*this.c *3+'px '+-1*this.aPixsize*this.r*3+'px';
                this.sentence ='My name is Bloom and I sell soil and plant nutriets';
                this.div.onclick = Shop.bind(this);
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


   


    back()
    {
        document.body.append(this.div);
        document.body.append(this.lbl);
            this.active = true;
            this.sentence='Inventory full!';
            this.say();
    }

    dispPump()
    {
    this.div.style.width=1000 * this.stage/1000+'px';
    this.div.style.height=1000 * this.stage/1000+'px';
    }

    pumpkin()
    {
        if (this.stage==100)
        {
            this.sentence='Add to inventory';
            this.say();  
            this.div.remove();
            this.lbl.remove();
            this.active = false;
        
            let s =AddInv(this);
           
            if (s == false)
            {
               
                this.back();
            }
  


        }
        else{
        this.sentence='This pumpkin is not ready to harvest '+this.stage+'/100';
        this.say();}
    }


    grow()
    {

    if (this.thing =='pumpkin'){
    this.stage += 10;
    this.stage = Math.min(Math.max(parseInt(this.stage), 1), 100);
    this.div.style.width=200 * this.stage/100+'px';
    this.div.style.height=200 * this.stage/100+'px';
    }
    }

    resetAnimation()
    {
        this.lbl.classList.remove('speechan')
    }

    idle(c)
    {
        this.div.style.backgroundPosition = -1*this.aPixsize*(c%8) *3+'px '+-1*this.aPixsize*this.r*3+'px';
    }

    say()
    {
    
    this.lbl.innerHTML=this.sentence;
    this.lbl.style.top = (parseInt(this.div.style.top,10)-50)+'px';
    this.lbl.style.left = (parseInt(this.div.style.left,10)+parseInt(this.div.style.width,10))+'px';
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
    this.lbl.style.top = (parseInt(this.div.style.top,10)-50)+'px';
    this.lbl.style.left = (parseInt(this.div.style.left,10)+parseInt(this.div.style.width,10))+'px';}
    
    }

    checkCollisions(x,y)
    {
      if (this.active == true){
          let xx = this.X;
          let yy =this.Y;
        if ( (x   > xx - parseInt(this.div.style.width,10)/2)  && (x < xx + parseInt(this.div.style.width,10)/2 ) ){
        if ((y   > yy - parseInt(this.div.style.height,10)/2)    && (y < yy + parseInt(this.div.style.height,10)/2 )  )
        {
          return true;
        }} else return false;
    }

    }


}