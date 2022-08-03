import React from 'react'
import '../App.css';
import { useState } from 'react';
import { getPixeles } from '../services/pixeles'

class Canvas extends React.Component {  
  

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      paintedPixels: []
    };
  }
  
  drawBoard(context) {
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
  
  
  componentDidMount() {
    const canvas = this.refs.canvasRef
    const context = canvas.getContext('2d')
  
    // Fix to make lines *not* blurry
    context.translate(0.5, 0.5);

    this.drawBoard(context);
    var background = new Image(); 
    background.src = 'https://previews.123rf.com/images/tonygers/tonygers1401/tonygers140100028/25082143-una-vista-a%C3%A9rea-de-una-cancha-de-baloncesto-completan-con-las-marcas-.jpg'; 
    background.onload = () => {
      context.drawImage(background,0,0); 
      this.drawBoard(context);
    }

    let pixelesPintados = getPixeles()
    

    canvas.addEventListener('mousedown', (e)=> {

      var xBlock = 0; 
      var yBlock = 0; 

      if (e.offsetX < 840) {
        xBlock = Math.floor((e.offsetX/30) % 100); 
      }
      else if (e.offsetX <  840) {
        xBlock = parseInt(e.offsetX.toString().substr(0,0));
      }

      if (e.offsetY < 540) {
        yBlock = Math.floor((e.offsetY/30) % 100);
      }
      else if (e.offsetY < 540) {
        yBlock = parseInt(e.offsetY.toString().substr(0,0));
      }

      // Need to get block position on grid
      
      var blockPosition = ' H:'+xBlock + '/ V:'+yBlock ;
      
      if(blockPosition){
        context.fillRect(xBlock * 30, yBlock * 30 , 30, 30)
        this.state.paintedPixels.push(blockPosition)
        console.log(this.state.paintedPixels);
        
      }

    })
  
    this.drawBoard(context);
  }

   boton(data){
    console.log('click') 
    var url = 'https://wa.me/+543571311605/?text=Deseo+comprar+los+metros+cuadrados+en+las+posiciones+' + data;
     window.open(url, '_blank');
  }
  
  render() {
    return (
      <div>
        <heading style={{color: "white" , fontSize:"30px"}}><b>WORK IN PROGRESS - NFT COMING SOON</b></heading>
        <heading style={{color: "white"}}></heading>
        <button onClick={()=>this.boton(this.state.paintedPixels)}></button>
        <p style={{color: "white"}}>(Grid will be replaced by user-generated images after launch)</p>
        <canvas ref="canvasRef" width='840' height='540'  />
      </div>
    );
  }
}

export default Canvas