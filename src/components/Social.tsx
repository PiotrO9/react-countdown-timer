import './Social.scss';

function Social(props: any) {
    return (
        <div className="Social">
            <img src={`./icons/${props.iconName}.svg`} alt="icon" />
        </div>
    )
}

export default Social