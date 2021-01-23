class World
{

constructor()
{
this.entities = {};

this.entities['7']= new Entity('shop',-3000,400);
this.entities['2'] = new Entity('bigpumpkin',2800,-800);
this.entities['3'] = new Entity('fence',2600,-200);
this.entities['13'] = new Entity('vfence',2100,-700);
this.entities['14'] = new Entity('lonetree',1800,-700);
this.entities['8'] = new Entity('tree',0,-1500);
this.entities['9'] = new Entity('tree',0,1500);
this.entities['10'] = new Entity('vtree',4500,0);
this.entities['11'] = new Entity('vtree',-4500,0);
this.entities['5'] = new Entity('pbuyer',-3000,-400);

this.entities['1'] = new Entity('house',4000,-1200);
this.entities['6'] = new Entity('horse',4200,-900);



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