import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    slider: {
        width: '100%',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& svg': {
            color: 'black',
            fontSize: '2rem'
        },
        '& svg:hover': {
            background: 'black',
            color: 'white',
            cursor: 'pointer'
        }
    },
    featuredImgCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    featuredImg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
            width: '75%',
        }
    },
    icon: {
        width: '5%',
    },
    imgThumbs: {
        margin: '10px 0',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
    thumb: {
        '& img': {
            maxWidth: '100px',
        },
        '& img:hover': {
            cursor: 'pointer'
        }
    },
    activeThumb: {
        border: '2px solid black',
        '& img': {
            maxWidth: '100px',
        }
    }

}));

function ImageFeaturedCarousel({ data }) {
    const classes = useStyles();
    const length = data.length - 1
    const [maxDisplay, setMaxDisplay] = useState(3)
    const [current, setCurrent] = useState({
        current: 0
    })

    const handlePrevious = () => {
        current.current === 0 ? setCurrent({ current: length }) : setCurrent({ current: current.current - 1 })

    }
    const handleNext = () => {
        current.current === length ? setCurrent({ current: 0 }) : setCurrent({ current: current.current + 1 })
    }

    const handleClick = (index) => { setCurrent({ current: index }) }

    return (
        <div className={classes.slider}>
            <div className={classes.featuredImgCont}>
                <div className={classes.icon}> <ChevronLeftIcon onClick={handlePrevious} /></div>
                <div className={classes.featuredImg}><img src={`${data[current.current].node.originalSrc}`} alt='feature-product' /></div>
                <div className={classes.icon}> <ChevronRightIcon onClick={handleNext} />  </div>
            </div>

            <div className={classes.imgThumbs}>
                {data.map((item, index) => {

                    return <div key={index} className={index === current.current ? classes.activeThumb : classes.thumb}><img src={`${item.node.originalSrc}`} onClick={() => handleClick(index)} alt='product-img' /></div>
                }
                )
                }

            </div>
        </div>
    );
}
export default ImageFeaturedCarousel;

