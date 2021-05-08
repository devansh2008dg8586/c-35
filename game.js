class Game{
constructor(){
this.button= createButton("AddFood")
}
display(){
    this.button.position(380,30,40,40)
this.button.mousePressed(()=>{
    food+=1
    food.index=food
    food.update();
    food.updateCount(food)  
})















}
}