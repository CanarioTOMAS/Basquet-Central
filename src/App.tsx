import React from 'react';
import logo from './logo.svg';
import './App.css';
import ModalInfo from './components/ModalInfo/ModalInfo';
import Canvas from './components/Canvas/Canvas';
import { Button, Modal } from "react-bootstrap";

function App() {

  const [show, setShow] = React.useState(true);

  return (
    <div className="App">
      <Button  onClick={()=>setShow(true)}>MOSTRAR MODAL</Button>
      <ModalInfo show={show} info={'string'} handleClose={function (): void {
        setShow(false)
      } } />
      <Canvas />
    </div>
  );
}

export default App;
