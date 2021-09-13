import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    slider: {
        width: '100%',
        color: 'black',
        display: 'flex',
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
}));

function ProductCarousel({ children, data, current, setCurrent, maxDisplay }) {
    const classes = useStyles();
    const length = data.length
    const handlePrevious = () => {
        current.min === 0 ? setCurrent({ min: (length - 1) - maxDisplay, max: length - 1 }) : setCurrent({ min: current.min - 1, max: current.max - 1 })

    }
    const handleNext = () => {
        current.max === length - 1 ? setCurrent({ min: 0, max: maxDisplay }) : setCurrent({ min: current.min + 1, max: current.max + 1 })
    }

    return (
        <div className={classes.slider}>
            <ChevronLeftIcon onClick={handlePrevious} />
            {data.map((item, index) => {
                if (index >= current.min && index <= current.max) {
                    return React.cloneElement(children, { item: item, key: index })
                }
            }
            )
            }
            <ChevronRightIcon onClick={handleNext} />
        </div>
    );
}

export default ProductCarousel;