import React from 'react';
import Image from 'next/future/image';
import classes from '../../styles/FeatureImage.module.css';

interface FeatureImageProps {
  imgLink: string;
  altText: string;
}

function FeatureImage({ imgLink, altText }: FeatureImageProps) {
  return (
    <div className={classes.container}>
      <div className={classes.innercontainer}>
        <div className={classes.image}>
          <Image src={imgLink} alt={altText} fill />
        </div>
      </div>
    </div>
  );
}

export default FeatureImage;
