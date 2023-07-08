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
import mago from '../assets/images/mago.png'

import arts from '../assets/images/arts.png'
import idVisual from '../assets/images/idVisual.png'
import animation from '../assets/images/animation.png'



import footer_logo from '../assets/images/logo/logo2 1.svg'
import header_logo from '../assets/images/logo/header-logo.svg'

export default function Main(){

    return(
        <>
            <header className=' md:bg-mago w-full h-[700px] max p-6'>
                <div className='flex items-center bg-transparent !important'>
                    <figure><img src={header_logo} alt="" /></figure>
                    <h1 className='text-primary text-5xl font-normal ml-4 font-[digital]'>mago</h1>
                    <div className='flex text-white text-lg font-bold'>   
                        <a className='mx-6' href="#about">Sobre</a>
                        <a className='mx-6' href="#services">Serviços</a>
                        <a className='mx-6' href="#social-media">Social</a>
                        <a className='mx-6' href="#portfolio">Portfólio</a>
                    </div>
                    <button className='h-12 bg-primary rounded-full px-10 cursor-pointer font-bold text-[#141414] text-base'> Entrar em contato</button>
                </div>

            </header>
            <main>
                <div className=''>   
                    <section id="about"  className=' my-5'>     
                        <h1 className=' flex justify-center text-primary text-3xl font-normal my-5 font-[digital]'>Sobre</h1>
                        <div className='flex flex-col text-white text-center items-center p-1 lg:flex-row '>
                            <article className=' flex min-w-max h-auto my-2 lg:order-2'>
                                <img className='object-cover w-72 h-72 rounded-full ' src={mago} alt="" />   
                            </article>
                            <article className='max-w-[48.em] p-12 lg:order-1'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum possimus dignissimos dolor laborum, facilis quo eveniet dolore accusantium. Possimus voluptatum, dolorum excepturi est quidem vel ducimus et facilis quisquam tenetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur deleniti, sunt quo adipisci accusamus est, ducimus fugit asperiores exercitationem veniam pariatur ipsum itaque corporis, vero rerum architecto amet dignissimos distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, delectus quasi. Quos dolores temporibus odit laboriosam eaque delectus nobis nesciunt quidem, vero harum unde ducimus corrupti ad distinctio impedit provident?</p>
                            </article>
                        </div>
                    </section>
                    <section id="services" className='flex flex-col items-center my-5'>
                        <h1 className='text-primary text-3xl font-normal my-5 font-[digital]'>SERVIÇOS</h1>
                        <div className='px-8 md:flex  '>
                            <article className='p-5 '>
                                <h1>Artes</h1>
                                <figure><img className='object-none' src={arts} alt="" /></figure>
                            </article>
                            <article  className='p-5'>
                                <h1>Identidade visual</h1>
                                <figure><img className='object-none' src={idVisual} alt="" /></figure>
                            </article>
                            <article  className='p-5'>
                                <h1>Animações</h1>
                                <figure><img className='object-none' src={animation} alt="" /></figure>
                            </article>
                        </div>
                    </section>
                    
                    <section id="portfolio" className='flex flex-col items-center my-5 w-full'>
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
                    </section>
                </div>
            </main>
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