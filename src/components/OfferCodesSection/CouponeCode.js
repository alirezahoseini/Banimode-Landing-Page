export default function CouponCode(props) {
    return(
        <div className="coupon-code font-xl text-center">
            <span>{props.code}</span>
        </div>
    );
}