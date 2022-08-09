import '../../../files/styles/css/ProductCart.css';
import Badge from '../../OfferProduct/BadgeSticky';
import Price from "../../OfferProduct/Price";
import DeletedPrice from "../../OfferProduct/DeletedPrice";
import BadgeSticky from '../../OfferProduct/BadgeSticky';
import AddToCartButton from '../../Button/AddToCartButton';

export default function ProductCart() {
    return(
        <div className="product-cart col-md-6 col-lg-3 p-2 p-lg-3 my-3 mx-auto">
            <a href='#' className="cart-img">
                <img src="./img/1.png" className='mx-auto d-block' alt="product cart" />
                <BadgeSticky />
            </a>
            <div className="cart-body">
                <a className='cart-title' href="#">پیراهن مردانه زمستانی جین وست</a>
                <div className='d-flex justify-content-between align-items-end'>
                    <AddToCartButton />
                    <span className='d-inline-flex flex-column text-left'>
                        <DeletedPrice />
                        <Price />
                    </span>
                </div>
            </div>
        </div>
    );
}