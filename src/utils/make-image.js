import {isArray, isObject, isString} from '@propus/utility';

const imageSet = (source) => {
    const srcset = Object.keys(source).reduce((accumulator, item) => {
        const tag = item === '1x' ? '' : item;
        const value = [source[item], tag].join(' ').trim();
        if (value) {
            return [accumulator, value].join(', ')
        }
        return accumulator;
    }, '');
    return {srcset};
};

const sourceArrayToObject = (source) => {
    return source.reduce((accumulator, item, index) => ({
        ...accumulator,
        [`${index + 1}x`]: item,
    }), {});
};

export const makeImage = (source, key) => {
    if (isString(source)) {
        return source;
    }
    if (isArray(source)) {
        const config = sourceArrayToObject(source)
        return {
            src: source[key],
            ...imageSet(config),
        };
    }
    if (isObject(source)) {
        return {
            src: source[key],
            ...imageSet(source),
        };
    }
    return null;
};
