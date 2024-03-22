const Card = ({title, date, desc, image})=>{
    // console.log(title,date,desc,image)
    return(
        <div className="cards">
            {/* title */}
            <div className="title">
                <h1>{title}</h1>
            </div>
            {/* date */}
            <div className="date">
                <h1>{date}</h1>
            </div>
            {/* image */}
            <img src={image} alt="test" />
            {/* desc */}
            <div className="card-over">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card;