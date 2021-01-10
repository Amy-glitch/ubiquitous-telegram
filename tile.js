class Tile
{

constructor()
{
  this.id = 'grass'; 
  this.seed = 3400;
}

generate(x,y)
{
this.id = this.getType(x,y);
this.checkEdges(x,y);
console.log(this.id);
}

getType(x,y)
{
    let t;
    let fact =30;
    let seed = this.seed;
    let ns = noise.simplex2(x/fact+seed,y/fact+seed);
    let cutoff=-0.3;
    
    if (ns > cutoff) 
    {t = 'grass';} else {t ='water';

    if (noise.simplex2((x)/fact+seed,(y-1)/fact+seed) > cutoff  && noise.simplex2(x/fact+seed,(y+1)/fact+seed)>cutoff)
    {
        t='grass';
        console.log('l');
    }

    if (noise.simplex2((x-1)/fact+seed,(y)/fact+seed) > cutoff  && noise.simplex2((x+1)/fact+seed,(y)/fact+seed)>cutoff)
    {
        t='grass';
        console.log('l');
    }
}
   
  



    return t;
}



checkEdges(x,y)
{
    if (this.id == 'water'){ 
    let k = this.id;
        if (this.getType(x+1,y) =='grass') { k +='1'; }
        if (this.getType(x-1,y) =='grass') { k +='2';}
        if (this.getType(x,y+1) =='grass') { k +='3';}
        if (this.getType(x,y-1) =='grass') { k +='4';}

        if (k == this.id){
        if (this.getType(x-1,y+1) =='grass'   ) { k ='water5';}
        if (this.getType(x+1,y-1) =='grass'   ) { k ='water6';}
        if (this.getType(x+1,y+1) =='grass'   ) { k ='water7';}
        if (this.getType(x-1,y-1) =='grass'   ) { k ='water8';}
        }
        // if (this.getType(x+1,y+1) =='grass') { k +='6';}
   
    this.id = k;


    }

1
}





getCol()
{
    switch (this.id)
    {
        case 'grass':
            return 'rgb(0,250,0)';
            break;
        
        case 'water':
            return 'rgb(20,30,250)';
            break;

    }

}




}