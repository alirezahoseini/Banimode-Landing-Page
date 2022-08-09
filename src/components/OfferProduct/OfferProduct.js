// Styles
import '../../files/styles/css/OfferProduct.css'
// Components 
import Header from '../Header/Header'
import Title from "../Title/Title";
import SecondTitle from "../Title/SecondTitle";
import Button from "../Button/Button";
import Price from "./Price";
import Badge from "./Badge";
import DeletedPrice from "./DeletedPrice";
import Description from "./Description";

function OfferProduct() {
  return (
    <div className='offer-product mb-5'>
        <div className="row mx-0 px-0 mt-5 pt-4 px-1 px-lg-0">
            <div className="col-12 p-0 d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
                <div>
                    <Title />
                    <SecondTitle />
                </div>
                <div>
                    <span className='end-badge'>تمام شد!</span>
                </div>
            </div>
            <div className="row mx-0 px-0 w-100 mt-5">
                {/* Offer Product Image  */}
                <div className="col-lg-6 p-0 m-0 offer-product-img">
                    <div className="box-1">
                        <i className="icon-light-discount"></i>
                    </div>
                    <div className="box-2"></div>
                    <img src="./img/offer.png" alt="" />
                </div>
                {/* Offer Product Info */}
                <div className="col-lg-6 p-0 m-0 offer-product-info mt-5 mt-lg-0 d-inline-flex flex-column justify-content-center">
                    <h4 className='font-weight-bold mt-5 mt-lg-0'>کت تک مردانه ال سی من</h4>
                    <div className="price my-4">
                        <div className='d-flex align-items-center'>
                            <DeletedPrice />
                            <Badge />
                        </div>
                        <Price />
                    </div>
                    <Description />
                    <Description />
                    <div className='mt-4'>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OfferProduct;