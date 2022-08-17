// Components 
import Title from "../Title/Title";
import SecondTitle from "../Title/SecondTitle";
import PlanCart from "./PlanCart";

export default function PlanSection() {
    return(
        <div className='plan-section m-0 p-0'>
            <div className="col-12 p-0 d-flex flex-column">
                <Title title="پلن های اشتراک"/>
                <SecondTitle title='تخفیف ویژه بر روی پلن های محبوب'/>
            </div>
            <div className="row p-0 m-0 w-100">
                <PlanCart title='پلن اشتراک اول' price={90_000} delPrice={100_000} percent={10} />
                <PlanCart title='پلن اشتراک دوم' price={180_000} delPrice={200_000} percent={15} />
                <PlanCart title='پلن اشتراک سوم' price={270_000} delPrice={300_000} percent={20} />
                <PlanCart title='پلن اشتراک چهارم' price={360_000} delPrice={400_000} percent={25} />
            </div>
        </div>
    );
}