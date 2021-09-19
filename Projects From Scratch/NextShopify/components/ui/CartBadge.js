import React from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid gold`,
        padding: '0 4px',
        background: 'gold',
        color: 'black'
    },
}))(Badge);

function CartBadge({ cartLength }) {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartLength}>
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}

export default CartBadge;