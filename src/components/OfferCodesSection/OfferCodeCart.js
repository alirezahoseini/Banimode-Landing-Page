import '../../files/styles/css/OfferCodeCart.css';
// Components 
import BadgeSticky from '../OfferProduct/BadgeSticky';
import CircleSticky from '../PlanSection/CircleSticky';
import CouponCode from './CouponeCode';



export default function OfferCodeCart(props) {
    return(
        <div className="offer-code-cart col-md-6 col-lg-3 p-2 p-lg-3 my-3 mx-auto">
            <div className="offer-body pt-3">
                <BadgeSticky percent={props.percent} />
                <CircleSticky />
                <h5 className='font-weight-bold mt-5'>{props.percent} درصد تخفیف</h5>
                <p className='font-lg mt-2'>
                    {props.title}
                </p>
                <CouponCode code={props.code} />
            </div>
        </div>
    );
}