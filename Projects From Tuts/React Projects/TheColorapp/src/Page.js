import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PageStyles'

function Page({ children }) {
    return <section className='Page'>{children}</section>;
}

export default withStyles(styles)(Page)