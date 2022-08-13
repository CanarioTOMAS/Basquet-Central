import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ModalInfo from './components/ModalInfo/ModalInfo';
import Canvas from './components/Canvas/Canvas';
import { Button, Modal } from "react-bootstrap";
import ModalPurchase from './components/ModalPurchase/ModalPurchase';
import foto1 from "./image/cluc.jpeg";
import foto2 from "./image/logo2.png";
import ModalDescription from './components/ModalDescription/ModaDescription';

function App() {

  const [showInfo, setShowInfo] = React.useState(true);

  return (
  <div className="App">
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <img className="logo-central" src={foto2}></img>
        </div>
          <div className="col-6" >
            <p className="title"  >"UN METRO POR UN SUEÑO - 500m<sup>2</sup>"</p>
          </div>
          <div className="col-1" >
            
          </div>
        <div className="col-2" ></div>
      </div>
      <div className="col">
        <p className='subtitle'>#SUMATE - #VosPosdesHacerHistoria</p>
      </div>
    </div>
    <ModalDescription show={showInfo} handleClose={function (): void {
        setShowInfo(false)
      } } />
<Canvas />
      <div className="fluid">
    <div className="row separar">
    <div className='col'></div>
      <div className="col-3 contenedor1">
        <p className="contacto ">Contacto</p>
        <p className="cel">3571-524930 - Ivana</p>
        <p className="cel">3571-550548 - Federico</p>
        <p className="cel">3571-594476 - José</p>
        <p className="cel">3571-565906 - Laura</p>
      </div>

      <div className="col-3 contenedor2">
        <p className="contacto">Redes</p>
        <p className="cel"> Instagram =<a className='link' href='https://instagram.com/basquet.csca?igshid=YmMyMTA2M2Y=' > @Basquet.csca</a></p>
        <p className="cel"> Facebook = <a className='link' href='https://m.facebook.com/profile.php?id=100029905552517' >@Basquet.csca</a></p>
      </div>
      
      <div className="col-3 contenedor3">
        <p className="contacto">Formas de Pago</p>
        <p className="cel">$5000 el m<sup>2</sup></p>
        <p className="cel">°Efectivo</p>
        <p className="cel">°Transferencia</p>
        <p className="cel">°3 cuotas sin interés</p>
      </div>
      <div className='col'></div> 
   </div>
</div>
<div className='row separar'>
<footer>
    Esta aplicacion fue creada por <a href="http://socialup.com.ar/"> SocialUp</a>
   </footer>
   </div>
    </div>
  );
}

export default App;
