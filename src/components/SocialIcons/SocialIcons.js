import '../../files/styles/css/SocialIcons.css';
//Components
import Icon from './Icon';


export default function SocialIcons() {
    return(
        <div className="social-icons">
            <span className='font-lg'>سایر شبکه های اجتماعی</span>
            <div className="d-flex align-items-center">
                <Icon name='instagram' href='#' />
                <Icon name='twitter' href='#' />
                <Icon name='facebook' href='#' />
                <Icon name='telegram' href='#' />
                <Icon name='whatsapp' href='#' />
            </div>
        </div>
    );
}