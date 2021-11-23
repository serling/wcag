const types = {
    text: 'text',
    number: 'number',
    email: 'email',
    textarea: 'textarea',
    tel: 'tel',
    password: 'password'
};

const Input = ({
    id,
    hasError,
    value,
    placeholderText = 'Default placeholder',
    onChange = () => {},
    onBlur = () => {},
    labelText = 'Default label',
    leadText = 'Default description.',
    type = types.text,
    ariaDescribedby
}) => {
    const InputElement = type === types['textarea'] ? 'textarea' : 'input';

    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <p className="lead">{leadText}</p>
            <InputElement
                className="input"
                autoComplete="on"
                id={id}
                value={value}
                type={type !== types['textarea'] ? types[type] : null}
                placeholder={placeholderText}
                onChange={e => onChange(e.target.value)}
                onBlur={e => onBlur(id, e.target.value)}
                aria-describedby={ariaDescribedby}
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

Input.types = types;

export default Input;
