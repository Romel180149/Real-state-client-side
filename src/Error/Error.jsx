/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import ErrorAnimation from "./Error_new.json"
import { Link } from "react-router-dom";
// import ErrorAni from "./Error";
const Error = () => {
    return (
        <div>
            <section className="flex items-center min-h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
                <Lottie animationData={ErrorAnimation} className="w-[3000px] ml-[-200px]"></Lottie>
                <div className="container">
                    <div className="max-w-md text-left flex flex-col items-start">
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/" className="btn text-white bg-[#23aade] rounded-lg hover:bg-transparent hover:border-white ">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;