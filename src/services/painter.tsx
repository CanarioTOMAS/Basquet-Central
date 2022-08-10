
import {block} from '../interfaces/block'


class Painter {

  
    
  drawBackground(context:CanvasRenderingContext2D) {
        var background = new Image(); 
        background.src = 'https://previews.123rf.com/images/tonygers/tonygers1401/tonygers140100028/25082143-una-vista-a%C3%A9rea-de-una-cancha-de-baloncesto-completan-con-las-marcas-.jpg'; 
        background.onload = () => {
            context.drawImage(background,0,0); 
            this.drawBoard(context);
        }
    }   

 drawBoard(context:CanvasRenderingContext2D) {
    for (var x = 0; x < 840; x++) {
      context.moveTo(x*30, 0); 
      context.lineTo(x*30, 540); 
    } 

    for (var y = 0; y < 540; y++) {
      context.moveTo(0, 30*y); 
      context.lineTo(840, 30*y); 
    }

    context.strokeStyle = "white";
    context.stroke();
}

   drawSelectedBlock(block:block,context?:CanvasRenderingContext2D ) {
    context?.fillRect(block.x * 30, block.y * 30 , 30, 30)
}

 drawSoldOutBlocks(block:block,context:CanvasRenderingContext2D) {
    
    if(block.image){
        var img = block.image

            var background = new Image(); 
            background.src = img
            background.onload = () => {
            context?.drawImage(background,block.x*30,block.y*30,30,30);
            }
    }
    else{	
        context?.fillRect(block.x*30,block.y*30, 30, 30)
    }
    
}
}

let painter = new Painter();
export default painter;