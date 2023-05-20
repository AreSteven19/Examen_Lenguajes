import NavBar from "..//components/navBar";
import Nfot from "..//components/nfot";
import ViewProjects from "../components/ViewProjects";
import { ClientOnly } from "../components/client";
import { ProjectProvider } from "../provider/ProjectsProvider";
import '../globals.css';


export default function Page() {
  //pagina 3
  return (




    
    <div className="cuerpo">
     
      
    

      
      <div>
        <NavBar />
      </div>

      <div id="contenidomi">
      
    
    <h1>Sobre mí: </h1>
    <br />
    <p>Hola, mi nombre es Steven Acevedo Pereira. Soy un apasionado de la informática y actualmente estoy estudiando Informática Empresarial. </p>
<br />
    <h1>Experiencia: </h1>
    <br />
    <ul>
        <li>JavaScript: He trabajado con JavaScript durante varios proyectos y estoy familiarizado con los conceptos y las principales librerías y frameworks como React .</li>
        <li>React: Tengo experiencia en el desarrollo de aplicaciones web utilizando React, creando componentes reutilizables y utilizando el enfoque basado en componentes para crear interfaces de usuario dinámicas.</li>
        <li>Java: También tengo conocimientos en el lenguaje de programación Java y he trabajado en proyectos utilizando el framework Spring para el desarrollo de aplicaciones empresariales.</li>
       
    </ul>
<br />
    <h1>Intereses y Habilidades: </h1>
    <br />
    <p>Además de mi pasión por la informática, me gusta mantenerme actualizado sobre las últimas tendencias y avances en el campo de la tecnología.</p>
<br />
    <h1>Contacto: </h1>
    <br />
    
    <p>puedes visitar mi perfil de Linked para conocer más sobre mi experiencia y habilidades en el siguiente enlace: <a href="https://www.linkedin.com/in/are-steven-acevedopereira-3a2574277/" target="_blank">linkedin</a></p>

      

      </div>


      <div id="footer5" >
        <div id="dsds">

        
        <Nfot />

        </div>
      </div>





     
   
    </div>

   



  )
}
