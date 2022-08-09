// Styles
import '../../files/styles/css/HeadSection.css'
// Components 
import Header from '../Header/Header'
import Title from "../Title/Title";
import Button from "../Button/Button";

function HeadSection() {
  return (
    <div className="">
        <Header />
        <div className="row head-section d-flex flex-column-reverse flex-lg-row px-1 px-lg-0 mx-0">
            <div className="col-lg-6 mt-4 mt-lg-5 pt-lg-5 px-0">
              <Title />
              <p className='mb-4 mb-lg-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان</p>
              <Button />
            </div>
            <div className="col-lg-6 head-element p-0 ml-0 mr-auto ">
                <div className="light">
                  <div className="element"></div>
                </div>
            </div>
            <div className="head-bg"></div>
        </div>
    </div>
  );
}

export default HeadSection;