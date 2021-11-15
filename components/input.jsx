import { useContext } from 'react';

import withError from '/components/with-error';
import ErrorContext from '../contexts/error-context';

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
   onChange = () => {},
   labelText = 'Default label',
   leadText = 'Default description.',
   type = types.text
}) => {
   const InputElement = type === types['textarea'] ? 'textarea' : 'input';
   const errorId = `error-${id}`;

   const { errorMessage, setErrorMessage, clearErrorMessage, hasError } =
      useContext(ErrorContext);

   const handleOnChange = () => {
      if (hasError) clearErrorMessage();
      onChange();
   };

   return (
      <>
         <label htmlFor={id}>{labelText}</label>
         <p className="lead">{leadText}</p>
         <InputElement
            className="input"
            aria-describedby={errorId}
            id={id}
            type={type !== types['textarea'] ? types[type] : null}
            placeholder={placeholderText}
            onChange={handleOnChange}
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
               border-color: ${hasError ? 'red' : 'currentColor'};
            }
         `}</style>
      </>
   );
};

export default withError(Input);
