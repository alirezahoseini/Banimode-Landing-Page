export default function Badge(props) {
    return(
        <badge className="percent">
            {props.percent}%
        </badge>
    );
}