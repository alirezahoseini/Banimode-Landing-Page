// Components 
import Title from "../Title/Title";
import SecondTitle from "../Title/SecondTitle";
import PlanCart from "./PlanCart";

export default function PlanSection() {
    return(
        <div className='plan-section m-0 p-0'>
            <div className="col-12 p-0 d-flex flex-column">
                <Title />
                <SecondTitle />
            </div>
            <div className="row p-0 m-0 w-100">
                <PlanCart />
                <PlanCart />
                <PlanCart />
                <PlanCart />
            </div>
        </div>
    );
}