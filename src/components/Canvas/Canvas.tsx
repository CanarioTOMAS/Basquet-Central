import React, { useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { getPixeles, addPixel } from "../../services/pixeles";
import { block } from "../../interfaces/block";
import { soldOutBlock } from "../../interfaces/soldOutBlock";
import Painter from "../../services/painter";
import ModalPurchase from "../ModalPurchase/ModalPurchase";
import ModalInfo from "../ModalInfo/ModalInfo";
import "./Canvas.css";
import Confetti from "react-confetti";
import { createNonNullChain } from "typescript";

interface ConfettiProps{
  handlePurchaseClickButton: () => void;
}

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [clickBlock, setClickBlock] = React.useState<block>();
  const [selectedBlocks, setSelectedBlocks] = React.useState<block[]>([]);
  const [soldOutBlocks, setSoldOutBlocks] = React.useState<soldOutBlock[]>([]);
  const [context, setContext] = React.useState<CanvasRenderingContext2D>();
  const [show, setShow] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const [soldOutClicked, setSoldOutClicked] = React.useState<soldOutBlock>();
  const [showConfetti, setShowConfetti]=React.useState(false);

  const [x, setX]=React.useState(0);
  const [y, setY]=React.useState(0);
 
  const {innerWidth:width,innerHeight:height} = window;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvasRef.current) {
      const context = canvas?.getContext("2d");
      if (context && canvas) {
        setContext(context);
        // Painter.drawBackground(context)
        Painter.drawBoard(context);
        addEvents(context, canvas);
        getPixeles().then((docsSnap) => {
          let array: soldOutBlock[] = [];
          docsSnap.forEach((doc: any) => {
            let resultado = doc.id.split(",");
            let data: soldOutBlock = {
              x: parseInt(resultado[0]),
              y: parseInt(resultado[1]),
              image: doc.data().userData.imagen,
              name: doc.data().userData.name,
              surname: doc.data().userData.surname,
              business: doc.data().userData.business,
              email: doc.data().userData.email,
              phone: doc.data().userData.phone,
            };
            Painter.drawSoldOutBlocks(data, context);
            array.push(data);
          });
          setSoldOutBlocks(array);
        });
      }
    }
  }, []);

  useEffect(() => {
    let existe = false  ;
    selectedBlocks.forEach((block) => {
      if (block.x == clickBlock?.x && block.y == clickBlock?.y) {
        existe = true;
      }
    });
    soldOutBlocks.forEach((b: soldOutBlock) => {
      if (b.x == clickBlock?.x && b.y == clickBlock?.y) {
        existe = true;
        setSoldOutClicked(b);
        setShowInfo(true);
      }
    });
    //Painter.deleteSelectedBlock(clickBlock,context)
    if (!existe && selectedBlocks.length < 5) {
      if (clickBlock) {
        Painter.drawSelectedBlock(clickBlock, context);
        setSelectedBlocks([...selectedBlocks, clickBlock]);

        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 2000);
        
      }
    } else {
      let borrar = -1;
      for (let i = 0; i < selectedBlocks.length; i++) {
        if (
          selectedBlocks[i].x == clickBlock?.x &&
          clickBlock?.y == selectedBlocks[i].y
        ) {
          const temp = [...selectedBlocks];
          temp.splice(i, 1);
          setSelectedBlocks(temp);
          if (clickBlock) Painter.deleteSelectedBlock(clickBlock, context);
        }
      }
      // alert('WPP')
      if (borrar != -1) {
      }
      borrar = -1;
    }
  }, [clickBlock]);
  useEffect(() => {}, [selectedBlocks]);

  function addEvents(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    if (canvas) {
     
      canvas.addEventListener("mousedown", async (e) => {
        var xBlock = 0;
        var yBlock = 0;

        if (e.offsetX < canvas.clientWidth) {
          xBlock = Math.floor((e.offsetX / (canvas.clientWidth / 18)) % 100);

        } else if (e.offsetX < canvas.clientWidth) {
          xBlock = parseInt(e.offsetX.toString().substr(0, 0));
        }

        if (e.offsetY < canvas.clientHeight) {
          yBlock = Math.floor((e.offsetY / (canvas.clientHeight / 28)) % 100);
        } else if (e.offsetY < canvas.clientHeight) {
          yBlock = parseInt(e.offsetY.toString().substr(0, 0));
        }

        setX(e.clientX)
        setY(e.clientY+e.offsetY)


        let block = { x: xBlock, y: yBlock, image: "" };

       
        setClickBlock(block);
       
        
      });
    }
  }


  

  function validator() {
    if (selectedBlocks.length > 0) {
      setShow(true);
    } else {
      alert("debe seleccionar al menos 1 metro cuadrado");
    }
  }

  return (
    <>
      <ModalPurchase
        show={show}
        blocks={selectedBlocks}
        handleClose={function (): void {
          setShow(false);
        }}
      />

      <ModalInfo
        show={showInfo}
        soldOutBlock={soldOutClicked}
        handleClose={function (): void {
          setShowInfo(false);
        }}
      />
        <Confetti
        className="confetti"
        hidden={false}
        run={true}
        width={width}
        height={2000}
        colors={['#ff0000','#ffffff']}
        recycle={showConfetti}
        confettiSource={{x:x,y:y,w:50,h:50}}

        
      ></Confetti>
      <Button className="comprar-button" onClick={() => {validator()}} size="lg">
        Comprar Bloques
      </Button>
      <canvas className="cancha" ref={canvasRef} width="540 " height="840" />
     
      <br></br>
     
    </>
  );
};

export default Canvas;
