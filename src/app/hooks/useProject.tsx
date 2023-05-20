"use client"
import { useContext } from 'react';
import {ProjectContext} from '../provider/ProjectsProvider';

const useProject = () => {

    return useContext(ProjectContext);

    
}
 export default useProject;