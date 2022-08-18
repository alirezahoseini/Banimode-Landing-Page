// Styles
import '../../files/styles/css/ProductSection.css'
// Components 
import Title from "../Title/Title";
import SecondTitle from "../Title/SecondTitle";
import TransparentButton from "../Button/TransparentButton";
import ProductCart from "./ProductCart/ProductCart";



function ProductsSection() {
  return (
    <div className="products-section my-5 pt-4">
        <div className="row p-0 m-0">
            <div className="col-12 p-0 d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
                <div>
                    <Title title='محصولات تخفیف خورده'/>
                    <SecondTitle title='تخفیف های رویایی بر روی محصولات منتخب'/>
                </div>
                <div>
                    <TransparentButton title='مشاهده همه' iconName='arrow-left-3' />
                </div>
            </div>
            <div className="row w-100 p-0 m-0">
                <ProductCart title='پیراهن زمستانی جین وست' price={400_000} delPrice={599_000} img='./img/1.png' percent={18} />
                <ProductCart title='پیراهن مردانه زارا' price={845_000} delPrice={1_120_000} img='./img/2.png' percent={24} />
                <ProductCart title='پیراهن جدید فانتزی' price={342_000} delPrice={412_000} img='./img/3.png' percent={37} />
                <ProductCart title='پیراهن پسرانه راه راه' price={178_000} delPrice={320_000} img='./img/4.png' percent={49}/>
            </div>
        </div>
    </div>
  );
}

export default ProductsSection;