import Input from 'components/input';

import { useState } from 'react';

const UseForm = inputs => {
    const [data, setData] = useState({ inputs });

    const handleOnChange = e => {
        const target = e.target;
        const name = target.name;
        const value = e.target.value;

        setData({
            ...data,
            [name]: value
        });
    };

    const Inputs = inputs.map(input => (
        <Input
            key={input.name}
            name={input.name}
            type={input.type}
            label={input.label}
            placeholder={input.placeholder}
            options={input.options}
            value={data[input.name]}
            onChange={handleOnChange}
        />
    ));

    return [data, Inputs];
};

export default UseForm;
