import '../../files/styles/css/Title.css';

export default function Title(props) {
    return(
        <h2 className='title'>
            {props.title}
        </h2>
    );
}