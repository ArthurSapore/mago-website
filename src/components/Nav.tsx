import header_logo from '../assets/images/logo/header-logo.svg'
import hamburger_icon from '../assets/images/icons/Hamburger-Button.svg'

export default function Nav(){

    

    function expandMenu(){

    }

    return(
        <header className=' md:bg-mago w-full  md:h-[700px] max p-6'>
            <div className='flex items-center bg-transparent'>
                <figure><img src={header_logo} alt="" /></figure>
                <h1 className='text-primary max-w-[150px] break-words text-5xl font-normal ml-4 font-[digital]'>mago</h1>
                <div className='hidden text-white text-lg ml-auto items-center font-bold md:flex'>   
                    <a className='mx-6' href="#about">Sobre</a>
                    <a className='mx-6' href="#services">Serviços</a>
                    <a className='mx-6' href="#social-media">Social</a>
                    <a className='mx-6' href="#portfolio">Portfólio</a>
                    <button className='h-12 bg-primary rounded-full px-10 cursor-pointer font-bold text-[#141414] text-base'> Entrar em contato</button>
                </div>
                <button className='ml-auto md:hidden' onClick={expandMenu}>
                    <figure><img className='max-w-xs' src={hamburger_icon} alt="" /></figure>
                </button>
            </div>

        </header>
    );
}