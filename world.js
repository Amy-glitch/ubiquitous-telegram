class World
{

constructor()
{
this.entities = {};
this.entities['1'] = new Entity('house',0,-300);
this.entities['6'] = new Entity('horse',400,-190);
this.entities['2'] = new Entity('bigpumpkin',0,800);
this.entities['3'] = new Entity('fence',310,-80);
this.entities['4'] = new Entity('fence',600,-80);




}


animate(c)
{
    Object.keys(this.entities).forEach(element => {
        this.entities[element].idle(c);
    });   
}

setOffset(cLeft,cTop)
{

Object.keys(this.entities).forEach(element => {
    this.entities[element].setOffset(cLeft,cTop);
});
    
}

checkCol(x,y)
{
let o = false;
    Object.keys(this.entities).forEach(element => {
       if (this.entities[element].checkCollisions(-x,-y)== true) {o = true};
    });
return o;
}





}