export default function PlanOption({title}) {
    return(
        <div className="plan-option d-flex align-items-center text-dark font-lg my-2">
            <i className="icon-light-accept ml-2"></i>
            <span>{title}</span>
        </div>
    );
}