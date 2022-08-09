import React from "react";
import { Button, Modal } from "react-bootstrap";

interface ModalPurchaseProps{
    info: "string";
    show: boolean;
    handleClose: () => void;
}
  
const ModalPurchase: React.FC<ModalPurchaseProps> = ({show,info,handleClose}:ModalPurchaseProps) => {
    
   
    
    return (
        <>  
            <Modal show={show} onHide={handleClose} className="modal">
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
        </>
        
      );
}

export default ModalPurchase;