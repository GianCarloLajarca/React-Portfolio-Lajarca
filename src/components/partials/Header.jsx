import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { LiaAngleDownSolid, LiaKeySolid, LiaSignOutAltSolid, LiaUserCircle } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../store/StoreContext'
import { checkLocalStorage } from '../helpers/functions-general'
import DarkMode from '../DarkMode/DarkMode'

const Header = () => {
    const [showDropDown, setShowDropDown] = React.useState(false);
    
    const {store} = React.useContext(StoreContext)

    const name = store.credentials?.data.user_name
    const email = store.credentials?.data.user_email

    const handleDropDown = () => setShowDropDown(!showDropDown)

    const handleLogout = () => {
        setTimeout(() => {
          if (checkLocalStorage() !== null) {
            localStorage.removeItem("glatoken");
               window.location.replace(`/login`);
            return;
          }
        }, 1500);
      };

    const handleChangeColorTheme = (color) => {
        if(localStorage.getItem("theme") === "white") {
            localStorage.setItem("theme", "dark") 
        } else {
            localStorage.setItem("theme", "white")
        }

        document.querySelector("body").setAttribute('class', "");
        document.querySelector("body").setAttribute('class', localStorage.getItem("theme"));
        }

  return (
    <header className='header px-4 py-3 border-b border-line'>
        <div className='flex justify-end items-center gap-4 w-full relative'>
            <DarkMode/>
            <button className='text-3xl' onClick={() => handleChangeColorTheme('dark')}><CiBellOn/></button>
            <img src="https://via.placeholder.com/40x40" alt="" className='size-[40px] rounded-full object-cover'/>
            <div>
                <button className='flex items-center gap-5' onClick={handleDropDown}>{name} <LiaAngleDownSolid /></button>
                <div className={`${showDropDown ? "block" : "hidden"} header-dropdown absolute bg-secondary p-4 rounded-md right-0 top-[calc(100%+10px)] text-center shadow-xs
                z-50`}>
                    <img src="https://via.placeholder.com/40x40" alt="" className='size-[40px] rounded-full object-cover mx-auto'/>
                    <h4 className='mb-1'>{name}</h4>
                    <p className='text-sm w-[150px] truncate'>{email}</p>
                    <ul className='flex justify-center gap-5'>
                        <li><Link to="#" className='text-2xl'><LiaUserCircle/></Link></li>
                        <li><Link to="#" className='text-2xl'><LiaKeySolid/></Link></li>
                        <li><button to="#" className='text-2xl' onClick={handleLogout}
                        ><LiaSignOutAltSolid/></button></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header