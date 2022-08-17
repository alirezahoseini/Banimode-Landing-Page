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
                    <Title title='کدهای تخفیف'/>
                    <SecondTitle title='تخفیف های بیشتر در سبد خرید'/>
                </div>
                <div>
                    <TransparentButton title='مشاهده فروشگاه' />
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <OfferCodeCart percent={10} title='برای همه محصولات' code='SUMMER1401'/>
                <OfferCodeCart percent={25} title='ویژه اکسسوری کودک' code='CHILDSACCESSORY'/>
                <OfferCodeCart percent={32} title='ویژه کفش زنانه' code='WOMENSSHOE'/>
                <OfferCodeCart percent={43} title='ویژه پیراهن مردانه' code='MENSHIRT'/>
            </div>
        </div>
    </div>
    );
}