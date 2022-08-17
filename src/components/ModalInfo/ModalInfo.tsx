import React from "react";
import { Button, Modal } from "react-bootstrap";
import {block} from '../../interfaces/block'
import { soldOutBlock } from "../../interfaces/soldOutBlock";

interface ModalInfoProps{
    soldOutBlock?:soldOutBlock;
    show: boolean;
    handleClose: () => void;
}
  
const ModalInfo: React.FC<ModalInfoProps> = ({show,soldOutBlock,handleClose}:ModalInfoProps) => {
    
    
    return (
        <>  
            <Modal show={show} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
                <Modal.Title>
                {soldOutBlock?.name} {soldOutBlock?.surname}
                
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                <b>Empresa:</b> {soldOutBlock?.business}
                </div><div>
                <b>Email:</b> {soldOutBlock?.email}
                </div><div>
                <b>Telefono:</b> {soldOutBlock?.phone}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cerrar
                </Button>
            </Modal.Footer>
            </Modal>
        </>
        
      );
}

export default ModalInfo;