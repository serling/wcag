import { useContext, useState } from 'react';

import Input from '/components/input';
import withError from '/components/with-error';
import ErrorContext from '../contexts/error-context';

const REQUIRED_VALIDATION_TEXT = 'This field is required by law.';

const TextInput = ({
    onBlur,
    isValid,
    isTouched,
    isDirty,
    initialValue = '',
    ...restProps
}) => {
    const [value, setValue] = useState(initialValue);

    const { setErrorMessage, clearErrorMessage, hasError } =
        useContext(ErrorContext);

    const handleOnBlur = (id, value) => {
        if (!value) setErrorMessage(REQUIRED_VALIDATION_TEXT);

        //TODO

        onBlur(id);
    };

    const handleOnChange = value => {
        if (hasError) clearErrorMessage();

        setValue(value);
    };

    return (
        <>
            <Input
                value={value}
                type={Input.types.text}
                hasError={hasError}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                ariaDescribedby={`error-${restProps?.id}`}
                {...restProps}
            />
            <style jsx>{``}</style>
        </>
    );
};

export default withError(TextInput);
