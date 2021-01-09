class Tile
{

constructor()
{
  this.id = 'grass'; 
}

generate(x,y)
{
let ns = noise.simplex2(x/10,y/10);
if (ns < 0.3) 
{this.id = 'grass'} else {this.id ='water'}
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