// Components 
import Title from "../Title/Title";
import Button from "../Button/Button";
import SecondTitle from "../Title/SecondTitle";
import OfferProductImageLeft from "../OfferProduct/OfferImages/OfferImageLeft";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function SocialSection() {
    return(
        <div className='social-section m-0 p-0 my-5'>
            <div className="row m-0 p-0 w-100">
                <div className="col-12 p-0 m-0">
                    <Title />
                    <SecondTitle />
                </div>
                <div className="row m-0 p-0 w-100 flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 m-0 p-0 mt-4 mt-lg-0 d-flex flex-column justify-content-lg-center">
                        <h3 className="font-weight-bold h4 font-xl">زودتر از همه از تخفیف‌ها خبردار شوید!</h3>
                        <p className="font-sm mt-4 mb-3 text-gray-dark">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان 
                        </p>
                        <Button />
                        <SocialIcons />
                    </div>
                    <OfferProductImageLeft />
                </div>
            </div>
        </div>
    );
}