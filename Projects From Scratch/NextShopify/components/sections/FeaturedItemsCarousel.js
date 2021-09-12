import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MiniProductCard from '../cards/MiniProductCard'
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            color: 'black',
            fontSize: '2rem'
        },
        '& svg:hover': {
            cursor: 'pointer'
        }
    },
    slider: {

        width: '100%',
        height: '350px',
        color: 'black',
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

    },
}));

function FeaturedItemsCarousel({ products }) {
    const classes = useStyles();
    const [current, setCurrent] = useState({
        min: 0,
        max: 3,
    })
    const [imageHover, setimageHover] = useState(0);

    const length = products.length

    const handlePrevious = () => {
        current.min === 0 ? setCurrent({ min: length - 4, max: length - 1 }) : setCurrent({ min: current.min - 1, max: current.max - 1 })

    }
    const handleNext = () => {
        current.max === length - 1 ? setCurrent({ min: 0, max: 3 }) : setCurrent({ min: current.min + 1, max: current.max + 1 })
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <ChevronLeftIcon onClick={handlePrevious} /> <h2>Featured Items</h2><ChevronRightIcon onClick={handleNext} />
            </div>
            <div className={classes.slider}>
                {products.map((item, index) => {
                    return (
                        index >= current.min && index <= current.max ?
                            <MiniProductCard item={item} key={index} /> : null
                    )
                }
                )
                }

            </div>
        </div>
    );
}

export default FeaturedItemsCarousel;