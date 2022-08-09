import '../../files/styles/css/PlanCart.css'
// Components 
import Button from "../Button/Button";
import Price from "../OfferProduct/Price";
import DeletedPrice from "../OfferProduct/DeletedPrice";
import BadgeSticky from '../OfferProduct/BadgeSticky';
import CircleSticky from './CircleSticky';
import PlanOption from './PlanOption';



export default function PlanCart() {
    return(
        <div className="plan-cart col-md-6 col-lg-3 p-2 p-lg-3 my-3 mx-auto">
            <div className="plan-body pt-3">
                <BadgeSticky />
                <CircleSticky />
                <h5 className='font-weight-bold mt-5 mb-4'>پلن اشتراک ویژه</h5>
                <div className='d-flex flex-column text-left'>
                    <DeletedPrice />
                    <span className='mt-1'>
                        <span className='font-sm'>ماهیانه / </span> <Price />
                    </span>
                </div>
                <p className='font-lg mt-4'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <div className="plan-options">
                    <PlanOption />
                    <PlanOption />
                    <PlanOption />
                    <PlanOption />
                </div>
                <div className="d-flex justify-content-center mt-4 mb-2">
                    <Button />
                </div>
            </div>
        </div>
    );
}