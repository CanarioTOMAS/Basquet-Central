import {db} from './firebase-config.js'
import {doc,collection ,getDocs, setDoc , deleteDoc } from "firebase/firestore";

const collectionBlock = "blocks"

export async function getPixeles(){
    const colRef  = collection(db, collectionBlock)
    const docsRef = await getDocs(colRef);

    docsRef.forEach(doc =>{
    //    console.log(doc.data())
    //     console.log(doc.id)  

    })
   return docsRef
     
}

export function addPixel(block,userData){
    console.log(block)
    let id = block.x+","+block.y
    setDoc(doc(db, collectionBlock, id),{
        userData
    });
   
}

export function cleanPixel(pixel){
    deleteDoc(doc(db, collectionBlock,pixel.id))
}

export function checkTakedPixels(){

    //obtener pixeles que esten taked=true y payed=false
    //obtener la fecha de pixel.date
    // if date+5dias < fechaActual cleanPixel()
}