import '../../files/styles/css/OfferCodeCart.css';
// Components 
import BadgeSticky from '../OfferProduct/BadgeSticky';
import CircleSticky from '../PlanSection/CircleSticky';
import CouponCode from './CouponeCode';



export default function OfferCodeCart({title, percent, code}) {
    return(
        <div className="offer-code-cart col-md-6 col-lg-3 p-2 p-lg-3 my-3 mx-auto">
            <div className="offer-body pt-3">
                <BadgeSticky percent={percent} />
                <CircleSticky />
                <h5 className='font-weight-bold mt-5'>{percent} درصد تخفیف</h5>
                <p className='font-lg mt-2'>
                    {title}
                </p>
                <CouponCode code={code} />
            </div>
        </div>
    );
}