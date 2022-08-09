import React, { useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { getPixeles, addPixel } from '../../services/pixeles'
import {block} from '../../interfaces/block'
import  Painter  from "../../services/painter";

  
const Canvas: React.FC = () => {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);   
    const [clickBlock, setClickBlock] = React.useState<block>({x: 0, y: 0,image:""});
    const [selectedBlocks, setSelectedBlocks] = React.useState<block[]>([]);
    const [soldOutBlocks, setSoldOutBlocks] = React.useState<block[]>([]);
    const [context, setContext] = React.useState<CanvasRenderingContext2D>();

    useEffect(() => {
        const canvas = canvasRef.current;   

        if (canvasRef.current) {
            const context = canvas?.getContext('2d');   
            if(context && canvas) {
                setContext(context);
                Painter.drawBackground(context)   
                addEvents(context,canvas) 

                getPixeles().then(docsSnap => {
                    let array:block[] = []
                    docsSnap.forEach((doc:any) => {
                        let resultado = doc.id.split(",")
                        let Block:block = {
                            x: parseInt(resultado[0]), 
                            y: parseInt(resultado[1]),
                            image: doc.data().info.imagen
                        }
                        Painter.drawSoldOutBlocks(Block,context)
                        array.push(Block)    
                        console.log(soldOutBlocks)             
                    }) 
                    setSoldOutBlocks(array);                    
                })               
            }     
        }       
    },[]); 

    useEffect(() => {
        let existe = false;
        selectedBlocks.forEach(block => {                   
            if(block.x == clickBlock.x && block.y == clickBlock.y){
                 existe=true
            }
         })

         soldOutBlocks.forEach(block => {                   
            if(block.x == clickBlock.x && block.y == clickBlock.y){
                 existe=true
            }
         })

         console.log(selectedBlocks)
         if(!existe){                                
            Painter.drawSelectedBlock(clickBlock,context)              
            setSelectedBlocks([...selectedBlocks , clickBlock]);
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
            <canvas ref={canvasRef} width='840' height='540'  />
        </>
        
      );
}

export default Canvas