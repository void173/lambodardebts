import React from "react";
import '../../components/css/count-card.css'

function Card_count(props) {
    return(
        <div className="c-card-body">
            <p id="counts">{props.count}</p>
            <h4>{props.title}</h4>
            <p id="c-inf">{props.info}</p>
        </div>
    );
}
export default Card_count;