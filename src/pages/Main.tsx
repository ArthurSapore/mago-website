import emailIcon from '../assets/images/icons/email.svg'
import localizationIcon from '../assets/images/icons/localization.svg'
import telephoneIcon from '../assets/images/icons/telephone.svg'
import facebookIcon from '../assets/images/icons/Facebook.svg'
import linkedinIcon from '../assets/images/icons/LinkedIn.svg'
import pinterestIcon from '../assets/images/icons/Pinterest.svg'
import twitterIcon from '../assets/images/icons/Twitter.svg'

import image39 from '../assets/images/image 39.png'
import image40 from '../assets/images/image 40.png'
import image41 from '../assets/images/image 41.png'
import image42 from '../assets/images/image 42.png'
import image43 from '../assets/images/image 43.png'

import arts from '../assets/images/arts.png'
import idVisual from '../assets/images/idVisual.png'
import animation from '../assets/images/animation.png'



import footer_logo from '../assets/images/logo/logo2 1.svg'

export default function Main(){

    return(
        <>
            <main>
                <div className=''>   
                    <div id="about" className='text-white text-center p-12'> 
                        <img src="" alt="" />   
                        <h1 className='text-primary text-3xl font-normal font-[digital] my-5'>Sobre</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, delectus quasi. Quos dolores temporibus odit laboriosam eaque delectus nobis nesciunt quidem, vero harum unde ducimus corrupti ad distinctio impedit provident?</p>
                    </div>
                    <div id="services" className='flex flex-col items-center'>
                        <h1 className='text-primary text-3xl font-normal my-5 font-[digital]'>SERVIÇOS</h1>
                        <div className='px-8 md:flex  '>
                            <div className='p-5'>
                                <h1>Artes</h1>
                                <img className='' src={arts} alt="" />
                            </div>

                            <div  className='p-5'>
                                <h1>Identidade visual</h1>
                                <img src={idVisual} alt="" />
                            </div>

                            <div  className='p-5'>
                                <h1>Animações</h1>
                                <img src={animation} alt="" />
                            </div>


                        </div>
                    </div>
                    
                    <div id="portfolio" className='flex flex-col items-center my-10 w-full'>
                        <h1 className='text-primary text-3xl font-normal my-5 font-[digital]'>PORTFÓLIO</h1>
                        <div className='flex flex-col'>
                            <div className='flex px-1'>
                                <div className='p-2'>
                                    <img className=' object-cover h-48 w-96 ' src={image39} alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className='object-cover h-48 w-96 ' src={image41} alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className='object-cover h-48 w-96 ' src={image40} alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className='object-cover h-48 w-96 ' src={image40} alt="" />
                                </div>
                            </div>
                            <div className='flex'> 
                                <div className='p-2'>
                                    <img className='object-cover h-48 w-96 ' src={image40} alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className='object-cover h-48 w-96 ' src={image42} alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className='object-cover h-48 w-96 ' src={image43} alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className='object-cover h-48 w-96 ' src={image42} alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className=' object-cover h-48 w-96 ' src={image39} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <footer id='footer' className='mt-36'>
                <div className='lg:flex lg:items-start lg:px-36 lg:justify-between lg:w-full'>
                    <div id="links" className='flex flex-col items-center my-1 py-6 md:order-2 md'>
                        <h1 className='text-primary text-md tracking-[0.2em] font-bold text-base'>LINKS</h1>
                        <div className='flex w-full justify-evenly my-4 text-white lg:flex-col'>
                            <a href="/">Home</a>
                            <a href="/"> Sobre</a>
                            <a href="/">Serviços</a>
                            <a href="/">Portfólio</a>
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
                        <img className='py-6' src={footer_logo} alt="" />
                    </div>
                </div>
                <div id='separator' className='flex flex-col items-center p-8'>
                    <div className="h-px bg-second  w-full m-4"></div>
                    <span className="text-sm tracking-[0.2em] uppercase font-bold text-second">mago 2023</span>
                </div>

            </footer>

        </>
    );
}