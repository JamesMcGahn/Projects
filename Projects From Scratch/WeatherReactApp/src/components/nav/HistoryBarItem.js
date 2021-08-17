import React from 'react';
import { Link } from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from "react-router-dom";

function HistoryBarItem({ id, temp, city, icon, removeLocation }) {
    let history = useHistory()
    const handleClick = (event) => {
        event.preventDefault();
        removeLocation(id)
        history.push("/");
    }
    return (
        <Link to={`/${id}`}>
            <img alt="forecast-icon" src={icon} />
            <span style={{ marginRight: '2rem' }}>{`${Math.trunc(temp)}° ${city}`}</span>
            <MoreVertIcon onClick={handleClick} style={{ marginRight: 0 }} />
        </Link>
    );
}

export default HistoryBarItem;