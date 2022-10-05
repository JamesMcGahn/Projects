import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import classes from '../../styles/AboutMe.module.css';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import { AboutMeProps } from '../../interfaces/AboutMeProps';
import Image from 'next/future/image';
import React from 'react';

interface AboutMe {
  reverse?: boolean;
  data: AboutMeProps;
  backgroundColor?: string;
}

function AboutMe({ reverse = false, data, backgroundColor }: AboutMe) {
  const { item, image } = data;

  const { title } = item.fields;
  const { aboutMeText } = item.fields;

  const cardImg = image[0].fields.file;
  const cardImgAlt = image[0].fields.title;

  const imageCont = (
    <div className={classes.cardImg}>
      <Image fill src={`https:${cardImg.url}`} quality="100" alt={cardImgAlt} />
    </div>
  );
  const textCont = (
    <div className={classes.cardText}>
      <h2>{title}</h2>
      <Markdown options={{ wrapper: React.Fragment }}>{aboutMeText}</Markdown>
    </div>
  );

  return (
    <div className={classes.container} style={{ backgroundColor: backgroundColor }}>
      <div className={reverse ? classes.innerReverse : classes.innerContainer}>
        <Card className={reverse ? `${classes.box} ${classes.overlayReverse}` : classes.box}>{reverse ? textCont : imageCont}</Card>
        <Card className={reverse ? classes.box : `${classes.box} ${classes.overlay}`}>{reverse ? imageCont : textCont}</Card>
      </div>
    </div>
  );
}

export default AboutMe;
