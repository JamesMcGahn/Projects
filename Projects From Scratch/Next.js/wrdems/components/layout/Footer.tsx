import React from 'react';
import classes from '../../styles/Footer.module.css';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className={classes.container}>
      <div className={classes.innercontainer}>
        <div className={classes.left} />
        <div className={classes.middle}>
          <p>Paid for by Wood-Ridge Democrats {year}</p>
          <p>&copy;{year} Wood-Ridge Democrats</p>
        </div>
        <div className={classes.right} />
      </div>
    </div>
  );
}

export default Footer;
