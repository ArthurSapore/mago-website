import emailIcon from '../assets/images/icons/email.svg'
import localizationIcon from '../assets/images/icons/localization.svg'
import telephoneIcon from '../assets/images/icons/telephone.svg'
import facebookIcon from '../assets/images/icons/Facebook.svg'
import linkedinIcon from '../assets/images/icons/LinkedIn.svg'
import pinterestIcon from '../assets/images/icons/Pinterest.svg'
import twitterIcon from '../assets/images/icons/Twitter.svg'
import footer_logo from '../assets/images/logo/logo2 1.svg'

export default function Footer(){
    return(
        <footer id='footer' className='mt-36'>
            <div className='lg:flex lg:items-start lg:px-36 lg:justify-between lg:w-full'>
                <div id="links" className='flex flex-col items-center my-1 py-6 md:order-2 md'>
                    <h1 className='text-primary text-md tracking-[0.2em] font-bold text-base'>LINKS</h1>
                    <div className='flex w-full justify-evenly my-4 text-white lg:flex-col'>
                        <a href="/">Home</a>
                        <a href="#about"> Sobre</a>
                        <a href="#services">Serviços</a>
                        <a href="#portfolio">Portfólio</a>
                    </div>
                </div>
                <div id="social-media" className='flex flex-col items-center my-1 py-6 md:order-4 md:mt-0 '>
                    <h1 className='text-primary text-md tracking-[0.2em] font-bold text-base'>SOCIAL MEDIA</h1>
                    <div className='flex w-full justify-evenly mt-4'>
                        <a href="/">
                            <img src={facebookIcon} alt="" />
                        </a>
                        <a href="/">
                            <img src={twitterIcon} alt="" />
                        </a>
                        <a href="/">
                            <img src={linkedinIcon} alt="" />
                        </a>
                        <a href="/">
                            <img src={pinterestIcon} alt="" />
                        </a>
                    </div>
                </div>
                <div id="contacts" className='flex flex-col my-1 py-6 ml-4 md:mt-0 md:order-3 '>
                    <h1 className='text-primary text-md tracking-[0.2em] font-bold text-base'>CONTATOS</h1>
                    <div className='flex flex-col mx-0  my-4 text-white'>
                        <div className='m-0'>
                            <span><img className='inline pr-4' src={emailIcon} alt="" />teste@gmail.com</span>
                        </div>
                        <div className='m-0'>
                            <span><img className='inline pr-4' src={localizationIcon} alt="" />Érico Veríssimo, 2000</span>
                        </div>
                        <div className='m-0'>
                            <span><img className='inline pr-4' src={telephoneIcon} alt="" />xx-xxxxx-xxx</span>
                        </div>
                    </div>
                </div>
                <div id="footer-logo" className=" md:order-1 ">
                    <img className='py-6 mx-auto' src={footer_logo} alt="" />
                </div>
            </div>
            <div id='separator' className='flex flex-col items-center p-8'>
                <div className="h-px bg-second  w-full m-4"></div>
                <span className="text-sm tracking-[0.2em] uppercase font-bold text-second">mago 2023</span>
            </div>
        </footer>
    );

}