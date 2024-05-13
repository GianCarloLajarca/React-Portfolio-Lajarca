import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import ProjectTable from './ProjectTable'
import { FiPlus } from 'react-icons/fi'
import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'
import { Link } from 'react-router-dom'
import { SiAboutdotme } from 'react-icons/si'
import { IoIosBriefcase } from 'react-icons/io'
import { GiSkills } from 'react-icons/gi'
import { IoPersonSharp } from 'react-icons/io5'
import { FaCertificate } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import ModalAddProject from './ModalAddProject'

const Project = () => {
    const {store, dispatch} = React.useContext(StoreContext);
    const [isSearch, setIsSearch] = React.useState(false);
    const[keyword, setKeyword] = React.useState('');
    const [itemEdit, setItemEdit] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: project,
      } = useQueryData(
        isSearch ? "/v1/project/search" : "/v1/project", // endpoint
        isSearch ? "post" : "get", // method
        "project", // key
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
            <li className='nav-link'><Link to="/about"><SiAboutdotme/>About</Link></li>
            <li className='nav-link'><Link to="/service"><IoIosBriefcase/>Services</Link></li>
            <li className='nav-link'><Link to="/skill"><GiSkills/>Skills</Link></li>
            <li className='nav-link'><Link to="/experience"><IoPersonSharp/>Experience</Link></li>
            <li className='nav-link'><Link to="/honor"><FaCertificate/>Honor Certifications</Link></li>
            <li className='nav-link'><Link to="/top"><FaCertificate/>Top Student Certifications</Link></li>
            <li className='nav-link'><Link to="/certificate"><FaCertificate/>Foundation Certifications</Link></li>
            <li className='nav-link active'><Link to="/project"><GrProjects/>Projects</Link></li>
        </ul>
        </aside>
        <main className='w-[calc(100%-250px)]'>
            <Header/>
            <div className='flex'>
                <div className={`main-wrapper px-4 transition-all py-3 sticky top-0 w-full`}>
                <div className='flex justify-between items-center'>
                    <h1>Projects Database</h1>
                    {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                    
                </div>

                <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                    <h2>Search</h2>
                    <button className='btn btn--accent' onClick={handleAdd}>
                        <FiPlus /> New
                    </button>
                </div>

                <ProjectTable isLoading={isLoading} project={project} isFetching={isFetching} setItemEdit={setItemEdit}/>
            </div>
        </div>  
    </main>


    {store.isAdd && <ModalAddProject itemEdit={itemEdit}/>}

    {store.error && <ModalError position="center"/>}
    {store.success && <Toast/>}
    
    </section>
  )
}

export default Project