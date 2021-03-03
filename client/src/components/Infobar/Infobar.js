import React from 'react'; 
import closeIcon from '../Infobar/icons/closeIcon.png'; 
import onlineIcon from '../Infobar/icons/onlineIcon.png'; 

import '../Infobar/Infobar.css'; 

const Infobar = ({room}) => (
    <div className = "infobar">
        <div className = "leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>{room}</h3>
        </div>
        <div className = "rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close icon"/></a>
        </div>
    </div>
)

export default Infobar; 