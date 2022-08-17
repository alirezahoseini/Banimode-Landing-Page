import '../../files/styles/css/Button.css';

export default function TransparentButton(props) {
    return(
        <button type='button' className='transparent-button d-flex'>
            <span>
                {props.title}
            </span>
            <i className="icon-light-arrow-left-3"></i>
        </button>
    );
}