// Components 
import HeadSection from './components/HeadSection/HeadSection'
import Header from './components/Header/Header'
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import OfferProduct from "./components/OfferProduct/OfferProduct";
import ProductsSection from "./components/ProductsSection/ProductSection";

function App() {
  return (
    <div className='container-fluid px-lg-2'>
        <HeadSection />
        <OfferProduct />
        <ProductsSection />
    </div>
  );
}

export default App;
