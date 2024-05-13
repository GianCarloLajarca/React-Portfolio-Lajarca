import React from 'react'
import { baseImgUrl } from '../../../../helpers/functions-general'
import { FaTimesCircle } from 'react-icons/fa'

const ModalProject = ({setProjectInterface}) => {

    const handleClose = () => setProjectInterface(false)
  return (
    <div className='fixed top-0 left-0 isolate w-full h-screen'>
        <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/80 "></div>
        <main className='max-w-[700px] w-full bg-primary text-white absolute left-1/2 top-1/2 -translate-x-1/2 
        -translate-y-1/2 inset-0 z-[9999] max-h-[900px] h-full p-10'>
          <h2 className='text-center pt-3 text-3xl'>Project Interface</h2>
            <button onClick={handleClose} type="button" className='absolute top-4 right-4 text-[#141414] text-xl hover:text-accent transition-all'><FaTimesCircle /></button>
              <div className='project grid grid grid-cols-2 gap-5 py-32'>
                        <a href={`${baseImgUrl}/home/projects-7.png`} data-lightbox="image-1" data-title="WonderTour Homepage"><img src={`${baseImgUrl}/home/projects-7.png`} alt="" className='object-cover'/></a>
                        <a href={`${baseImgUrl}/home/project-1-modal-1.png`} data-lightbox="image-1" data-title="About Page"><img src={`${baseImgUrl}/home/project-1-modal-1.png`} alt="" className=' object-cover'/></a>
                        <a href={`${baseImgUrl}/home/project-1-modal-2.png`} data-lightbox="image-1" data-title="About Page - Destinations Section"><img src={`${baseImgUrl}/home/project-1-modal-2.png`} alt="" className=' object-cover'/></a>
                        <a href={`${baseImgUrl}/home/project-1-modal-3.png`} data-lightbox="image-1" data-title="Our Tours Page"><img src={`${baseImgUrl}/home/project-1-modal-3.png`} alt="" className=' object-cover'/></a>
                        <a href={`${baseImgUrl}/home/project-1-modal-4.png`} data-lightbox="image-1" data-title="About Page - What people Say Section"><img src={`${baseImgUrl}/home/project-1-modal-4.png`} alt="" className=' object-cover'/></a>
                        <a href={`${baseImgUrl}/home/project-1-modal-5.png`} data-lightbox="image-1" data-title="About Page - Parallax and Footer Section"><img src={`${baseImgUrl}/home/project-1-modal-5.png`} alt="" className=' object-cover'/></a>
              </div>
        </main>

    </div>
  )
}

export default ModalProject