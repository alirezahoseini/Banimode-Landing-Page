export default function FooterOption(props) {
    return(
        <div className="footer-option my-2 col-md-6 col-lg-3 d-flex align-items-center p-0">
            <div className="icon-box d-flex align-items-center justify-content-center">
                <i className={"icon-light-" + props.iconName}></i>
            </div>
            <div className="body">
                <p className="font-lg text-second font-weight-bold m-0">
                    {props.title}
                </p>
                <p className="font-m m-0 mt-2">
                    {props.des}
                </p>
            </div>
        </div>
    );
}