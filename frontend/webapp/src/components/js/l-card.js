import React from "react";
import '../../components/css/count-card.css'
import locn from '../../assets/locn.png'
function L_card(props) {
    return(
        <div className="l-card-body">
            <img src={locn}></img>
            <p id="l-inf">{props.info}</p>
            <p id="mob-no">{props.mobno}</p>
        </div>
    );
}
export default L_card;