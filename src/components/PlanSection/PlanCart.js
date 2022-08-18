import '../../files/styles/css/PlanCart.css'
// Components 
import Button from "../Button/Button";
import Price from "../OfferProduct/Price";
import DeletedPrice from "../OfferProduct/DeletedPrice";
import BadgeSticky from '../OfferProduct/BadgeSticky';
import CircleSticky from './CircleSticky';
import PlanOption from './PlanOption';



export default function PlanCart({percent, title, delPrice, price}) {
    return(
        <div className="plan-cart col-md-6 col-lg-3 p-2 p-lg-3 my-3 mx-auto">
            <div className="plan-body pt-3">
                <BadgeSticky percent={percent} />
                <CircleSticky />
                <h5 className='font-weight-bold mt-5 mb-4'>{title}</h5>
                <div className='d-flex flex-column text-left'>
                    <DeletedPrice deletedPrice={delPrice} />
                    <span className='mt-1'>
                        <span className='font-sm'>ماهیانه / </span> <Price price={price} />
                    </span>
                </div>
                <p className='font-lg mt-4'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <div className="plan-options">
                    <PlanOption title='این ویژگی اول است' />
                    <PlanOption title='این ویژگی دوم است' />
                    <PlanOption title='این ویژگی سوم است' />
                    <PlanOption title='این ویژگی چهارم است' />
                </div>
                <div className="d-flex justify-content-center mt-4 mb-2">
                    <Button title='خرید پلن' iconName='bag-2' />
                </div>
            </div>
        </div>
    );
}