// Components 
import Title from "../Title/Title";
import SecondTitle from "../Title/SecondTitle";
import PlanCart from "./PlanCart";

export default function PlanSection() {


    const plansData = [
        {id: 1, percent: 10, title: 'پلن اشتراک اول', price: 90_000, delPrice: 100_000 },
        {id: 2, percent: 25, title: 'پلن اشتراک دوم', price: 180_000, delPrice: 200_000 },
        {id: 3, percent: 32, title: 'پلن اشتراک سوم', price: 270_000, delPrice: 300_000 },
        {id: 4, percent: 43, title: 'پلن اشتراک چهارم', price: 360_000, delPrice: 400_000 }
    ]



    return(
        <div className='plan-section m-0 p-0'>
            <div className="col-12 p-0 d-flex flex-column">
                <Title title="پلن های اشتراک"/>
                <SecondTitle title='تخفیف ویژه بر روی پلن های محبوب'/>
            </div>
            <div className="row p-0 m-0 w-100">
                <PlanCart {...plansData[0]} />
                <PlanCart {...plansData[1]} />
                <PlanCart {...plansData[2]} />
                <PlanCart {...plansData[3]} />
            </div>
        </div>
    );
}