

const CommonHeading = ({subHeading, heading}) => {
    return (
        <div className="text-center mb-[60px] p-5">
            <p className="karla-font text-[16px] text-[#b39359] font-semibold">{subHeading}</p>
            <h3 className="text-4xl lora-font text-[#0b2c3d] font-medium capitalize">{heading}</h3>
        </div>
    );
};

export default CommonHeading;