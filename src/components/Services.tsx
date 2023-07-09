import arts from '../assets/images/arts.png'
import idVisual from '../assets/images/idVisual.png'
import animation from '../assets/images/animation.png'

export default function Services (){
    return(
        <section id="services" className='flex flex-col items-center my-5'>
            <h1 className='text-primary text-3xl font-normal my-5 font-[digital]'>SERVIÇOS</h1>
            <div className='px-8 md:flex  '>
                <article className='p-5'>
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

    );

}