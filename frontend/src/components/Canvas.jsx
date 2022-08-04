import React from 'react'
import '../App.css';
import { useState } from 'react';
import { getPixeles, addPixel } from '../services/pixeles'

class Canvas extends React.Component {  
  

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      selectedPixel: [],
      pixelesPintados:[]
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
  
  
  async componentDidMount() {
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

   let  pixeles = await getPixeles()
   
   pixeles.forEach(doc =>{
        //  console.log(doc.data())
        this.state.pixelesPintados.push(doc.id)
          let resultado = doc.id.split(",")

          context.fillRect(resultado[0]*30,resultado[1]*30, 30, 30)
      })
      // console.log(pixelesPintados.docs[0].id)
      
  


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
      var existe = false
      var blockPosition = xBlock+','+yBlock ;
      console.log(blockPosition)
      console.log(this.state.pixelesPintados)
      this.state.pixelesPintados.forEach(pixel =>{
         
         if(pixel==blockPosition){
          console.log('existe')
          existe=true
         }
      })
      if(existe==false){
      if(blockPosition){
        context.fillRect(xBlock * 30, yBlock * 30 , 30, 30)
        this.state.selectedPixel.push(blockPosition)
        this.state.pixelesPintados.push(blockPosition)
        console.log(blockPosition);
        
      }
    }

    })
  
    this.drawBoard(context);
  }

   boton(data){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    console.log(name,phone,email)
    var info ={ 
      name:name,
      phone:phone,
      email:email}
    for(let i=0;i<data.length;i++){
 
      addPixel(data[i],info)
    }
    // var url = 'https://wa.me/+543571311605/?text=Deseo+comprar+los+metros+cuadrados+en+las+posiciones+' + data;
    //  window.open(url, '_blank');
  }
  
  render() {
    return (
      <div>
        <heading style={{color: "white" , fontSize:"30px"}}></heading>
        <form action="">
        <input type="text" placeholder='Nombre' id="name"/>
        <input type="text" placeholder='Celular' id="phone" />
        <input type="text" placeholder='Email' id="email"/>
        
        </form>
        <button style={{color:"red"}} onClick={()=>this.boton(this.state.selectedPixel)}>BOTON DE RESERVA</button>
        <heading style={{color: "white"}}></heading>
        
        <p style={{color: "white"}}>(Grid will be replaced by user-generated images after launch)</p>
        <canvas ref="canvasRef" width='840' height='540'  />
      </div>
    );
  }
}

export default Canvas