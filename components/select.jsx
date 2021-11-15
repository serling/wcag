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

   const handleOnChange = () => {
      if (hasError) clearErrorMessage();
      onChange();
   };

   return (
      <>
         <div className="select">
            <label htmlFor={id}>{labelText}</label>
            <select
               id={id}
               aria-describedby={errorId}
               onChange={handleOnChange}
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
               font-size: 1.5rem;
               padding: 0.25rem 1rem;
               border: ${hasError ? '2px solid red' : ''};
            }

            label {
               margin-bottom: 0.5rem;
            }
         `}</style>
      </>
   );
};

export default withError(Select);
