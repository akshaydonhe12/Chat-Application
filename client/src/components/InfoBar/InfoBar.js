import React from 'react';
import closeIcon from '../../icons/closeIcon';
import onlineIcon from '../../icons/onlineIcon';

import './InfoBar.css';

const InfoBar = () => {
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image"/>
            <h3>RoomName</h3>
        </div>
        <div className="righInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image" /></a>
        </div>
    </div>
}

export default InfoBar;