import React from 'react'
import { baseImgUrl } from '../../../../helpers/functions-general'
import { FaBriefcase } from 'react-icons/fa'
import { RiVipCrownLine } from 'react-icons/ri'
import useQueryData from '../../../../custom-hook/useQueryData'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'

const Resume = () => {

    const {
        isLoading,
        isFetching,
        error,
        data: experience,
      } = useQueryData(
       "/v1/experience", // endpoint
       "get", // method
        "experience", // key
      );

  return (
    <>
        <section className='resume py-36 bg-darkblue'>
            <div className='container ml-48 '>
                <div className='resume-title flex flex-col gap-4 mb-20'>
                                <h2 className='text-accent text-4xl text-center'>Resume</h2>
                                <p className='text-md text-stone-300 text-center leading-6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Dicta nam exercitationem at aspernatur eligendi labore corrupti.</p>
                    </div>

                        <div className='resume-content grid grid-cols-2 gap-44'>
                            <div className='resume-education block'>
                                <h2 className='flex flex-row items-center gap-3 text-2xl text-center justify-center'><RiVipCrownLine />Education:</h2>

                                <div className='mt-12 flex flex-col gap-5'>
                                
                                    <div className="resume-education-card bg-primary py-14 px-10">
                                        <div className='resume-education-card-content flex flex-col gap-4'>
                                            <div className='resume-education-card-date'>
                                                <h4>2020 - Present</h4>
                                            </div>

                                            <div className='resume-education-card-title text-2xl'>
                                                <h3 className='text-accent'>Bachelor of Science in Information Technology</h3>
                                            </div>

                                            <div className='resume-education-card-paragraph'>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non asperiores facere eveniet itaque porro aperiam quae harum.</p>
                                            </div>

                                            <div className='resume-education-card-school flex gap-3 items-center mt-2'>
                                                <img src={`${baseImgUrl}/home/dlsl-education.png`} alt="" className='h-full w-14 object-cover' />
                                                <h4 className='text-accent'>De La Salle Lipa</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="resume-education-card bg-primary py-14 px-10">
                                        <div className='resume-education-card-content flex flex-col gap-4'>
                                            <div className='resume-education-card-date'>
                                                <h4>2018 - 2020</h4>
                                            </div>

                                            <div className='resume-education-card-title text-2xl'>
                                                <h3 className='text-accent'>Accountancy, Business, and Management - Senior High School</h3>
                                            </div>

                                            <div className='resume-education-card-paragraph'>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non asperiores facere eveniet itaque porro aperiam quae harum.</p>
                                            </div>

                                            <div className='resume-education-card-school flex gap-3 items-center mt-2'>
                                                <img src={`${baseImgUrl}/home/dlsl-education.png`} alt="" className='h-full w-14 object-cover' />
                                                <h4 className='text-accent'>De La Salle Lipa</h4>
                                            </div>
                                        </div>
                                    </div>

                               
                                </div>
                                
                            </div>
                            <div className='resume-experience'>
                            <h2 className='flex flex-row items-center gap-3 text-2xl justify-center'><FaBriefcase />Experience:</h2>
                            {experience?.data.map((item, key) => (
                                <div className="resume-experience-card mt-12 bg-primary py-14 px-10" key={key}>
                                        <div className="resume-experience-card-content flex flex-col gap-4">
                                                <div className='resume-experience-card-date'>
                                                    <h4>{item.experience_date}</h4>
                                                </div>
                                                <div className='resume-experience-company flex gap-5 items-center'>
                                                    <img src={item.experience_image} alt="" className='h-full w-44 object-cover bg-white p-1' />
                                                    <h3 className='text-accent text-2xl'>{item.experience_title}</h3>
                                                </div>
                                                <div className='resume-experience-card-paragraph'>
                                                    <p>{item.experience_description}</p>
                                                </div>
                                                <div className='resume-experience-card-position'>
                                                <h4>{item.experience_job}</h4>
                                            </div>
                                        </div>
                                </div>
                                ))}  
                            </div>
                        </div>
            </div>
        </section>
    </>
  )
}

export default Resume