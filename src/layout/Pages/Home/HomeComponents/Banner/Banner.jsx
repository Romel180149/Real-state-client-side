

const Banner = () => {
    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[600px]"
            >
                <div
                    className="absolute inset-0 bg-black/75  sm:from-balck/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-left ">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                            Let us find your

                            <strong className="block font-extrabold text-[#b39359]">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-[#b39359] px-12 py-3 text-sm font-medium text-white shadow hover:bg-transparent hover:border hover:border-[#b39359] hover:text-[#b39359] focus:outline-none focus:ring active:bg-[#b39359] sm:w-auto transition ease-linear"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-transparent border border-[#b39359] px-12 py-3 text-sm font-medium text-[#b39359] shadow hover:text-white hover:bg-[#b39359] focus:outline-none focus:ring active:text-[#b39359] sm:w-auto transition ease-linear"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;