import { block } from "../interfaces/block";

class Painter {
  drawBoard(context: CanvasRenderingContext2D) {
    for (var x = 0; x < 540; x++) {
      context.moveTo(x * 30, 0);
      context.lineTo(x * 30, 840);
    }

    for (var y = 0; y < 840; y++) {
      context.moveTo(0, 30 * y);
      context.lineTo(540, 30 * y);
    }

    context.strokeStyle = "white";
    context.stroke();
  }

  drawSelectedBlock(block: block, context?: CanvasRenderingContext2D) {
    context?.fillRect(block.x * 30, block.y * 30, 30, 30);
  }
  deleteSelectedBlock(block: block, context?: CanvasRenderingContext2D) {
    context?.fillRect(block.x * 30, block.y * 30, 30, 30);
    context?.clearRect(block.x * 30, block.y * 30, 30, 30);
  }

  drawSoldOutBlocks(block: block, context: CanvasRenderingContext2D) {

    if (block.image) {
      var img = block.image;

      var background = new Image();
      background.src = img;
      background.onload = () => {
        context?.drawImage(background, block.x * 30, block.y * 30, 30, 30);
      };
    } else {
      context.fillStyle = "rgba(255, 125, 0, 0.7)";
      context?.fillRect(block.x * 30, block.y * 30, 30, 30);
    }
  }
}

let painter = new Painter();
export default painter;
