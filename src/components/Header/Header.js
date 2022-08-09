import '../../files/styles/css/Header.css';



export default function Header() {
    return(
        <header className="w-100 px-0 mx-0 py-4">
            <div className="row px-3 mx-0 d-flex align-items-center justify-content-between justify-content-lg-start">
                <a href="#" className='col-2 col-lg-1 logo p-0 ml-lg-4'>
                    <img src="./img/logo.svg" className="img-fluid" alt="logo" />
                </a>
                <div className="desktop-menu d-none d-lg-flex">
                    <nav>
                        <ul className="d-flex align-items-center m-0">
                            <li className='mx-3'>
                                <a href="#">صفحه اصلی</a>
                            </li>
                            <li className='mx-3'>
                                <a href="#">تماس با ما</a>
                            </li>
                            <li className='mx-3'>
                                <a href="#">درباره ما</a>
                            </li>
                            <li className='mx-3'>
                                <a href="#">قوانین و مقرارت</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mobile-menu d-flex d-lg-none">
                    <i className="icon-light-menu-1 text-dark hamberger-btn"></i>
                    <ul className='d-none'>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">تماس با ما</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">قوانین و مقرارت</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
} 