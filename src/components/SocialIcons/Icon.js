export default function Icon({href, name}) {
    return(
        <a href={href} target="_blank" className="icon d-flex align-items-center justify-content-center">
            <img src={'./icons/' + name + '.svg'} />
        </a>
    );
}