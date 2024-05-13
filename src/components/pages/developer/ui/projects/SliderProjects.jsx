import React from 'react';
import { BsFillHddNetworkFill } from 'react-icons/bs';
import { FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { MdOutlineSecurity } from 'react-icons/md';
import Slider from "react-slick";
import { baseImgUrl } from '../../../../helpers/functions-general';

const SliderProjects = ({setProjectInterface}) => {

    const handleShowProjectInterface = () => {
        setProjectInterface(true)
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      };
      
  return (
    <>
        <div className='slider-projects py-20'>
         <div className='slider-projects-title flex flex-col gap-4 mb-20 max-w-[45rem] mx-auto leading-8'>
                <h2 className='text-accent text-4xl text-center'>Projects</h2>
                <p className='text-md text-stone-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam exercitationem at aspernatur eligendi labore corrupti.</p>
        </div>
            <Slider {...settings} className='px-20 cursor-pointer'>
            <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                    <img src={`${baseImgUrl}/home/projects-1.png`} alt="" className='w-full h-[14 rem] mx-auto object-contain'/>
                        <h3>Simon Game</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>My Simon Game project is a web-based adaptation of the classic memory game, recreated using HTML, CSS, and JavaScript. 
                            Players are tasked with replicating a sequence of colors and sounds, with the difficulty increasing as they progress. interactions.</p>
                        <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>
                <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                    <img src={`${baseImgUrl}/home/projects-2.png`} alt="" className='w-full h-[14rem] mx-auto object-contain'/>
                        <h3>Drum Kit</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>The Drum Kit project is an interactive web app that lets users play virtual drums by clicking on drum pads. It's built with HTML, CSS, and JavaScript, showcasing my front-end development skills. Each pad produces a specific sound, mimicking a real drum set. </p>
                        <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>

                <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                    <img src={`${baseImgUrl}/home/projects-3.png`} alt="" className='w-full h-[14rem] mx-auto object-contain'/>
                        <h3>Dice Game</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>The Dice Game project in my portfolio is a web-based game created using HTML, CSS, and JavaScript. 
                            It provides an entertaining platform for users to roll virtual dice and engage in a simple yet enjoyable gaming experience. 
                             </p>
                    <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>

                <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                        <img src={`${baseImgUrl}/home/projects-4.png`} alt="" className='w-full h-[14rem]  mx-auto object-contain'/>
                        <h3>Creative Design Agency Website</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>The Creative Design Agency Website in my portfolio is a visually stunning and professionally crafted web platform designed to showcase the agency's creativity and services. 
                            Developed using HTML, CSS, and JavaScript, the website features a modern and sleek design with captivating visuals and smooth animations.</p>
                            <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>

                <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                    <img src={`${baseImgUrl}/home/projects-5.png`} alt="" className='w-full h-[14rem]  mx-auto object-contain'/>
                        <h3>Move It</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>MoveIt is a comprehensive website offering premium moving services throughout the United States. Our platform is designed to simplify the moving process and alleviate the stress commonly associated with relocation. 
                            At MoveIt, we prioritize customer satisfaction, striving to make every move seamless and enjoyable. </p>
                        <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>
                <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                        <img src={`${baseImgUrl}/home/projects-6.png`} alt="" className='w-full h-[14rem] mx-auto object-contain'/>
                        <h3>TinDog</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>The Tin Dog Website is a unique online platform designed for dog lovers to connect their furry companions for playdates and socializing, inspired by the popular dating app Tinder. 
                             </p>
                        <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>

              
                    <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                        <img src={`${baseImgUrl}/home/projects-7.png`} alt="" className='w-full h-[14rem] mx-auto object-contain'/>
                        <h3>WonderTour</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam ex? Repellendus minus omnis laudantium iste? Natus, quae ab soluta doloremque earum aliquam eaque non obcaecati, a odit, eum alias!</p>
                        <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all' onClick={() => handleShowProjectInterface()}>View Project Interface</button>
                    </div>   
                    </div>

                <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                        <img src={`${baseImgUrl}/home/projects-8.png`} alt="" className='w-full h-[14rem] mx-auto object-contain'/>
                        <h3>Netflix</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam ex? Repellendus minus omnis laudantium iste? Natus, quae ab soluta doloremque earum aliquam eaque non obcaecati, a odit, eum alias!</p>
                        <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>

                <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                        <img src={`${baseImgUrl}/home/projects-9.png`} alt="" className='w-full h-[14rem] mx-auto object-contain'/>
                        <h3>Youtube</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam ex? Repellendus minus omnis laudantium iste? Natus, quae ab soluta doloremque earum aliquam eaque non obcaecati, a odit, eum alias!</p>
                        <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>

                <div className='projects-card p-5 text-center bg-darkblue shadow-md h-[700px] hover:bg-accent  hover:bg-opacity-40 transition-all'>
                    <div className='flex flex-col gap-10 p-12'>
                        <img src={`${baseImgUrl}/home/projects-10.png`} alt="" className='w-full h-[14rem] mx-auto object-contain'/>
                        <h3>Starbucks</h3>
                        <ul className='flex justify-between opacity-55 mb-2'>
                             <li><small>Web Development</small></li>
                              <li><small>13/05/2024</small></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam ex? Repellendus minus omnis laudantium iste? Natus, quae ab soluta doloremque earum aliquam eaque non obcaecati, a odit, eum alias!</p>
                        <button className='bg-accent rounded-md w-full justify-center py-3 text-primary font-thick hover:bg-primary hover:text-white transition-all'>View Project Interface</button>
                    </div>   
                </div>
                
            </Slider>
        </div>
    </>
  );
}

export default SliderProjects