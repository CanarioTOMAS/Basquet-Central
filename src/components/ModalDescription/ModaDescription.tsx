import React from "react";
import { Button, Modal } from "react-bootstrap";
import {block} from '../../interfaces/block'
import { soldOutBlock } from "../../interfaces/soldOutBlock";

interface ModalDescriptionProps{
    soldOutBlock?:soldOutBlock;
    show: boolean;
    handleClose: () => void;
}
  
const ModalDescription: React.FC<ModalDescriptionProps> = ({show,soldOutBlock,handleClose}:ModalDescriptionProps) => {
    
   console.log(soldOutBlock)
    
    return (
        <>  
            <Modal show={show} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
                <Modal.Title>
                CAMPAÑA “UN METRO POR UN SUEÑO” – 500 m2.                
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            En Central queremos contarte que vamos a poner el piso deportivo.  Después de 67 años de Historias en el Club, nos embarcamos en el difícil objetivo de poner el piso de Parquet en el estadio “La Caldera”.  
Su presidente Aldo Falco, junto a los vecinos Alberto Rosso, Angel Luraschi, José Randoni, Ernesto Romasotto, Tomás Rosso, Francisco Rosso y Oscar Villalón junto a tantos dirigentes que pasaron por Central seguramente soñaron con lograrlo.  Hoy lo podemos hacer realidad con tu participación.
Te invitamos a ser parte de este SUEÑO adquiriendo un metro cuadrado simbólico para hacer realidad la instalación del piso que ya compramos y que está guardado en el Club.
Podes hacerlo a través de la página web www.unmetroporunsueño.com.ar  o comunicándote con  la Subcomisión de Básquet al celular 3571 524930.

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

export default ModalDescription;