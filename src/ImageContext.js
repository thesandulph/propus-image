import {createContext} from '@propus/core';
import {isWebpSupport} from './utils';

const callback = ({agent, format = value => value}) => ({
    format,
    webp_support: isWebpSupport(agent),
});

export const [
    ImageProvider,
    withImage,
    useImageContext,
] = createContext('image', callback);
