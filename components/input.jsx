import Error from '/components/error';

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
   placeholderText = 'Default placeholder',
   errorText = 'Default dynamic error message',
   hasError = false,
   onChange,
   labelText = 'Default label',
   leadText = 'Default description.',
   type = types.text
}) => {
   const InputElement = type === types['textarea'] ? 'textarea' : 'input';

   return (
      <>
         <label htmlFor={id}>{labelText}</label>
         <p className="lead">{leadText}</p>
         <InputElement
            className={hasError ? `input input--error` : 'input'}
            id={id}
            type={type !== types['textarea'] ? types[type] : null}
            placeholder={placeholderText}
            onChange={onChange}
         />
         {hasError && errorText && <Error text={errorText} />}

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
            }

            .input--error {
               border-color: red;
            }
         `}</style>
      </>
   );
};

export default Input;
