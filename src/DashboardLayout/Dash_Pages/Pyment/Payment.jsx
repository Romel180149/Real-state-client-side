import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import usePropertyBought from "../../../hooks/usePropertyBought";
import { useParams } from "react-router-dom";

// TODO: add publishable key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
// console.log(stripePromise);
// console.log(import.meta.env.VITE_Payment_Gateway_PK);
const stripePromise = loadStripe('pk_test_51OWu7xHxlmNIl5x9LzH5myO8YbkLaTGIgsIRcMdaKBm3HBfj2QQ1N2xcp3rEJLILPievOd1vEbrSFWuttJlDuIb200V6cq6I7A')
console.log(stripePromise);
const Payment = () => {
    const params = useParams()
    const [propertyBought] = usePropertyBought()
    const getPayProduct = propertyBought.filter(property => property._id === params.id)
    const boughtItem = getPayProduct[0]
    const price = getPayProduct[0]?.offered_Price
    return (
        <div className="ml-[300px] w-full min-h-screen bg-base-200 mt-[90px]">
            <div className="bg-white p-[60px] max-w-[800px] mx-auto">
                <h1>Insert your payment Credential</h1>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={price} boughtItem={boughtItem}></CheckoutForm>
                        {/* </CheckoutForm> */}
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;