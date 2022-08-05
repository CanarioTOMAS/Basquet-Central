import React from 'react'
import '../App.css';
import { getPixeles, addPixel } from '../services/pixeles'


class Canvas extends React.Component {  
  

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      selectedPixel: [],
      pixelesPintados:[],
      datapixel:[],
      overBlock:'',
      imgRepit:[],
      datoMostrar:'aasdasdasd',
     

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
        let midata=""
        
      pixeles.forEach(doc =>{
        this.state.pixelesPintados.push(doc.id)
        let resultado = doc.id.split(",")
        this.state.imgRepit.push(doc.data().info.imagen)
        
        midata= (doc.id+':'+JSON.stringify(doc.data()))
        let separar = midata.split(":")
        console.log (separar)
        this.state.datapixel.push(separar);


          if(doc.data().info.imagen){
          var img = doc.data().info.imagen

            var background = new Image(); 
            background.src = img
            background.onload = () => {
            context.drawImage(background,resultado[0]*30,resultado[1]*30,30,30);
            }
          }

        context.fillRect(resultado[0]*30,resultado[1]*30, 30, 30)
      })
            
      var background = new Image(); 
      background.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAwQMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAABAgMABAb/xAAiEAEBAAIBBQADAQEAAAAAAAAAAQISEQMEExRRIUFhMZH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIGBf/EABcRAQEBAQAAAAAAAAAAAAAAAAARIQH/2gAMAwEAAhEDEQA/APSMzOFe8zM35UYRmJuOREx4PMRmIJ8NqroOiCWozD6rMBuNv6VKhZy2q+oXBFqGrcLaBoCXAK3ELiCbHuIcKtKzflvyFZhAGZmQZhGQShweQZD4xQvHIzE8xPMRkkxNMVJieYIlS0HRaYfw0wEqGjaOjQ2gVy6No6tA0CuW4Ben+HVoW4KVy3AtwdNxLcUWua4kuLpuJLiNVC48hZwrlCWKJ0D2F4FBmZFMeQMZ/wAOrI4w8hcVIA4xSQMVMUZ6OMPji2KkVkJiaYGxh5EZJMB0VkNqiVHQNF9S2BULiS4r2FsVXPcSZRfKEsGnPYTKL5RLKC8SsTyiuRMhpKwilLxyKVh0rKtHnk0TlPKIpipEZVMagtifFKU8yGe8XxPjUMclJkMrynlc8yPMiI6JR2QmY7EZi+xbUtg3Qh7SWluRbkq8G0mVC5EyyFDKp0bkS0a4WkyHKktGgpKNpLRW5YGFYZSiKeVTGoy8G25qpF9jTJzzI0yRI6ZkaZuaZGmYzHVMzTNy7jMxI6vIO7l3HcI6dw3c+7bhF7mW5o3Pgu4Ra5EuSdzJcxYpciZZEuQc8qsNaTK8Bci2itaDAKIMwrMIBWEG5Qo7DMi8sIfk0vCf+NypFdhmSPLcoRbcd0OW5BeZtvwjMrP8bZUitzDZLluRYpci3InLIQ1yDb8hy3ICDcsKzM3HNWFZjagQrq9aU07XEZ1DeQY0J2uHyGnadP5G8ozqozoztOn8h52mE/UJOsPnDVPU6d/UH0+l8ifnHziarOy6XyGnY9L5EZ3Fb2ENW9Lo/IPo9H5Eb3HAeyJOr+j0fkb0ul8iHst7ITq17LpfIW9l0vkT9hvY/qrpvT6XyBez6XyF9gPOGt6fT+QL2nT+RvOF6wuhe06fyEvaYfIfzB5g0nq4lvbSf4peqXyKt6n6/wDWU8jIuuXa/W3pGGoff+jvU8QUW3byIshFvJfreS/UWCLTqX6bycfv8oSspFfJfreS/UWCLeS/W8l+oshFvJfreS/UWUi3kreS/UWQi3kbdFv2pFfJ/W3ToIRTettSMEPtfrEAWP/Z'; 
      background.onload = () => {
        context.drawImage(background,240,90,90,60); 
        this.drawBoard(context);
      } 




canvas.addEventListener('mousemove',(e)=>{
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

   this.state.overBlock = xBlock+','+yBlock ;

  this.state.datapixel.forEach(doc =>{
    if (this.state.overBlock== doc[0]){
     this.state.datoMostrar = doc[3]
    }
    
})


})

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