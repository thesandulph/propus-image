import {isArray, isObject} from '@propus/utility';

const imageSet = (source) => {
    const srcset = source.map((item, index) => {
        const tag = index ? `${index + 1}x` : '';
        return [item, tag].join(' ').trim();
    }).join(', ');
    return {srcset};
};

const sourceArrayToObject = (source) => {
    return source.reduce((accumulator, item, index) => ({
        ...accumulator,
        [`${index + 1}x`]: item,
    }), {});
};

export const makeImage = (source, key) => {
    if (isArray(source)) {
        const config = sourceArrayToObject()
        return {
            src: source[key],
            ...arrayImageSet(source),
        };
    }
    if (isObject(source)) {
        return {
            src: other[src],
            ...imageSet(source),
        };
    }
    return null;
};
