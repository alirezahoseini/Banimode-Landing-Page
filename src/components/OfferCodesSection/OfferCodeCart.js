import '../../files/styles/css/OfferCodeCart.css';
// Components 
import BadgeSticky from '../OfferProduct/BadgeSticky';
import CircleSticky from '../PlanSection/CircleSticky';
import CouponCode from './CouponeCode';



export default function OfferCodeCart() {
    return(
        <div className="offer-code-cart col-md-6 col-lg-3 p-2 p-lg-3 my-3 mx-auto">
            <div className="offer-body pt-3">
                <BadgeSticky />
                <CircleSticky />
                <h5 className='font-weight-bold mt-5'>20 درصد تخفیف</h5>
                <p className='font-lg mt-2'>
                    ویژه دسته پیراهن مردانه 
                </p>
                <CouponCode />
            </div>
        </div>
    );
}