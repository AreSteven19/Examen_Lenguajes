import Link from "next/link"
import Image from 'next/image'
import './globals.css';


import NavBar from "./components/navBar";
import Nfot from "./components/nfot";





export default async function Home() {

  
  return (
   <div className="cuerpo">

<div>
<NavBar/>
</div>
    
    
      <div>
      <div id="welcome-section">
  <div id="image-container">
 
  </div>
  <br />
  <div id="welcome-content">
    <h1 id='titulo-texto'>!Bienvenido a mi página web¡</h1>
    <br></br>
    <div id="texto3">
    <h2>Aquí encontrarás una colección de trabajos realizados por mí, un apasionado programador...</h2>
    <h2>Si estás buscando un profesional confiable para llevar a cabo tu próximo proyecto...</h2>
    <h2>¡Espero que disfrutes navegando por mi portafolio y que encuentres inspiración en mis trabajos!...</h2>
    <h2>¡Gracias por visitar mi página y espero tener la oportunidad de trabajar contigo pronto!</h2>
    
    </div>
    
  </div>
</div>
      </div>

     
     <div >
     <Nfot/>
     </div>
      
     
    


    

   </div>
  )

}

