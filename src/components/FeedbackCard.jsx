import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card items-center">
    <img
      src={img}
      alt="double_quotes"
      className="w-48 h-48 object-contain pb-6"
    />
    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
      {name}
    </h4>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
      {title}
    </p>
  </div>
);

export default FeedbackCard;
