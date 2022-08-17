export default function BadgeSticky(props) {
    return(
        <badge className="percent sticky">
            {props.percent}%
        </badge>
    );
}