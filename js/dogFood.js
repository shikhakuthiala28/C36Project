class dogFood{

    constructor(){

        this.image=loadImage("Images/Milk.png");
        this.image1=loadImage("Images/happy dog.png");


    }

    writeStock(x){

        if(x===0){
          x=0;
          /*var greeting= createElement('h2');
          greeting.html("Food is finished.");
          greeting.position(500,600);*/
        }
        else{
          x=x-1;
        }
        database.ref('/').update({
          Food:x
        })
      
        
      }

    updateStock(x){

        if(x===20){
            x=20;
            /*var greeting1= createElement('h2');
            greeting1.html("You have enough food.");
            greeting1.position(500,600);*/
          }
          else{
            x=x+1;
          }
          database.ref('/').update({
            Food:x
          })
        
          


    }

    display(){

        var title= createElement('h1');
        title.html("Dog Feeding Game!!");
        title.position(450,100);

        var button= createButton("Feed The Dog");
        var button1= createButton('Add More Food');
                
        button.position(600,200);
        button1.position(705,200);

        button1.mousePressed(function(){

            dFood.updateStock(foodS);
        });

        button.mousePressed(function(){

            dFood.writeStock(foodS);
            
        });

        var x=80,y=100;
        imageMode(CENTER);

        if(foodS!=0){
            for(var i=0;i<foodS;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }

    }
}

