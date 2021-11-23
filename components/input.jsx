import { useContext, useState, useEffect } from 'react';

import withError from '/components/with-error';
import ErrorContext from '../contexts/error-context';

const REQUIRED_VALIDATION_TEXT = 'This field is required by law.';
const GENERIC_VALIDATION_TEXT = "Oops! Something's wrong here.";

const hasText = text => {
    console.log('checking this', text);
    return !text;
};

const checkIfThat = text => {
    console.log('checking that', text);
    return !!text;
};

const types = {
    text: 'text',
    number: 'number',
    email: 'email',
    textarea: 'textarea',
    tel: 'tel',
    password: 'password'
};

const validators = {
    text: [
        {
            fn: hasText,
            message: REQUIRED_VALIDATION_TEXT
        },
        {
            fn: checkIfThat,
            message: GENERIC_VALIDATION_TEXT
        }
    ]
};

const Input = ({
    id,
    initialValue = '',
    placeholderText = 'Default placeholder',
    onChange = () => {},
    onBlur = () => {},
    labelText = 'Default label',
    leadText = 'Default description.',
    type = types.text
}) => {
    const [value, setValue] = useState(initialValue);

    const InputElement = type === types['textarea'] ? 'textarea' : 'input';
    const errorId = `error-${id}`;

    const { errorMessage, setErrorMessage, clearErrorMessage, hasError } =
        useContext(ErrorContext);

    const handleOnChange = value => {
        setValue(value);

        if (hasError) clearErrorMessage();
    };

    const handleOnBlur = value => {
        // validators[type] &&
        //     validators[type].map(({ fn, message }) => {
        //         if (fn(value)) setErrorMessage(message);
        //     });
        // onBlur(id);
    };

    // useEffect(() => {
    //     console.log('has error', hasError);
    // }, [hasError]);

    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <p className="lead">{leadText}</p>
            <InputElement
                className="input"
                autoComplete="on"
                aria-describedby={errorId}
                id={id}
                value={value}
                type={type !== types['textarea'] ? types[type] : null}
                placeholder={placeholderText}
                onChange={e => handleOnChange(e.target.value)}
                onBlur={e => handleOnBlur(e.target.value)}
            />

            <style jsx>{`
                textarea {
                    width: 300px;
                    height: 150px;
                    resize: none;
                }

                label {
                    font-size: 1.2rem;
                }

                .lead {
                    font-size: 1rem;
                }

                .input {
                    padding: 0.5rem;
                    min-width: 300px;
                    border: 2px solid currentColor;
                    border-color: ${hasError ? '#950404' : 'currentColor'};
                }
            `}</style>
        </>
    );
};

export default withError(Input);
