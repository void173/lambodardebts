import '../css/card.css';
function Card(props) {
    return(
        <div className="cardbody"> 
            <div className="cardtitle"> <p>{props.title}</p></div>
            <div className="cardcontent">
                <div className="carddesc"><p>{props.desc}</p></div>
                <div className="cardimg">
                    <img src={props.img} alt="card-image"></img>
                </div>
            </div>
        </div>
    );
}

export default Card;