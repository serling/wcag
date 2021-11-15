import Select from 'react-select';

import { useContext } from 'react';

import withError from '/components/with-error';
import ErrorContext from '../contexts/error-context';

const ComplexSelect = ({
   id,
   labelText = 'Default label text',
   onChange = () => {},
   placeholder = 'Default placeholder text',
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
         <div className="complex-select">
            <label htmlFor={id}>{labelText}</label>
            <Select
               instanceId={`instance-${id}`}
               inputId={id}
               onChange={handleOnChange}
               aria-describedby={errorId}
               placeholder={placeholder}
               options={options}
               isClearable={true}
               isMulti={true}
               isSearchable={true}
               styles={{
                  control: provided => {
                     return {
                        ...provided,
                        ...(hasError
                           ? { borderColor: 'red', borderWidth: '2px' }
                           : {})
                     };
                  }
               }}
            />
         </div>

         <style jsx>{`
            .complex-select {
               font-size: 1.5rem;
               border: ${hasError} ? "2px solid red" : ""
            }

            label {
               margin-bottom: 0.5rem;
            }

         `}</style>
      </>
   );
};

export default withError(ComplexSelect);
