import {createContext} from '@propus/core';
import {hasValue} from '@propus/utility';

const callback = ({agent, textFormatter = value => value}) => {
    let webp_support = false;
    if (agent) {
        webp_support = agent.indexOf('image/webp') > -1;
    }
    if (!webp_support && hasValue(document)) {
        const canvas = document.createElement('canvas');
        if (canvas.getContext && canvas.getContext('2d')) {
            webp_support = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
    }
    return {
        webp_support,
        textFormatter,
    };
};

export const [
    ImageProvider,
    withImage,
    useImageContext,
] = createContext('image', callback);
