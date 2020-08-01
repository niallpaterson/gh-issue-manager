import chroma from 'chroma-js';

const getContrast = (color) => (chroma.contrast(color, '#FFFFFF') > 4.5 ? '#FFFFFF' : '#000000');

export default getContrast;
