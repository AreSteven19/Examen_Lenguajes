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

      <div className="contenido">
      <h1>este es el contenido de la pagina 3</h1>

      

      </div>


      <div >
        <Nfot />
      </div>





      <h2>pagina 3</h2>

   
    </div>

   



  )
}
