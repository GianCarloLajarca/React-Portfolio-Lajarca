import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import useQueryData from '../../../../custom-hook/useQueryData'
import Header from '../../../../partials/Header'
import Navigation from '../../../../partials/Navigation'
import Toast from '../../../../partials/Toast'
import ModalError from '../../../../partials/modals/ModalError'
import ExperienceTable from './ExperienceTable'
import ModalAddExperience from './ModalAddExperience'
import { Link } from 'react-router-dom'
import { SiAboutdotme } from 'react-icons/si'
import { IoIosBriefcase } from 'react-icons/io'
import { GiGraduateCap, GiSkills, GiVerticalBanner } from 'react-icons/gi'
import { IoPersonSharp } from 'react-icons/io5'
import { FaCertificate, FaUserCircle } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { MdContactPage, MdDashboard, MdOutlineCallToAction } from 'react-icons/md'
import Searchbar from '../../../../partials/Searchbar'

const Experience = () => {

    const {store, dispatch} = React.useContext(StoreContext);
    const [isSearch, setIsSearch] = React.useState(false);
    const[keyword, setKeyword] = React.useState('');
    const [itemEdit, setItemEdit] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: experience,
      } = useQueryData(
        isSearch ? "/v1/experience/search" : "/v1/experience", // endpoint
        isSearch ? "post" : "get", // method
        "experience", // key
        {
            searchValue: keyword
        }
      );

      const handleAdd = () => {
        dispatch(setIsAdd(true));
        setItemEdit(null)
  }

  return (
    <section className='flex overflow-x-hidden'>
        <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line'>
            <Navigation/>
        <ul className='nav'>
            <li className='nav-link'><Link to="/dashboard"><MdDashboard />Dashboard</Link></li>
            <li className='nav-link'><Link to="/users"><FaUserCircle />Users</Link></li>
            <li className='nav-link'><Link to="/banner"><GiVerticalBanner />Banner</Link></li>
            <li className='nav-link'><Link to="/about"><SiAboutdotme/>About</Link></li>
            <li className='nav-link'><Link to="/service"><IoIosBriefcase/>Services</Link></li>
            <li className='nav-link'><Link to="/skill"><GiSkills/>Skills</Link></li>
            <li className='nav-link'><Link to="/education"><GiGraduateCap />Education</Link></li>
            <li className='nav-link active'><Link to="/experience"><IoPersonSharp/>Experience</Link></li>
            <li className='nav-link'><Link to="/honor"><FaCertificate/>Honor Certifications</Link></li>
            <li className='nav-link'><Link to="/top"><FaCertificate/>Top Student Certifications</Link></li>
            <li className='nav-link'><Link to="/certificate"><FaCertificate/>Foundation Certifications</Link></li>
            <li className='nav-link'><Link to="/project"><GrProjects/>Projects</Link></li>
            <li className='nav-link'><Link to="/cta"><MdOutlineCallToAction/>Call To Action</Link></li>
            <li className='nav-link'><Link to="/contact"><MdContactPage/>Contact</Link></li>
        </ul>

        </aside>
        <main className='w-[calc(100%-250px)]'>
            <Header/>
            <div className='flex'>
                <div className={`main-wrapper px-4 transition-all py-3 sticky top-0 w-full`}>
                <div className='flex justify-between items-center'>
                    <h1>Experience Database</h1>
                    <Searchbar setIsSearch={setIsSearch} setKeyword={setKeyword}/>
                    
                </div>

                <div className='tab flex justify-end items-center mt-8 border-b border-line mb-8 pb-4'>
                    <button className='btn btn--accent text-primary border border-accent hover:bg-primary hover:text-accent hover:border hover:border-accent' onClick={handleAdd}>
                        <FiPlus /> New
                    </button>
                </div>

                <ExperienceTable isLoading={isLoading} experience={experience} isFetching={isFetching} setItemEdit={setItemEdit}/>
            </div>
        </div>  
    </main>


    {store.isAdd && <ModalAddExperience itemEdit={itemEdit}/>}

    {store.error && <ModalError position="center"/>}
    {store.success && <Toast/>}
    
    </section>
  )
}

export default Experience