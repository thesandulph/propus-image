import {useMemo} from 'react';
import {makeImage} from './make-image';

export const useImageProps = (support, src, webpSrc) => {
    const source = useMemo(() => support ? (webpSrc || src) : src, [src, webpSrc]);
    return useMemo(() => makeImage(source, key), [source, key])
};
