const clamp = (val, min, max) => (val > max ? max : val < min ? min : val);

export default clamp;
