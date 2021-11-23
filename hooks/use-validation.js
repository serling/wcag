import { useState } from 'react';

const UseValidation = (value, input) => {
    const [isValid, setIsValid] = useState(false);

    // if (input.props.type === 'text')

    if (!!value) setIsValid(true);

    return [isValid, message];
};

export default UseValidation;
