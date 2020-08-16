import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <ImageCard
        key={image.id}
        url={image.urls.regular}
        description={image.alt_description}
      />
    );
  });

  return <div className="image-list">{images}</div>;
};

ImageList.defaultProps = {
  images: []
};

export default ImageList;