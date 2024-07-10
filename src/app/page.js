import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import Services from "../components/services";


export default function App() {
    return (
        <div>
            <div className="container flex flex-col mx-auto draggable">
                <Navigation />
                <Hero />
            </div>
            <Services />
            <div className="w-full draggable">
                <div className="container flex flex-col items-center gap-16 mx-auto my-32">
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-2 text-center">
                            <h2 className="text-2xl font-extrabold leading-tight lg:text-4xl text-dark-grey-900">
                                How Motion works?
                            </h2>
                            <p className="text-base font-medium leading-7 text-dark-grey-600">
                                Our platform is designed to provide efficient solutions and streamline your experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between w-full lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-8 xl:gap-x-10">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-purple-500">
                                <span className="text-base font-bold leading-7 text-white">
                                    1
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base font-bold leading-tight text-dark-grey-900">
                                    Create your Account
                                </h3>
                                <p className="text-base font-medium leading-7 text-dark-grey-600">
                                    Join our platform by creating your personal account today.
                                </p>
                            </div>
                        </div>
                        <div className="rotate-90 lg:rotate-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                <g clipPath="url(#clip0_3346_6663)">
                                    <path d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z" fill="#A3AED0">
                                    </path>
                                </g>
                                <defs>
                                    <clippath id="clip0_3346_6663">
                                        <rect width="42" height="42" fill="white" transform="translate(0.666748)">
                                        </rect>
                                    </clippath>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-purple-500 border-purple-500">
                                <span className="text-base font-bold leading-7">
                                    2
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base font-bold leading-tight text-dark-grey-900">
                                    Setup your Account
                                </h3>
                                <p className="text-base font-medium leading-7 text-dark-grey-600">
                                    Effortlessly configure your account to tailor it to your preferences.
                                </p>
                            </div>
                        </div>
                        <div className="rotate-90 lg:rotate-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                <g clipPath="url(#clip0_3346_6663)">
                                    <path d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z" fill="#A3AED0">
                                    </path>
                                </g>
                                <defs>
                                    <clippath id="clip0_3346_6663">
                                        <rect width="42" height="42" fill="white" transform="translate(0.666748)">
                                        </rect>
                                    </clippath>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 border-solid rounded-full shrink-0 text-purple-500 border-purple-500">
                                <span className="text-base font-bold leading-7">
                                    3
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base font-bold leading-tight text-dark-grey-900">
                                    Start creating with Motion
                                </h3>
                                <p className="text-base font-medium leading-7 text-dark-grey-600">
                                    Begin your creative endeavors with Motion and unlock endless possibilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto draggable my-16">
                <div className="grid items-center justify-center w-full lg:h-full grid-cols-1 my-auto lg:grid-cols-2 my-16">
                    <div className="flex flex-col col-span-1 text-center lg:text-start text-dark-grey-900 mb-7">
                        <h3 className="text-4xl font-extrabold leading-tight">
                            Book your ride now!
                        </h3>
                        <h3 className="text-4xl font-medium leading-tight">
                            Let us be your carrier provider with greate care.
                        </h3>
                    </div>
                    <div className="flex items-center justify-center col-span-1 lg:justify-end">
                        <button className="flex items-center py-4 text-sm font-bold text-white border px-7 rounded-2xl border-purple-500 bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-purple-100 transition duration-300">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
            <ContactUs />
            < Footer />
        </div>
    )
};