


function MyCard(props){



    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}

export default MyCard;