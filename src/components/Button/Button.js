import '../../files/styles/css/Button.css';

export default function Button(props) {
    return(
        <button type='button' className='button d-flex'>
            <span>
                {props.title}
            </span>
            <i className={'icon-light-' + props.iconName}></i>
        </button>
    );
}