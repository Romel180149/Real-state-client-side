import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";

const OurBlog = () => {
    return (
        <div className="my-[120px]">
            <div>
                <CommonHeading
                    subHeading={'Our Blog'}
                    heading={"check our blog post's"}
                ></CommonHeading>
            </div>
            <div className="grid grid-cols-1 px-5 md:grid-cols-3 max-w-[1200px] mx-auto gap-8">
                <article className="group hover:shadow-lg rounded-xl">
                    <img
                        alt="Lava"
                        src="https://template.hasthemes.com/bery/bery/assets/images/blog/post1.png"
                        className="h-[250px] w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div className="p-4">
                        <p className="karla-font text-[#b39359]">James Alber on 22 December, 21</p>
                        <a href="#">
                            <h3 className="text-[24px] font-medium text-gray-900 lora-font hover:text-[#b39359] transition ease-linear">
                                Tip’s about Real Estate Recent Conditions from Agent.
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-2 text-[16px] text-gray-500">
                            Properties are most budget friendly so you have are opportunity to find are the best the best...
                        </p>
                    </div>
                </article>
                <article className="group hover:shadow-lg rounded-xl">
                    <img
                        alt="Lava"
                        src="https://i.ibb.co/GRCDc4r/properties1.webp"
                        className="h-[250px] w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div className="p-4">
                        <p className="karla-font text-[#b39359]">Shohel Gyes on 21 December, 21</p>
                        <a href="#">
                            <h3 className="text-[24px] font-medium text-gray-900 lora-font hover:text-[#b39359] transition ease-linear">
                                Importance of Build quality of modern Real Estate.
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-2 text-[16px] text-gray-500">
                            Properties are most budget friendly so you have are opportunity to find are the best the best...
                        </p>
                    </div>
                </article>
                <article className="group hover:shadow-lg rounded-xl">
                    <img
                        alt="Lava"
                        src="https://template.hasthemes.com/bery/bery/assets/images/blog/post2.png"
                        className="h-[250px] w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div className="p-4">
                        <p className="karla-font text-[#b39359]">James Alber on 22 December, 21</p>
                        <a href="#">
                            <h3 className="text-[24px] font-medium text-gray-900 lora-font hover:text-[#b39359] transition ease-linear">
                                Tip’s about Real Estate Recent Conditions from Agent.
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-2 text-[16px] text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default OurBlog;