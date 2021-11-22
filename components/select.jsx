import { useContext } from 'react';

import withError from '/components/with-error';
import ErrorContext from '../contexts/error-context';

const Select = ({
    id,
    onChange = () => {},
    labelText = 'Default label text',
    options = []
}) => {
    const errorId = `error-${id}`;

    const { errorMessage, setErrorMessage, clearErrorMessage, hasError } =
        useContext(ErrorContext);

    const handleOnChange = value => {
        if (hasError) clearErrorMessage();

        onChange(id, value);
    };

    return (
        <>
            <div className="select">
                <label htmlFor={id}>{labelText}</label>
                <select
                    id={id}
                    aria-describedby={errorId}
                    onChange={e => handleOnChange(e.target.value)}
                >
                    {options.map(({ label, value }, index) => {
                        return (
                            <option key={index} id={index} value={value}>
                                {label}
                            </option>
                        );
                    })}
                </select>
            </div>

            <style jsx>{`
                select {
                    font-size: 1.2rem;
                    padding: 0.25rem 1rem 0.25rem 0.25rem;
                    ${hasError ? 'border: 2px solid red' : ''};
                }

                label {
                    margin-bottom: 0.5rem;
                }
            `}</style>
        </>
    );
};

export default withError(Select);
