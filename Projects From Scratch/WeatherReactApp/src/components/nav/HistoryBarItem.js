import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { styles } from '../../styles/nav/historyBarStyles'

function HistoryBarItem({ id, temp, city, icon, removeLocation, alert, idChange }) {
    const classes = styles()
    const [showDelete, setShowDelete] = React.useState(false)
    const instance = useRef({ timer: 0 })

    const handleClick = (event) => {
        event.preventDefault();
        setShowDelete(true)
        instance.current.timer = setTimeout(() => {
            setShowDelete(false)
        }, 5000);
    }
    const handleDelete = (event) => {
        event.preventDefault();
        clearTimeout(instance.current.timer)
        removeLocation(id)
    }
    useEffect(() => {
        return () => {
            clearTimeout(instance.current.timer);
        }
    }, [])

    return (
        <>
            <Link to={`/today/${id}`} style={{ width: '70%', display: 'inline-block', marginLeft: '1.5rem' }} onClick={() => idChange(id)}>
                <div>
                    <img alt="forecast-icon" src={icon} />
                    <span style={{ marginRight: '1px' }}>{`${Math.trunc(temp)}° ${city}`}</span>
                    {alert ? <span className={classes.warn}> <FontAwesomeIcon icon={faExclamationCircle} size="sm" /></span> : ''}
                </div>
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