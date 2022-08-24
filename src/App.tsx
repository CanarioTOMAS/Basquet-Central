import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Canvas from "./components/Canvas/Canvas";
import foto2 from "./image/logo2.png";
import foto1 from "./image/logo-1024x693.png"
import ModalDescription from "./components/ModalDescription/ModaDescription";
import Confetti from "react-confetti"

function App() {
  const [showInfo, setShowInfo] = React.useState(true);

  return (
    <div className="App">
      <div className=" container-fluid">
        <div className="header-title">
          <div className="row">
            <div className="col">
              <img className="logo-central" src={foto2}></img>
            </div>
            <div className="col-6-sm">
              <p className="title">
                "UN METRO POR UN SUEÑO - 500m<sup>2</sup>"
              </p>
            </div>
            <div className="col-1"></div>
            <div className="col-2"></div>
          </div>
          <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <p className="subtitle">#SUMATE - #VosPosdesHacerHistoria</p>
          </div>
          <div className="col-2">
            <p className="subtitle">
              by:
              <a className="link" href="http://socialup.com.ar/">
                <strong> SocialUp</strong>{" "}
                <img
                  className="icon-link"
                  src={foto1}
                ></img>
              </a>
            </p>
          </div>
        </div>
        </div>
        
      </div>
      <ModalDescription
        show={showInfo}
        handleClose={function (): void {
          setShowInfo(false);
        }}
      />

      <Canvas/>
      <div className="">
        <div className="row separar">
          <div className="col-sm"></div>
          <div className="col-sm-3  box">
            <p className="box-header">Contacto</p>
            <p className="cel">3571-524930 - Ivana</p>
            <p className="cel">3571-550548 - Federico</p>
            <p className="cel">3571-594476 - José</p>
            <p className="cel">3571-565906 - Laura</p>
          </div>

          <div className="col-sm-3 box">
            <p className="box-header">Redes</p>
            <p className="cel">
              {" "}
              Instagram =
              <a
                className="link"
                href="https://instagram.com/basquet.csca?igshid=YmMyMTA2M2Y="
              >
                {" "}
                @Basquet.csca
              </a>
            </p>
            <p className="cel">
              {" "}
              Facebook ={" "}
              <a
                className="link"
                href="https://m.facebook.com/profile.php?id=100029905552517"
              >
                @Basquet.csca
              </a>
            </p>
          </div>

          <div className="col-sm-3 box">
            <p className="box-header">Formas de Pago</p>
            <div className="box-body"> 
              <p className="cel">
                $5000 el m<sup>2</sup>
              </p>
              <p className="cel">°Efectivo</p>
              <p className="cel">°Transferencia</p>
              <p className="cel">°3 cuotas sin interés</p>
            </div>            
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
      <div className="row-sm separar">
        <footer>
          Esta aplicacion fue creada por{" "}
          <a className="link" href="http://socialup.com.ar/">
            <strong> SocialUp</strong>{" "}
            <img
              className="icon-link"
              src={foto1}
            ></img>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
