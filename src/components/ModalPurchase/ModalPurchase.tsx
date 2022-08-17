import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { block } from "../../interfaces/block";
import { addPixel } from "../../services/pixeles"

interface ModalPurchaseProps{
    blocks: block[];
    show: boolean;
    handleClose: () => void;
}


const ModalPurchase: React.FC<ModalPurchaseProps> = ({show,blocks,handleClose}:ModalPurchaseProps) => {
    const [datos, setDatos] = useState({
        name: '',
        surname: '',
        business:'',
        phone:'',
        email:''


    })
    const handleInputChange = (event:any) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event:any) => {
        event.preventDefault()
        if(datos.name && datos.surname &&datos.phone){
        for(let  i =0;i<blocks.length;i++){
             addPixel(blocks[i],datos)
             
        };
        var url = 'https://wa.me/+543571524930/?text=Cantidad+de+metros: '+ blocks.length +' '+ datos.name +' '+ datos.surname+ ' '+datos.business+' '+datos.email+' '+datos.phone
        window.open(url, '_blank');   
 
    }else{
        alert('complete los datos ')
        
    }
}

    return (
        <>  
            <Modal show={show} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Nombre*</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" onChange={handleInputChange} name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellido *</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su apellido" onChange={handleInputChange} name="surname"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Empresa</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre de la empresa " onChange={handleInputChange} name="business" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono*</Form.Label>
                <Form.Control type="phone" placeholder="Ingrese su telefono" onChange={handleInputChange} name="phone"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" onChange={handleInputChange} name="email"/>
            </Form.Group>
            <Form.Group  className="mb-3" controlId="formBasicPassword">
                <Form.Text>* Los campos son requeridos</Form.Text>

            </Form.Group>
        </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={enviarDatos} >
                Enviar
                </Button>
            </Modal.Footer>
            </Modal>
        </>
        
      );
}

export default ModalPurchase;


