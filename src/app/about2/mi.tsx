import NavBar from "..//components/navBar";
import Nfot from "..//components/nfot";
import ViewProjects from "../components/ViewProjects";
import { ClientOnly } from "../components/client";
import { ProjectProvider } from "../provider/ProjectsProvider";



export default async function Home() {

  
  return (
   <div className="cuerpo">

<div>
<NavBar/>
</div>
    
    <div className="contenido"></div>
    <h1>Acerca de mi</h1>
  <p>efdef</p>
      

     
     <div >
     <Nfot/>
     </div>
      
     
    


    <h2>pagina 1</h2>

   </div>
  )

}

