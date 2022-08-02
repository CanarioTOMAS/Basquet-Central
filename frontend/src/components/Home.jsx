import Canvas from './Canvas';
import { Link } from 'react-router-dom';
import logo from '../images/homepage/header8.png';
import info from '../images/homepage/info.png';

import {db} from './Firebase.js'
import { collection, addDoc, getDoc } from "firebase/firestore";

const docSnap  = getDoc(db, "prueba","qwe").then(data=>{
console.log(docSnap.data());
});


function Home() {
  return( 
    <div className="container">
      <div className="header-collection">
        <div className="header-logo">
          <a href="/">
            <img src={logo} width="1000" alt="" />
          </a>
        </div>
      </div>

     <div className="nav-collection">
       <div className="nav-item">
        <img src={info} width="300" alt="" />
       </div>
       
      </div>
      <div className="ad">
        <div className="ad-collection">
          <Canvas />
        </div>
      </div>
    </div>
  );
}

export default Home; 