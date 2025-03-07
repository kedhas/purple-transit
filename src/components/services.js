export default function Services() {
    return (
        <div id="services" className="container mx-auto draggable">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center mt-12">
                    <h2 className="mb-4 text-2xl font-extrabold leading-tight text-center lg:text-4xl text-dark-grey-900">
                        Elevate Your Productivity with Motion
                    </h2>
                    <p className="text-lg text-center lg:w-7/12 text-grey-700">
                        Unlock the full potential of your workflow with Windbase. Our platform is designed to streamline your operations and boost productivity. Experience the difference as we help you save time and work more efficiently.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3 md:grid-cols-2">
                    <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M22.8233 8C22.8233 7.28 22.4533 6.65 21.8833 6.3L12.8333 1L3.78331 6.3C3.21331 6.65 2.83331 7.28 2.83331 8V18C2.83331 19.1 3.73331 20 4.83331 20H20.8333C21.9333 20 22.8333 19.1 22.8333 18L22.8233 8ZM20.8233 8V8.01L12.8333 13L4.83331 8L12.8333 3.32L20.8233 8ZM4.83331 18V10.34L12.8333 15.36L20.8233 10.37L20.8333 18H4.83331Z" fill="white">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-2 text-center">
                            <h4 className="text-2xl font-extrabold text-dark-grey-900">
                                Streamline Team Communication
                            </h4>
                            <p className="font-medium text-grey-700">
                                Streamline communication within your team using our shared team inboxes. Enhance collaboration and keep everyone on the same page effortlessly.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5 bg-white shadow-main rounded-3xl">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M3.28996 14.78L3.19996 14.69C2.80996 14.3 2.80996 13.67 3.19996 13.28L9.28996 7.18C9.67996 6.79 10.31 6.79 10.7 7.18L13.99 10.47L20.38 3.29C20.76 2.86 21.43 2.85 21.83 3.25C22.2 3.63 22.22 4.23 21.87 4.62L14.7 12.69C14.32 13.12 13.66 13.14 13.25 12.73L9.99996 9.48L4.69996 14.78C4.31996 15.17 3.67996 15.17 3.28996 14.78ZM4.69996 20.78L9.99996 15.48L13.25 18.73C13.66 19.14 14.32 19.12 14.7 18.69L21.87 10.62C22.22 10.23 22.2 9.63 21.83 9.25C21.43 8.85 20.76 8.86 20.38 9.29L13.99 16.47L10.7 13.18C10.31 12.79 9.67996 12.79 9.28996 13.18L3.19996 19.28C2.80996 19.67 2.80996 20.3 3.19996 20.69L3.28996 20.78C3.67996 21.17 4.31996 21.17 4.69996 20.78Z" fill="white">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-2 text-center">
                            <h4 className="text-2xl font-extrabold text-dark-grey-900">
                                Gain Insights with Analytics
                            </h4>
                            <p className="font-medium text-grey-700">
                                Gain valuable insights and data analytics for your team through our analytics dashboard. Make informed decisions and track your progress effectively.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M15.8766 12.71C16.857 11.9387 17.5726 10.8809 17.9239 9.68394C18.2751 8.48697 18.2445 7.21027 17.8364 6.03147C17.4283 4.85267 16.6629 3.83039 15.6467 3.10686C14.6305 2.38332 13.4141 1.99451 12.1666 1.99451C10.9192 1.99451 9.70274 2.38332 8.68655 3.10686C7.67037 3.83039 6.90497 4.85267 6.49684 6.03147C6.0887 7.21027 6.05814 8.48697 6.40938 9.68394C6.76063 10.8809 7.47623 11.9387 8.45662 12.71C6.7767 13.383 5.31091 14.4994 4.21552 15.9399C3.12012 17.3805 2.43619 19.0913 2.23662 20.89C2.22218 21.0213 2.23374 21.1542 2.27065 21.2811C2.30756 21.4079 2.36909 21.5263 2.45173 21.6293C2.61864 21.8375 2.86141 21.9708 3.12662 22C3.39184 22.0292 3.65778 21.9518 3.86595 21.7849C4.07411 21.618 4.20745 21.3752 4.23662 21.11C4.45621 19.1552 5.38831 17.3498 6.85484 16.0388C8.32137 14.7278 10.2195 14.003 12.1866 14.003C14.1537 14.003 16.0519 14.7278 17.5184 16.0388C18.9849 17.3498 19.917 19.1552 20.1366 21.11C20.1638 21.3557 20.2811 21.5827 20.4657 21.747C20.6504 21.9114 20.8894 22.0015 21.1366 22H21.2466C21.5088 21.9698 21.7483 21.8373 21.9132 21.6313C22.078 21.4252 22.1547 21.1624 22.1266 20.9C21.9261 19.0962 21.2385 17.381 20.1375 15.9382C19.0364 14.4954 17.5635 13.3795 15.8766 12.71ZM12.1666 12C11.3755 12 10.6021 11.7654 9.94434 11.3259C9.28655 10.8864 8.77385 10.2616 8.4711 9.53074C8.16835 8.79983 8.08914 7.99557 8.24348 7.21964C8.39782 6.44372 8.77879 5.73099 9.3382 5.17158C9.89761 4.61217 10.6103 4.2312 11.3863 4.07686C12.1622 3.92252 12.9665 4.00173 13.6974 4.30448C14.4283 4.60724 15.053 5.11993 15.4925 5.77772C15.932 6.43552 16.1666 7.20888 16.1666 8C16.1666 9.06087 15.7452 10.0783 14.9951 10.8284C14.2449 11.5786 13.2275 12 12.1666 12Z" fill="white">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-2 text-center">
                            <h4 className="text-2xl font-extrabold text-dark-grey-900">
                                Provide Instant Solutions
                            </h4>
                            <p className="font-medium text-grey-700">
                                Deliver instant answers to your customers or team members with our shared team inboxes. Ensure quick responses and efficient problem-solving.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M7.83331 4C7.83331 2.89 6.94331 2 5.83331 2C4.72331 2 3.83331 2.89 3.83331 4C3.83331 5.11 4.72331 6 5.83331 6C6.94331 6 7.83331 5.11 7.83331 4ZM11.0233 4.5C10.6133 4.5 10.2633 4.75 10.1033 5.13C9.66331 6.23 8.59331 7 7.33331 7H4.33331C3.50331 7 2.83331 7.67 2.83331 8.5V11H8.83331V8.74C10.2633 8.29 11.4133 7.21 11.9533 5.83C12.2133 5.19 11.7133 4.5 11.0233 4.5ZM19.8333 17C20.9433 17 21.8333 16.11 21.8333 15C21.8333 13.89 20.9433 13 19.8333 13C18.7233 13 17.8333 13.89 17.8333 15C17.8333 16.11 18.7233 17 19.8333 17ZM21.3333 18H18.3333C17.0733 18 16.0033 17.23 15.5633 16.13C15.4133 15.75 15.0533 15.5 14.6433 15.5C13.9533 15.5 13.4533 16.19 13.7033 16.83C14.2533 18.21 15.3933 19.29 16.8233 19.74V22H22.8233V19.5C22.8333 18.67 22.1633 18 21.3333 18ZM18.0833 11.09C18.0833 11.09 18.0833 11.08 18.0933 11.09C17.0333 11.36 16.1933 12.2 15.9233 13.26V13.25C15.8133 13.68 15.4133 14 14.9433 14C14.3933 14 13.9433 13.55 13.9433 13C13.9433 12.95 13.9633 12.86 13.9633 12.86C14.3933 11.01 15.8533 9.55 17.7133 9.13C17.7533 9.13 17.7933 9.12 17.8333 9.12C18.3833 9.12 18.8333 9.57 18.8333 10.12C18.8333 10.58 18.5133 10.98 18.0833 11.09ZM18.8333 6.06C18.8333 6.57 18.4633 6.98 17.9733 7.05C14.7833 7.44 12.2733 9.96 11.8833 13.15C11.8133 13.63 11.3933 14 10.8933 14C10.3433 14 9.89331 13.55 9.89331 13C9.89331 12.98 9.89331 12.96 9.89331 12.94C9.89331 12.93 9.89331 12.92 9.89331 12.91C10.3933 8.79 13.6833 5.53 17.8133 5.06H17.8233C18.3833 5.06 18.8333 5.51 18.8333 6.06Z" fill="white">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-2 text-center">
                            <h4 className="text-2xl font-extrabold text-dark-grey-900">
                                Enhance Customer Connections
                            </h4>
                            <p className="font-medium text-grey-700">
                                Connect with your customers seamlessly using our shared team inboxes. Improve customer interactions and build stronger relationships.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M10.5 13H3.49998C3.23477 13 2.98041 13.1054 2.79288 13.2929C2.60534 13.4804 2.49998 13.7348 2.49998 14V21C2.49998 21.2652 2.60534 21.5196 2.79288 21.7071C2.98041 21.8946 3.23477 22 3.49998 22H10.5C10.7652 22 11.0196 21.8946 11.2071 21.7071C11.3946 21.5196 11.5 21.2652 11.5 21V14C11.5 13.7348 11.3946 13.4804 11.2071 13.2929C11.0196 13.1054 10.7652 13 10.5 13ZM9.49998 20H4.49998V15H9.49998V20ZM21.5 2H14.5C14.2348 2 13.9804 2.10536 13.7929 2.29289C13.6053 2.48043 13.5 2.73478 13.5 3V10C13.5 10.2652 13.6053 10.5196 13.7929 10.7071C13.9804 10.8946 14.2348 11 14.5 11H21.5C21.7652 11 22.0196 10.8946 22.2071 10.7071C22.3946 10.5196 22.5 10.2652 22.5 10V3C22.5 2.73478 22.3946 2.48043 22.2071 2.29289C22.0196 2.10536 21.7652 2 21.5 2ZM20.5 9H15.5V4H20.5V9ZM21.5 13H14.5C14.2348 13 13.9804 13.1054 13.7929 13.2929C13.6053 13.4804 13.5 13.7348 13.5 14V21C13.5 21.2652 13.6053 21.5196 13.7929 21.7071C13.9804 21.8946 14.2348 22 14.5 22H21.5C21.7652 22 22.0196 21.8946 22.2071 21.7071C22.3946 21.5196 22.5 21.2652 22.5 21V14C22.5 13.7348 22.3946 13.4804 22.2071 13.2929C22.0196 13.1054 21.7652 13 21.5 13ZM20.5 20H15.5V15H20.5V20ZM10.5 2H3.49998C3.23477 2 2.98041 2.10536 2.79288 2.29289C2.60534 2.48043 2.49998 2.73478 2.49998 3V10C2.49998 10.2652 2.60534 10.5196 2.79288 10.7071C2.98041 10.8946 3.23477 11 3.49998 11H10.5C10.7652 11 11.0196 10.8946 11.2071 10.7071C11.3946 10.5196 11.5 10.2652 11.5 10V3C11.5 2.73478 11.3946 2.48043 11.2071 2.29289C11.0196 2.10536 10.7652 2 10.5 2ZM9.49998 9H4.49998V4H9.49998V9Z" fill="white">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-2 text-center">
                            <h4 className="text-2xl font-extrabold text-dark-grey-900">
                                Seamless Web Integration
                            </h4>
                            <p className="font-medium text-grey-700">
                                Integrate our shared team inboxes seamlessly with your website. Enhance the user experience and provide efficient communication channels.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M10.1666 14C9.90141 14 9.64706 14.1054 9.45952 14.2929C9.27198 14.4804 9.16663 14.7348 9.16663 15V21C9.16663 21.2652 9.27198 21.5196 9.45952 21.7071C9.64706 21.8946 9.90141 22 10.1666 22C10.4318 22 10.6862 21.8946 10.8737 21.7071C11.0613 21.5196 11.1666 21.2652 11.1666 21V15C11.1666 14.7348 11.0613 14.4804 10.8737 14.2929C10.6862 14.1054 10.4318 14 10.1666 14ZM5.16663 18C4.90141 18 4.64706 18.1054 4.45952 18.2929C4.27198 18.4804 4.16663 18.7348 4.16663 19V21C4.16663 21.2652 4.27198 21.5196 4.45952 21.7071C4.64706 21.8946 4.90141 22 5.16663 22C5.43184 22 5.6862 21.8946 5.87373 21.7071C6.06127 21.5196 6.16663 21.2652 6.16663 21V19C6.16663 18.7348 6.06127 18.4804 5.87373 18.2929C5.6862 18.1054 5.43184 18 5.16663 18ZM20.1666 2C19.9014 2 19.6471 2.10536 19.4595 2.29289C19.272 2.48043 19.1666 2.73478 19.1666 3V21C19.1666 21.2652 19.272 21.5196 19.4595 21.7071C19.6471 21.8946 19.9014 22 20.1666 22C20.4318 22 20.6862 21.8946 20.8737 21.7071C21.0613 21.5196 21.1666 21.2652 21.1666 21V3C21.1666 2.73478 21.0613 2.48043 20.8737 2.29289C20.6862 2.10536 20.4318 2 20.1666 2ZM15.1666 9C14.9014 9 14.6471 9.10536 14.4595 9.29289C14.272 9.48043 14.1666 9.73478 14.1666 10V21C14.1666 21.2652 14.272 21.5196 14.4595 21.7071C14.6471 21.8946 14.9014 22 15.1666 22C15.4318 22 15.6862 21.8946 15.8737 21.7071C16.0613 21.5196 16.1666 21.2652 16.1666 21V10C16.1666 9.73478 16.0613 9.48043 15.8737 9.29289C15.6862 9.10536 15.4318 9 15.1666 9Z" fill="white">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-2 text-center">
                            <h4 className="text-2xl font-extrabold text-dark-grey-900">
                                Effortless Team Management
                            </h4>
                            <p className="font-medium text-grey-700">
                                Manage your team effortlessly with our shared team inboxes. Simplify team reporting and ensure smooth operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}