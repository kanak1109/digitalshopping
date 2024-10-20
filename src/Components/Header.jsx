import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import Navbar from './Navbar';
import logo from '../assets/assets/logo.svg';
import logout from '../assets/assets/logout.svg'
import user from '../assets/assets/user.svg'
import {FaOpencart} from 'react-icons/fa';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(prev => !prev);
  };
  const {getTotalCartItems}=useContext(ShopContext);

  return (
    <header className='fixed top-0 left-0 right-0 m-auto max-padd-container w-full bg-white ring-1 ring-slate-900/5 z-10'>
      <div className='px-4 flex justify-between items-center py-3 max-xs:px-2'>
        <div>
          <Link to="/">
            <img src={logo} height={66} width={88} alt='Company Logo' />
          </Link>
        </div>
        <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15 capitalize" />
        <Navbar 
          containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
             : 
          "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}
        />
        <div className='flex items-center sm:gap-x-6'>
          <div onClick={toggleMenu} className='cursor-pointer'>
            {menuOpened ? 
              <MdClose className='md:hidden hover:text-secondary mr-2 p-1 ring -1 ring-slate-900/30 h-8 w-8 rounded-full' />
              : 
              <MdMenu className='md:hidden hover:text-secondary mr-2 p-1 ring -1 ring-slate-900/30 h-8 w-8 rounded-full' />}
          </div>
          <div className='flexBetween sm:gap-x-3'>
<NavLink to={"cart-page"} className={"flex"}><FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full"/>
<span className='relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2'>{getTotalCartItems()}</span>
</NavLink>
<NavLink to={"logout"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}><img src={logout} alt="/logout" height={19 } width={19}/>Logout</NavLink>

<NavLink to={"login"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}><img src={user} alt="/login" height={19 } width={19}/>Login</NavLink>
            
            
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
