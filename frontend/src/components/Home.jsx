import Canvas from './Canvas';

import logo from '../images/homepage/header8.png';
import info from '../images/homepage/info.png';


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