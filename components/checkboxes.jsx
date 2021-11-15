import { useContext } from 'react';

import withError from '/components/with-error';
import ErrorContext from '../contexts/error-context';

const types = {
   checkbox: 'checkbox',
   radio: 'radio'
};

const Checkboxes = ({
   id,
   labelText = 'Default legend text',
   onChange = () => {},
   type = types.checkbox,
   options = []
}) => {
   const errorId = `error-${id}`;

   const { errorMessage, setErrorMessage, clearErrorMessage, hasError } =
      useContext(ErrorContext);

   const handleOnChange = checked => {
      if (hasError) clearErrorMessage();

      onChange(checked);
   };

   return (
      <>
         <fieldset className="checkboxes" aria-describedby={errorId}>
            <legend>{labelText}</legend>
            {options.map(
               ({ labelText, isChecked, onChange = () => {} }, index) => {
                  const optionId = `${id}-${index}`;

                  return (
                     <div key={index} className="checkbox">
                        <input
                           onChange={e => handleOnChange(e.target.checked)}
                           name={type === types['radio'] ? id : optionId}
                           id={optionId}
                           type={types[type]}
                           checked={isChecked}
                        />
                        <label htmlFor={optionId}>{labelText}</label>
                     </div>
                  );
               }
            )}
         </fieldset>
         <style jsx>{`
            input {
               margin: 0 0.5rem 0 0;
               width: 20px;
               height: 20px;
            }

            label {
               font-size: 1.2rem;
            }

            .checkbox {
               margin-bottom: 1rem;
               display: flex;
               align-items: center;
            }

            .checkboxes {
               border: ${hasError ? '2px solid red' : ''};
            }

            .checkbox:last-child {
               margin-bottom: 0;
            }

            legend {
               margin-bottom: 0.5rem;
            }
         `}</style>
      </>
   );
};

export default withError(Checkboxes);
