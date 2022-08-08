import React ,{Component, useState} from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalInfo =  ({  show, info,handleClose,handleShow }) => {

  const [mostrar,setMostrar]=useState(false)
    

  useEffect(() => {
    setMostrar(show)
  },[show]);

    handleClose=()=>{ 
        setMostrar(false)          
    }

    handleShow = ()=>{
        
      setMostrar(true)

    }


     
        return (
          <div>
    
    
          <Modal show={mostrar} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{info}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
    </div>
          
        );
      
}
export default ModalInfo   