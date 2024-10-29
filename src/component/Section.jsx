import ImageHero from '../assets/image-hero-desktop.png'

export default function Section() {
    return (
        <div className="w-screen lg:px-40 sm:px-10 md:mt-10 section flex items-center justify-center gap-20">
            <div className='w-screen  flex flex-col items-start gap-10'>
                <div className='font-bold text-6xl mb-5 break-words'>Make Remote Work</div>
                <div className='text-3xl w-100 text-clip break-words'>Get your team in sync, no matter the Location. Streamline processes,create team rituals
                    and watch productivity soar
                </div>
                <button className='bg-slate-900 px-20 py-5 sm:px-10 md:px-10 text-white text-xl sm:text-[1rem] md:text-[1rem] font-bold rounded-xl'>Learn more</button>
            </div>
            <div>
                <img 
                    src={ImageHero} 
                    alt="Hero-image" 
                />
            </div>
        </div>
    )
}