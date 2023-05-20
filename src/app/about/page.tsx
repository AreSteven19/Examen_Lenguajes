import NavBar from "..//components/navBar";
import Nfot from "..//components/nfot";
import ViewProjects from "../components/ViewProjects";
import { ClientOnly } from "../components/client";
import { ProjectProvider } from "../provider/ProjectsProvider";


export default function Page() {
  //pagina 2
  return (





    <div className="cuerpo">


      <ProjectProvider>


        <div>
          <NavBar />
        </div>

        <div className="contenido">
          <h1>Mis proyectos</h1>

          <ViewProjects />

        </div>

       


        <div id='footer4'>
          <Nfot />
        </div>







      </ProjectProvider>



    </div>





  )
}
