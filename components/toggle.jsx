import { useRef } from 'react';

import { useContext } from 'react';

import withError from '/components/with-error';
import ErrorContext from '../contexts/error-context';

const Toggle = ({ id, labelText = 'Default label', onChange = () => {} }) => {
   const { errorMessage, setErrorMessage, clearErrorMessage, hasError } =
      useContext(ErrorContext);

   const handleOnChange = checked => {
      if (hasError) clearErrorMessage();

      onChange(id, checked);
   };

   return (
      <>
         <div>
            <div className="label">{labelText}</div>
            <label className="toggle" htmlFor={id}>
               <span className="toggle-label">{labelText}</span>
               <input
                  id={id}
                  type="checkbox"
                  onChange={e => handleOnChange(e.target.checked)}
               />
               <span className="slider" />
            </label>
         </div>

         <style jsx>{`
            .label {
               margin-bottom: 0.5rem;
               cursor: default;
            }

            .toggle {
               position: relative;
               display: inline-block;
               width: 60px;
               height: 34px;
            }

            .toggle-label {
               opacity: 0;
               width: 0;
               height: 0;
            }

            input {
               opacity: 0;
               width: 0;
               height: 0;
            }

            input:focus + .slider {
               border-color: black;
            }

            .slider {
               position: absolute;
               border-radius: 34px;
               cursor: pointer;
               border: 2px solid transparent;
               border-color: ${hasError ? 'red' : 'transparent'};
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               background-color: #ccc;
               transition: 0.3s;
            }

            .slider:before {
               position: absolute;
               border-radius: 50%;
               content: '';
               height: 24px;
               width: 24px;
               left: 4px;
               bottom: 3px;
               background-color: white;
               transition: 0.3s;
            }

            input:checked + .slider {
               background-color: #76ae20;
            }

            input:focus + .slider {
               box-shadow: 0 0 1px #76ae20;
            }

            input:checked + .slider:before {
               transform: translateX(26px);
            }
         `}</style>
      </>
   );
};

export default withError(Toggle);
