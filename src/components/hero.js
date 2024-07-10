'use client'
import van3 from './../assets/images/van-3.png'
export default function Hero() {
    return (
        <div id="home" className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
            <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
                <div className="flex items-center justify-center mb-4 lg:justify-normal">
                    <h4 className="ml-2 text-sm md:text-xs font-bold tracking-widest text-primary uppercase">
                        YOUR JOURNEY WITH CARE STARTS HERE
                    </h4>
                </div>
                <h1 className="mb-8 text-2xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
                    Reliable Non-Emergency Medical Transportation
                </h1>
                <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                    Experience hassle-free transportation tailored to your needs. At Purple Transit, we prioritize your comfort and safety, ensuring timely and dependable service for all your transportation needs.
                </p>
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                    <button className="flex items-center py-4 text-sm font-bold text-white px-7 bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-purple-100 transition duration-300 rounded-xl">
                        Book now
                    </button>
                    <button className="flex items-center py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl"
                        onClick={() => window.location.href = 'tel:+15712529784'}>
                        Call us
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 m-2">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd">
                            </path>
                        </svg>
                        to learn more.
                    </button>
                </div>
            </div>
            <div className="items-center justify-center col-span-1 flex">
                <img className="w-4/5 rounded-md" src={van3.src} alt="header image">
                </img>
            </div>
        </div>
    )
}