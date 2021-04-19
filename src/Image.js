import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {makeImage} from './utility';
import {useImageContext} from './context';

const Image = ({alt, src, config, webpConfig, ...props}) => {
    const {image} = useImageContext();
    const source = useMemo(() => (
        image.webp_support ? webpSrc || src : src
    ), [src, webpSrc]);
    return (
        <img
            alt={image.textFormatter(alt)}
            {...props}
            {...makeImage(source, defaultSrc)}
        />
    );
};

Image.propTypes = {
    alt: PropTypes.any,
    src: PropTypes.any,
    webpSrc: PropTypes.any,
    defaultSrc: PropTypes.string,
    className: PropTypes.string,
};

Image.defaultProps = {
    alt: null,
    src: null,
    webpSrc: null,
    defaultSrc: null,
    className: null,
};

export default memo(Image);
