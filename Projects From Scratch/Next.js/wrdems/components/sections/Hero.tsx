import classes from '../../styles/Hero.module.css';
import Link from 'next/link';
import { AboutMeProps } from '../../interfaces/AboutMeProps';
import Image from 'next/future/image';
import React from 'react';

interface HeroProps {
  children?: React.ReactNode;
  imgLink: String;
  altText?: String;
}

function Hero({ imgLink, children }: HeroProps) {
  return (
    <div className={classes.container}>
      <div className={classes.innercontainer}>
        <div className={classes.heroText}>{children}</div>
        <div className={classes.image}>
          <Image src={`${imgLink}`} alt="" fill />
        </div>
      </div>
    </div>
  );
}

export default Hero;
