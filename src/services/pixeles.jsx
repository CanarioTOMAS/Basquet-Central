import {db} from './firebase-config.js'
import {doc,collection ,getDocs, setDoc , deleteDoc } from "firebase/firestore";


export async function getPixeles(){
    const colRef  = collection(db, 'pixeles')
    const docsRef = await getDocs(colRef);

    docsRef.forEach(doc =>{
    //    console.log(doc.data())
    //     console.log(doc.id)  

    })
   return docsRef
     
}

export function addPixel(pixel,info){
    console.log(pixel)
    setDoc(doc(db, "pixeles", pixel),{
        info
    });
   
}

export function cleanPixel(pixel){
    deleteDoc(doc(db, "pixeles",pixel.id))
}

export function checkTakedPixels(){

    //obtener pixeles que esten taked=true y payed=false
    //obtener la fecha de pixel.date
    // if date+5dias < fechaActual cleanPixel()
}