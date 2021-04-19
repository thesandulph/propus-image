import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {withImage} from './ImageContext';
import {useImageProps} from './utils';

const Image = ({alt, src, srcKey, webpSrc, image, ...props}) => {
    const image_props = useImageProps(image.webp_support, src, webpSrc, srcKey);
    return (
        <img
            alt={image.format(alt)}
            {...props}
            {...image_props}
        />
    );
};

Image.propTypes = ImgHTMLAttributes & {
    alt: PropTypes.any,
    src: PropTypes.any,
    srcKey: PropTypes.any,
    webpSrc: PropTypes.any,
    style: PropTypes.any,
    className: PropTypes.string,
    image: PropTypes.shape({
        webp_support: PropTypes.bool.isRequired,
        format: PropTypes.func.isRequired,
    }).isRequired,
};

Image.defaultProps = {
    alt: null,
    src: null,
    srcKey: null,
    webpSrc: null,
    style: null,
    className: null,
};

export default memo(withImage(Image));
