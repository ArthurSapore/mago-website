
import image39 from '../assets/images/image 39.png'
import image40 from '../assets/images/image 40.png'
import image41 from '../assets/images/image 41.png'
import image42 from '../assets/images/image 42.png'
import image43 from '../assets/images/image 43.png'
import mago from '../assets/images/mago.png'

import arts from '../assets/images/arts.png'
import idVisual from '../assets/images/idVisual.png'
import animation from '../assets/images/animation.png'



import Nav from '../components/Nav'
import '../styles/main.css'
import Footer from '../components/Footer'


export default function Main(){



    return(
        <div>
            <Nav/>
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
                        <div className='px-8 md:flex hover:cursor-pointer '>
                            <article className='p-5 relative'>
                                <h1 className='absolute top-36 left-20 font-medium text-4xl text-white'>Artes</h1>
                                <figure><img className='object-none' src={arts} alt="" /></figure>
                            </article>
                            <article className='p-5 relative hover:animate-ping'>
                                <h1 className='absolute top-36 left-20 font-medium text-4xl text-white'>Artes</h1>
                                <figure><img className='object-none' src={arts} alt="" /></figure>
                            </article>
                        </div>
                    </section>

                    <section id="portfolio" className='flex flex-col items-center my-5 w-full'>
                        <h1 className='text-primary text-3xl max-w-full text-center break-words font-normal my-5 font-[digital]'>PORTFÓLIO</h1>
                        <div className="flex flex-wrap md:-m-2 -m-1">
                            <div className="flex flex-wrap w-1/2">
                                <div className="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src={image39}/>
                                </div>
                                <div className="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src={image40}/>
                                </div>
                                <div className="md:p-2 p-1 w-full">
                                    <img alt="gallery" className="w-full h-full object-cover object-center block" src={image41}/>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="md:p-2 p-1 w-full">
                                    <img alt="gallery" className="w-full h-full object-cover object-center block" src={image42}/>
                                </div>
                                <div className="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src={image43}/>
                                </div>
                                <div className="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src={image43}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>

    );
}