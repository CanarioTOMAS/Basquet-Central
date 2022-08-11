import React, { useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { getPixeles, addPixel } from '../../services/pixeles'
import {block} from '../../interfaces/block'
import {soldOutBlock} from '../../interfaces/soldOutBlock'
import  Painter  from "../../services/painter";
import ModalPurchase from "../ModalPurchase/ModalPurchase";
import ModalInfo from "../ModalInfo/ModalInfo";
import './Canvas.css';

  
const Canvas: React.FC = () => {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);   
    const [clickBlock, setClickBlock] = React.useState<block>();
    const [selectedBlocks, setSelectedBlocks] = React.useState<block[]>([]);
    const [soldOutBlocks, setSoldOutBlocks] = React.useState<soldOutBlock[]>([]);
    const [context, setContext] = React.useState<CanvasRenderingContext2D>();
    const [show, setShow] = React.useState(false);
    const [showInfo, setShowInfo] = React.useState(false);
    const [blockClicked, setBlockClicked] = React.useState<block>();
    const [soldOutClicked, setSoldOutClicked] = React.useState<soldOutBlock>();
 

    useEffect(() => {
        const canvas = canvasRef.current;   

        if (canvasRef.current) {
            const context = canvas?.getContext('2d');   
            if(context && canvas) {
                setContext(context);
                // Painter.drawBackground(context)  
                Painter.drawBoard(context)
                addEvents(context,canvas) 

                getPixeles().then(docsSnap => {
                    let array:soldOutBlock[] = []
                    docsSnap.forEach((doc:any) => { 
                        let resultado = doc.id.split(",")
                        let data:soldOutBlock = {
                            x: parseInt(resultado[0]), 
                            y: parseInt(resultado[1]),
                            image: doc.data().userData.imagen ,
                            name:  doc.data().userData.name ,  
                            surname:doc.data().userData.surname ,  
                            business:doc.data().userData.business,
                            email:doc.data().userData.email,
                            phone:doc.data().userData.phone
                        }

                        Painter.drawSoldOutBlocks(data,context)
                        array.push(data)    
                      
                    }) 
                    setSoldOutBlocks(array);                    
                })               
            }     
        }       
    },[]); 

    useEffect(() => {
        let existe = false;
        selectedBlocks.forEach(block => {                   
            if(block.x == clickBlock?.x && block.y == clickBlock?.y){
                 existe=true
            }
         })

         soldOutBlocks.forEach((b:soldOutBlock) => {                   
            if(b.x == clickBlock?.x && b.y == clickBlock?.y){
                 existe=true
                setSoldOutClicked(b)
                setShowInfo(true)

            
            }
         })

     
         if(!existe && selectedBlocks.length<5){     
          if(clickBlock){
            Painter.drawSelectedBlock(clickBlock,context)              
            setSelectedBlocks([...selectedBlocks , clickBlock]);
            console.log(selectedBlocks)

          }                           
            
           
         }else{
          // alert('WPP')
         }
    },[clickBlock]);   
      
      
    function addEvents(context:CanvasRenderingContext2D,canvas: HTMLCanvasElement) {
        if (canvas) {
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
              
              
              })

              canvas.addEventListener('mousedown', async (e)=> {
      
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
          
                let block = {x:xBlock,y:yBlock,image:""};

                setClickBlock(block)           
            })    
        }
    }
    

    
    return (
        <>  
         <Button  onClick={()=>setShow(true)}>Comprar Bloques</Button>
 <ModalPurchase show={show} blocks={selectedBlocks} handleClose={function (): void {
        setShow(false)
      } }/>

      <ModalInfo show={showInfo} soldOutBlock={soldOutClicked} handleClose={function (): void {
        setShowInfo(false)
      } } />
      
            <canvas ref={canvasRef} width='540 ' height='840'  />

        </>
        
      );
}

export default Canvas