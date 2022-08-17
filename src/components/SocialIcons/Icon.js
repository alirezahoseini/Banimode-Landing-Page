export default function Icon(props) {
    return(
        <a href={props.href} target="_blank" className="icon d-flex align-items-center justify-content-center">
            <img src={'./icons/' + props.name + '.svg'} />
        </a>
    );
}