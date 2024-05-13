import React from 'react'
import ModalProject from './ModalProject'
import SliderProjects from './SliderProjects';

const Projects = () => {
    const [showProjectInterface, setProjectInterface] = React.useState(false)
    const handleShowProject = () => setProject(true);
    
  return (
    <>
    
    <section>
        <SliderProjects setProjectInterface={setProjectInterface}/>
    </section>

    {showProjectInterface && <ModalProject setProjectInterface={setProjectInterface}/>}
    </>
  )
}

export default Projects