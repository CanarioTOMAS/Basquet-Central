import {db} from './firebase-config.js'
import {doc ,getDoc, setDoc , deleteDoc } from "firebase/firestore";

export function getPixeles(){
    const docRef  = doc(db, "prueba","qwe")
    const docSnap =  getDoc(docRef);
    console.log(docRef);  
    console.log(docRef._key.path.segments)
    //return 
}

export function addPixel(pixel){
    setDoc(doc(db, "pixeles"), pixel);
}

export function cleanPixel(pixel){
    deleteDoc(doc(db, "pixeles",pixel.id))
}

export function checkTakedPixels(){
    //obtener pixeles que esten taked=true y payed=false
    //obtener la fecha de pixel.date
    // if date+5dias < fechaActual cleanPixel()
}