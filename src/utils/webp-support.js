import {hasValue} from '@propus/utility';

const checkServerSide = (agent) => {
    if (agent) {
        return agent.indexOf('image/webp') > -1;
    }
    return false;
};

const checkClientSide = () => {
    if (hasValue(document)) {
        const canvas = document.createElement('canvas');
        if (canvas.getContext && canvas.getContext('2d')) {
            return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
    }
    return false;
};

export const isWebpSupport = (agent) => {
    return checkServerSide(agent) || checkClientSide();
};
