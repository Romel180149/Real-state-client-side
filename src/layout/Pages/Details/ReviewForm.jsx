
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { ProviderContext } from "../../../Provider/Provider";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ReviewForm = ({ propertyDetails }) => {
    const { user } = useContext(ProviderContext)
    const axiosSecure = useAxiosSecure()
    const [clickedTime, setClickedTime] = useState(null);
    // console.log(propertyDetails)



    // State variable to store the clicked time

    // Event handler for the button click
    const handleTimeClicked = () => {
        // Get the current date and time
        const currentDate = new Date();
        // const formattedTime = currentDate.toLocaleTimeString();
        // Update the state with the current time
        setClickedTime(currentDate);
    };
    const formattedTime =
        clickedTime &&
        clickedTime.toLocaleString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    console.log(clickedTime)

    const openModal = () => {
        // Additional actions you want to perform
        console.log('Button clicked!');

        // Open the modal
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
        }
    };

    const handleButtonClick = () => {
        // Call both functions when the button is clicked
        handleTimeClicked()
        handleReviewData();
        openModal();
    };

    const handleReviewData = e => {
        e.preventDefault();
        const { _id, Agent_name, Agent_email, Property_title } = propertyDetails
        const form = e.target
        const review = form.review.value

        // ToDo: send data to the wish database
        const reviewItem = {
            propertyID: _id,
            Reviewer_email: user.email,
            Reviewer_name: user.displayName,
            Reviewer_img: user.photoURL,
            Review_description: review,
            Property_title,
            Agent_name,
            Agent_email,
            formattedTime,
        }
        axiosSecure.post('/reviews', reviewItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your review has been added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch data to update the cart length
                    // refetch()
                }
            })


        document.getElementById("my_modal_1").close()
        console.log(reviewItem)
        form.reset();
    }



    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box p-0 min-w-[400px]">
                <section className=" dark:text-gray-900 min-w-full">
                    <form method="dialog" onSubmit={handleReviewData} className="container w-full  p-8 mx-auto space-y-6 rounded-md shadow">
                        <h2 className="w-full text-center text-3xl font-bold leadi text-gray-900">Add a review</h2>
                        {/*  */}
                        <div className="grid">
                            <div>
                                <img src={propertyDetails.Property_img} className="min-w-full max-h-[300px]" alt="" />
                                <p className="text-2xl lora-font font-semibold sm:text-4xl mt-[20px]">{propertyDetails.Property_title}</p>
                            </div>
                            <div className="w-full">
                                <label className="block mb-1 ml-1">Write a additional note</label>
                                <textarea
                                    name="review"
                                    id="review"
                                    type="text"
                                    placeholder="Type here..."
                                    className="block w-full h-[150px] p-2 rounded autoexpand border focus:outline-none focus:ring focus:ri focus:ri">
                                </textarea>
                            </div>
                            <div>
                                <button onClick={handleButtonClick} className="btn px-[60px] mt-[20px] min-w-full text-white bg-[#0b2c3d] rounded-lg hover:bg-transparent hover:border-[#0b2c3d] hover:text-[#0b2c3d]">Review</button>
                            </div>

                        </div>
                    </form>
                    <form method="dialog">
                        <button className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-[#b39359] focus:ri hover:ri text-white">Cancel Review</button>
                    </form>

                </section>
            </div>
        </dialog>
    );
};

export default ReviewForm;