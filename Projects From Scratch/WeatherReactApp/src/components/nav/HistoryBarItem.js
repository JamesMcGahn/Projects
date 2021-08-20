import React from 'react';
import { Link } from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from "react-router-dom";


function HistoryBarItem({ id, temp, city, icon, removeLocation }) {
    let history = useHistory()
    const [showDelete, setShowDelete] = React.useState(false)
    const handleClick = (event) => {
        event.preventDefault();
        setShowDelete(true)
        setInterval(() => {
            setShowDelete(false)
        }, 5000);
    }
    const handleDelete = (event) => {
        event.preventDefault();
        removeLocation(id)
        history.push("/");
    }
    return (
        <>
            <Link to={`/today/${id}`} style={{ width: '70%', display: 'inline-block', marginLeft: '1.5rem' }}>
                <img alt="forecast-icon" src={icon} />
                <span style={{ marginRight: '2rem' }}>{`${Math.trunc(temp)}° ${city}`}</span>
            </Link>
            {showDelete ?
                <div onClick={handleDelete}
                    style={{ display: 'inline-block', width: '20%', height: '100%', color: '#1a357c', backgroundColor: 'white', padding: '.6rem', borderBottom: '.26rem solid white' }}>
                    <span style={{ fontSize: '.5rem' }}>Remove</span>
                </div>
                : <div>
                    <MoreVertIcon onClick={handleClick} style={{ marginRight: 'auto', marginLeft: '10px' }} />
                </div>
            }
        </>
    );
}

export default HistoryBarItem;