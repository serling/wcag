import Error from '/components/error';
import ErrorContext from '../contexts/error-context';
import useError from '/hooks/use-error';

/* eslint-disable */
const withError =
    Component =>
    ({ error, ...props }) =>
        (
            <WithError error={error} id={`error-${props?.id}`}>
                <Component {...props} />
            </WithError>
        );

const WithError = ({ children, error = { text: '' }, id }) => {
    const { text } = error;

    const [errorMessage, setErrorMessage, clearErrorMessage] = useError(text);

    return (
        <ErrorContext.Provider
            value={{
                errorMessage,
                setErrorMessage,
                clearErrorMessage,
                hasError: !!errorMessage
            }}
        >
            {children}
            {errorMessage && <Error text={errorMessage} id={id} />}
        </ErrorContext.Provider>
    );
};

export default withError;
