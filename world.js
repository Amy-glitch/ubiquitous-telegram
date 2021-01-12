class World
{

constructor()
{
this.entities = {};
this.entities['0'] = new Entity();
this.entities['0'].X =-300;
this.entities['0'].Y =-300;

this.entities['1'] = new Entity();
this.entities['1'].X =500;
this.entities['1'].Y =500;
this.entities['1'].thing = 'house';
this.entities['1'].img.src ='house.png';
this.entities['1'].img.width =500;
this.entities['1'].img.height =500;

this.entities['2'] = new Entity();
this.entities['2'].X =-300;
this.entities['2'].Y =300;

this.entities['3'] = new Entity();
this.entities['3'].X =-300;
this.entities['3'].Y =300;

this.entities['4'] = new Entity();
this.entities['4'].X =-600;
this.entities['4'].Y =300;

this.entities['5'] = new Entity();
this.entities['5'].X =-300;
this.entities['5'].Y =700;

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