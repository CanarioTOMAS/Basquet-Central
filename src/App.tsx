import React from 'react';
import logo from './logo.svg';
import './App.css';
import ModalInfo from './components/ModalInfo/ModalInfo';
import Canvas from './components/Canvas/Canvas';
import { Button, Modal } from "react-bootstrap";
import ModalPurchase from './components/ModalPurchase/ModalPurchase';
import foto1 from "./image/cluc.jpeg";
import foto2 from "./image/parquet.jpg";


function App() {

  return (
  <div className="App">
    <div className="container-fluid">
    <div className="row">
      <div className="col-2">
        <img className="logo-central" src='data:image/png;base64,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'></img>
      </div>
        <div className="col-8" >
          <p className="title"  >"Un metro por un sueño - 500m<sup>2</sup>"</p>
        </div>
        <div className="col" ></div>
      
    </div>
    <div className="row">
      <div className="col">
        <p>#SUMATE - #VosPosdesHacerHistoria</p>
      </div>
      <div className="col-1" ></div>
      <div className="col-10" > </div>
    </div>
</div>
     
<Canvas />
      <div className="container-fluid">
    <div className="row separar">
    <div className='col'></div>
      <div className="col-3 contenedor1">
        <p className="contacto ">Contacto</p>
        <p className="cel">3571-524930 - Juama</p>
        <p className="cel">3571-550548 - Federico</p>
        <p className="cel">3571-594476 - José</p>
        <p className="cel">3571-565906 - Laura</p>
      </div>

      <div className="col-3 contenedor2">
        <p className="contacto">Redes</p>
        <p className="cel">Instagram = @Basquet.csca</p>
        <p className="cel">Facebook = @Basquet.csca</p>
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
    Esta aplicacion fue creada por SocialUp
   </footer>
   </div>
    </div>
  );
}

export default App;
