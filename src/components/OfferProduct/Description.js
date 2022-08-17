export default function Discription(props) {
    return(
        <div className="offer-des d-flex align-items-center">
            <i className="icon-light-accept ml-2"></i>
            <span>{props.description}</span>
        </div>
    );
}