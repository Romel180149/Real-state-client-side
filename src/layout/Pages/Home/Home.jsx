import Advertisement from "./HomeComponents/Adevertisement/Advertisement";
import Banner from "./HomeComponents/Banner/Banner";
import HomeReview from "./HomeComponents/HomeReview/HomeReview";
import OurBlog from "./HomeComponents/OurBlog/OurBlog";
// import Testimonial from "./HomeComponents/Testimonial/Testimonial";
import WhyChooseUs from "./HomeComponents/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <HomeReview></HomeReview>
            <WhyChooseUs></WhyChooseUs>
            <OurBlog></OurBlog>
        </div>
    );
};

export default Home;