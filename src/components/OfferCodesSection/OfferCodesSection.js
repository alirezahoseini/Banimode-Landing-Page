//Components
import Title from "../Title/Title";
import SecondTitle from "../Title/SecondTitle";
import TransparentButton from '../Button/TransparentButton'
import OfferCodeCart from './OfferCodeCart';


export default function OfferCodesSection() {
    return(
        <div className="products-section my-5 pt-4">
        <div className="row p-0 m-0">
            <div className="col-12 p-0 d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
                <div>
                    <Title />
                    <SecondTitle />
                </div>
                <div>
                    <TransparentButton />
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <OfferCodeCart />
                <OfferCodeCart />
                <OfferCodeCart />
                <OfferCodeCart />
            </div>
        </div>
    </div>
    );
}