import header_logo from '../assets/images/logo/header-logo.svg'
import hamburger_icon from '../assets/images/icons/Hamburger-Button.svg'
import { useState } from 'react';


export default function Nav(){

    const [hideMenu, setHideMenu] = useState(true);

    function expandMenu(){
        setHideMenu(true);
        
        if(hideMenu){
            setHideMenu(false);
        }
    }

    return(
        <header className='mb-10 lg:bg-mago w-full  lg:h-[700px] p-6'>
            <div className='flex items-center bg-transparent'>
                <figure><img src={header_logo} alt="" /></figure>
                <h1 className='text-primary max-w-[150px] break-words text-5xl font-normal ml-4 font-[digital]'>mago</h1>
                <div className='hidden text-white text-lg ml-auto items-center font-bold lg:flex'>   
                    <a className='mx-6' href="#about">Sobre</a>
                    <a className='mx-6' href="#services">Serviços</a>
                    <a className='mx-6' href="#social-media">Social</a>
                    <a className='mx-6' href="#portfolio">Portfólio</a>
                    <button className='h-12 bg-primary rounded-full px-10 cursor-pointer font-bold text-[#141414] text-base'> Entrar em contato</button>
                </div>
                <button className='ml-auto lg:hidden' onClick={expandMenu}>
                    {
                        hideMenu?(
                            <figure><img className='max-w-xs' src={hamburger_icon} alt="" /></figure>
                        ): (
                            <>
                                <span className='text-primary font-extrabold text-lg'>X</span>
                                <div className=' absolute flex flex-col top-36 left-0 w-full h-1-/2 rounded-b-lg bg-[#171717] py-5 bg-opacity-90 text-white text-lg ml-auto items-center font-bold '>   
                                    <a className='m-3' href="#about">Sobre</a>
                                    <a className='m-3' href="#services">Serviços</a>
                                    <a className='m-3' href="#social-media">Social</a>
                                    <a className='m-3' href="#portfolio">Portfólio</a>
                                    <a className='flex items-center h-12 mt-5 bg-primary rounded-full px-10 cursor-pointer font-bold  text-[#141414] text-base'> Entrar em contato</a>
                                </div>
                            </>
                        )
                    }
                </button>
            </div>
        </header>
    );
}