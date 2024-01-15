import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeReview.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
// import react ratings
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import CommonHeading from '../../../../Shared/CommonHeading/CommonHeading';
import useReviews from '../../../../../hooks/useReviews';

const HomeReview = () => {
    const [allReviews, refetch] = useReviews()
    // const [reviewsData, setReviewsData] = useState([])
    // const [rating, setRating] = useState(3);

    // useEffect(() => {
    //     fetch('review.json')
    //         .then(res => res.json())
    //         .then(data => setReviewsData(data))
    // }, [])
    // console.log(reviewsData);
    const dumbIMG = {
        img1: "https://i.ibb.co/WFFXy0m/person2.webp",
    }

    return (
        <div className='max-w-[1170px] mx-auto my-[120px]'>
            <div>
                <CommonHeading
                    subHeading={'Reviews'}
                    heading={"There are some of our recent client's review"}
                >
                </CommonHeading>
            </div>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[550px]">
                    {
                        allReviews.map(review => (
                            <SwiperSlide key={review._id}>
                                <div className='relative pt-[45px]'>
                                    <div className='bg-[#f5f9f8] p-[60px] flex justify-end rounded-3xl'>
                                        <div className='w-[480px]'>
                                            <h3 className='text-[#b39359] text-[16px] font-semibold'>Review</h3>
                                            <h2 className='text-[#0b2c3d] text-[36px] lora-font font-semibold mb-[20px]'>Reviews from our <br /> happy Clients</h2>
                                            <p className="mt-0.5 text-lg font-medium text-[#b39359]">Property: <span className='text-gray-800'>{review.Property_title}</span></p>
                                            <p className='line-clamp-2 '>
                                                {review.Review_description}
                                            </p>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex mt-5 gap-5'>
                                                    <div>
                                                        <img className='min-w-[60px] max-w-[60px] h-[60px] max-h-[60px] border rounded-full' src={review.Reviewer_img} alt="" />
                                                    </div>
                                                    <h3 className='text-[#b39359] mt-[20px] lora-font text-[20px]'>{review.Reviewer_name}</h3>
                                                </div>
                                                <div className='mt-[20px]'>
                                                    <Rating
                                                        style={{ maxWidth: 80, }}
                                                        value={5}
                                                    // onChange={setRating}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-[#0b2c3d] w-[402px] min-h-[505px] max-h-[505px] absolute top-0 left-[150px] z-10 rounded-[32px] hidden lg:block'>
                                        <img className='min-h-full' src={dumbIMG.img1} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </>
        </div>
    );
};

export default HomeReview;