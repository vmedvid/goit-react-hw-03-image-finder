import PropTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, largeImgURL, onClickImg }) => {
  return (
    <GalleryItem>
      <img
        src={src}
        alt={alt}
        onClick={() => onClickImg({ img: largeImgURL, alt })}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  largeImgURL: PropTypes.string.isRequired,
  onClickImg: PropTypes.func.isRequired,
};
