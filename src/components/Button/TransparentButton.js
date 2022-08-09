import '../../files/styles/css/Button.css';

export default function TransparentButton() {
    return(
        <button type='button' className='transparent-button d-flex'>
            <span>
                منم دکمه دو هستم
            </span>
            <i className="icon-light-arrow-left-3"></i>
        </button>
    );
}