export default function Discription({description}) {
    return(
        <div className="offer-des d-flex align-items-center">
            <i className="icon-light-accept ml-2"></i>
            <span>{description}</span>
        </div>
    );
}