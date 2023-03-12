const Card = (props:any) => {
    return (
        <div className={`in-card ${props.className}`}>
            <div className='in-card__wrap'>
                {props.children}
            </div>
        </div>
    )
}

export default Card