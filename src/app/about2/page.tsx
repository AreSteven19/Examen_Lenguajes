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
      
    
    <h3>Sobre mí</h3>
    <p>Hola, mi nombre es Steven Acevedo Pereira. Soy un apasionado de la informática y actualmente estoy estudiando Informática Empresarial. </p>

    <h3>Experiencia</h3>
    <ul>
        <li>JavaScript: He trabajado con JavaScript durante varios proyectos y estoy familiarizado con los conceptos y las principales librerías y frameworks como React y Angular.</li>
        <li>React: Tengo experiencia en el desarrollo de aplicaciones web utilizando React, creando componentes reutilizables y utilizando el enfoque basado en componentes para crear interfaces de usuario dinámicas.</li>
        <li>Java: También tengo conocimientos en el lenguaje de programación Java y he trabajado en proyectos utilizando el framework Spring para el desarrollo de aplicaciones empresariales.</li>
       
    </ul>

    <h3>Intereses y Habilidades</h3>
    <p>Además de mi pasión por la informática, me gusta mantenerme actualizado sobre las últimas tendencias y avances en el campo de la tecnología. Me considero una persona curiosa, proactiva y con habilidades para el trabajo en equipo y la resolución de problemas.</p>

    <h3>Contacto</h3>
    
    <p>puedes visitar mi perfil de Linked para conocer más sobre mi experiencia y habilidades en el siguiente enlacee: <a href="https://www.linkedin.com/in/are-steven-acevedopereira-3a2574277/" target="_blank">LinkedIn</a></p>

      

      </div>


      <div >
        <Nfot />
      </div>





      <h2>pagina 3</h2>

   
    </div>

   



  )
}
